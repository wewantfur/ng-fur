/**
 * Angular Grid directive
 * @author Ids Klijnsma - Fur
 * @version 0.2
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
	angular.module('ngfur.grid', ['ngfur.grid.directives']);
	
	
	furGridDirectives.directive('grid', function () {
	    return {
	    	restrict: 'E',
	        scope: {
	        	columns: '=',
	        	dataprovider: '=',
	        	sortFunction: '@'
	        },
	        
	        templateUrl: 'js/directives/gridtemplate.html',
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
	        link: function(scope, elem, attrs, ctrl) {
	        	
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
	        }
	    };
	});
}(angular, jQuery));