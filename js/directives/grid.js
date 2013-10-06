/**
 * Angular Grid directive
 * @author Ids Klijnsma - Fur
 * @version 0.3
 * Copyright (C) 2013 Fur
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions 
 * of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 */
(function (angular, $) {
	
	var furGridDirectives = angular.module('ngfur.grid.directives', []);
	var defaultCellTemplate = "{{row[col.value]}}";
	var defaultHeaderTemplate = "{{col.label}}";
	

	
	furGridDirectives.directive('furGridHeaderCell', ["$compile", "$templateCache", function ($compile, $templateCache) {
		return {
	    	restrict: 'A',
	        scope: false,
	        replace: true,
	        compile: function() {
	            return {
	                pre: function($scope, elem, attrs) {
	                	var html = "<span>{{col.value}}</span>";
	                	
	                	if($scope.columndef[$scope.$index].hasOwnProperty('headerTemplate')) {
	                		elem.append($compile($scope.columndef[$scope.$index].headerTemplate)($scope));
	                	} else {
	                		elem.append($compile(html)($scope));
	                	}
	                }
	            };
	        }
	    };
	}]);
	
	furGridDirectives.directive('furGridHeader', ["$compile", "$templateCache", function ($compile, $templateCache) {
		return {
			restrict: 'A',
			scope: false,
			compile: function() {
				return {
					pre: function($scope, elem, attrs) {
						var html = $templateCache.get("ng-fur-grid-header.html");
						elem.append($compile(html)($scope));
					}
				};
			}
		};
	}]);
	
	furGridDirectives.directive('furGridRowCell', ["$compile", "$templateCache", function ($compile, $templateCache) {
		return {
			restrict: 'A',
			scope: false,
			replace: true,
			compile: function() {
				return {
					pre: function($scope, elem, attrs) {
						var html = "<span>{{row[col.value]}}</span>";
						
						if($scope.columndef[$scope.$index].hasOwnProperty('template')) {
							elem.append($compile($scope.columndef[$scope.$index].template)($scope));
						} else {
							elem.append($compile(html)($scope));
						}
						
						$(elem).on('dblclick', function(e){							
							$scope.$emit('rowDoubleClick',$scope.$parent.row);
						});
						
						$(elem).on('click', function(e){							
							$scope.$emit('rowClick',$scope.$parent.row);
						});
					}
				};
			}
		};
	}]);
	
	furGridDirectives.directive('furGridRows', ["$compile", "$templateCache", function ($compile, $templateCache) {
		return {
			restrict: 'A',
			scope: false,
			compile: function() {
				return {
					pre: function($scope, elem, attrs) {
						var html = $templateCache.get("ng-fur-grid-row.html");
						elem.append($compile(html)($scope));
					}
				};
			}
		};
	}]);
	
	
	furGridDirectives.directive('grid', ["$compile", "$templateCache", function ($compile, $templateCache) {
	    return {
	    	restrict: 'E',
	        scope: {
	        	columns: '=',
	        	dataprovider: '=',
	        	sortFunction: '@'
	        },
	        
	        controller: ['$scope', '$element', '$attrs', '$filter', function($scope, $element, $attrs, $filter) {
	        	
	        	// Is ctrlKey down
	        	$scope.ctrlKey = false;
	        	// Is shiftKey down
	        	$scope.shiftKey = false;
	        	
	        	// Contains all hashkeys with their selected state
	        	$scope.selection = {};
	        	
	        	// Reference to the previous selected row
	        	$scope.prevRow = null;
	        	
	        	// Reference to the sorting column
	        	$scope.sortCol = null;
	        	
	        	$scope.sortReverse = false;
	        	
	        	$scope.selectRow = function(e) {
	        		if(!$scope.ctrlKey && !$scope.shiftKey)
	        			$scope.selection = {};
	        		
	        		
	        		if($scope.ctrlKey) {
	        			$scope.selection[this.row.$$hashKey] = $scope.selection[this.row.$$hashKey] ? false : true;
	        		} else if($scope.shiftKey){
	        			if($scope.prevRow) {
	        				min = Math.min(this.$index, $scope.prevRow.$index);
	        				max = Math.max(this.$index, $scope.prevRow.$index);
	        				if(this.$index > $scope.prevRow.$index) {
	        					min++;
	        				} else {
	        					max--;
	        				}
	        				for(var i = min; i <= max; i++) {
	        					$scope.selection[$scope.dataprovider[i].$$hashKey] = $scope.selection[$scope.dataprovider[i].$$hashKey] ? false : true;
	        				}
	        			}
	        		} else {
	        			$scope.selection[this.row.$$hashKey] = true;
	        		}
	        		
	        		// Store the last row (for shift handling)
	        		$scope.prevRow = this;

	        		var s = [];
	        		var rl = $scope.dataprovider.length;
	        		for(var i = 0; i < rl; i++) {
	        			if($scope.selection[$scope.dataprovider[i].$$hashKey])
	        				s.push($scope.dataprovider[i]);
	        		}
	        		$scope.$emit('gridSelectionChanged', s);
	        	};
	        	
	        	/**
	        	 * Called when the dataprovider is updated
	        	 */
	        	$scope.resetSort = function() {
	        		if($scope.sortCol != null) {
	        			$scope.dataprovider = $filter('orderBy')($scope.dataprovider, this.sortCol, $scope.sortReverse);
	        		}
	        	};
	        	
	        	$scope.sortColumn = function() {
	        		$scope.sortReverse = $scope.sortCol == this.col.value ? !$scope.sortReverse : false ;
	        		$scope.sortCol = this.col.value;
	        		if(this.col.hasOwnProperty('sortFunction')) {
	        			$scope.dataprovider = $filter('orderBy')($scope.dataprovider, this.col.sortFunction, $scope.sortReverse);
	        			
	        		} else if(typeof($scope.sortFunction) == 'undefined') {
	        			// Use build-in sort
	        			$scope.dataprovider = $filter('orderBy')($scope.dataprovider, this.col.value, $scope.sortReverse);
	        		}
	        	};
	        }],
	        
	        compile: function() {
	            return {
	                pre: function(scope, elem, attrs) {
	                	
	                	scope.$watch('columndef', function(value) {
	    	        		if(value && value.length > 0) {
	    	        			if(scope.autoWidth) {
	    		        			var w = Math.floor(99 / value.length);
	    		        			for(var i = 0; i < value.length; i++) {
	    		        				$('.fur-col-' + value[i].value).css('width', + w + '%');
	    		        			}
	    	        			} else {
	    	        				for(var i = 0; i < value.length; i++) {
	    	        					$('.fur-col-' + value[i].value).css('width', null);
	    	        				}
	    	        				
	    	        			}
	    	        		}
	    	        	}, true);
	    	        	
	        			scope.$watch('columns', function(value) {
	        				var columndef = [];
	        				if($.isArray(value)) {
	        					
	        					for(var i = 0; i < value.length; i++) {
	        						if(typeof(value[i]) == 'string') {
	        							columndef.push({'label': value[i], 'value': value[i]});
	        						} else {
	        							columndef.push(value[i]);
	        						}
	        					}
	        				}

	    					scope.autoWidth = false;
	        				scope.columndef = columndef;
	        			}, true);
	    	        	
	        			scope.$watch('dataprovider', function(value) {
	        				if(value && value.length > 0 && scope.columndef.length == 0) {
	        					var columndef = [];
	        					for(var prop in value[0]) {
	    							columndef.push({'label': prop, 'value': prop});
	        					}
	        					scope.autoWidth = true;
	        					scope.columndef = columndef;
	        				}
	        				scope.resetSort();
	        			}, true);
	        			
	        			var keyHandler = function(e) {
	        				if(e.type == 'keydown') {
	        					if((e.ctrlKey || e.metaKey)) {
	        						// Ctrl key pressed
	        						scope.ctrlKey = true;
	        					}
	        					
	        					if(e.shiftKey) {
	        						scope.shiftKey = true;
	        					}
	        				} else {
	        					scope.ctrlKey = false;
	        					scope.shiftKey = false;
	        					
	        				}
	        			};
	        			
	        			$('body').on('keydown keyup', keyHandler);
	        			
	        			scope.$on('$destroy', function() {
	            			$('body').off('keydown keyup', keyHandler);
	        			});
	                	
	                	var html = $templateCache.get("ng-fur-grid.html");
	                	var cmp = $compile(html)(scope);
	                	elem.append(cmp);
	                
	                }
	            };
	        }
	    };
	}]);

	angular.module('ngfur.grid', ['ngfur.grid.directives']).run(["$templateCache", function($templateCache) {
		
		$templateCache.put("ng-fur-grid-row.html", 
			'<li ng-repeat="row in dataprovider" class="fur-row clearfix" ng-class="{\'fur-selected\': selection[row.$$hashKey] == true}" ng-click="selectRow()" data-rowid="{{$id}}">' +
			'	<div class="fur-cell fur-col-{{col.value}}" ng-repeat="col in columndef" data-rowindex="{{$parent.$index}}" data-colindex="{{$index}}" fur-grid-row-cell></div>' +		
			'</li>');
		$templateCache.put("ng-fur-grid-header.html", 
			'<div class="fur-headercell fur-col-{{col.value}}" ng-repeat="col in columndef" data-index="{{$index}}" ng-click="sortColumn()" fur-grid-header-cell></div>');
		
		$templateCache.put("ng-fur-grid.html", 
			'<div class="fur-grid">' +
				'<div class="fur-header clearfix" fur-grid-header></div>' +	
				'<ul class="fur-rows" fur-grid-rows></ul>' +	
			'</div>');
	}]);
}(angular, jQuery));