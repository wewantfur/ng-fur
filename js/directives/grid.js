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
	        controller: function($scope, $element, $attrs, $filter) {
	        	
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
	        					$scope.selection[$scope.rows[i].$$hashKey] = $scope.selection[$scope.rows[i].$$hashKey] ? false : true;
	        				}
	        			}
	        		} else {
	        			$scope.selection[this.row.$$hashKey] = true;
	        		}
	        		
	        		// Store the last row (for shift handling)
	        		$scope.prevRow = this;

	        		var s = [];
	        		var rl = $scope.rows.length;
	        		for(var i = 0; i < rl; i++) {
	        			if($scope.selection[$scope.rows[i].$$hashKey])
	        				s.push($scope.rows[i]);
	        		}
	        		$scope.$emit('gridSelectionChanged', s);
	        	};
	        	
	        	/**
	        	 * Called when the dataprovider is updated
	        	 */
	        	$scope.resetSort = function() {
	        		if($scope.sortCol != null) {
	        			$scope.rows = $filter('orderBy')($scope.rows, this.sortCol, $scope.sortReverse);
	        		}
	        	};
	        	
	        	$scope.sortColumn = function() {
	        		$scope.sortReverse = $scope.sortCol == this.col.value ? !$scope.sortReverse : false ;
	        		$scope.sortCol = this.col.value;
	        		if(this.col.hasOwnProperty('sortFunction')) {
	        			$scope.rows = $filter('orderBy')($scope.rows, this.col.sortFunction, $scope.sortReverse);
	        			
	        		} else if(typeof($scope.sortFunction) == 'undefined') {
	        			// Use build-in sort
	        			$scope.rows = $filter('orderBy')($scope.rows, this.col.value, $scope.sortReverse);
	        		}
	        	};
	        },
	        link: function(scope, elem, attrs, ctrl) {
	        	
	        	scope.$watch('columndef', function(value) {
	        		if(value && value.length > 0) {
	        			var w = Math.floor(99 / value.length);
	        			for(var i = 0; i < value.length; i++) {
	        				$('.fur-col-' + value[i].value).css('width', + w + '%');
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
    				scope.columndef = columndef;
    			}, true);
	        	
    			scope.$watch('dataprovider', function(value) {
    				if(value && value.length > 0 && scope.columndef.length == 0) {
    					var columndef = [];
    					for(var prop in value[0]) {
							columndef.push({'label': prop, 'value': prop});
    					}
    					scope.columndef = columndef;
    				}
    				scope.rows = angular.copy(value);
    				scope.resetSort();
    			}, true);
    			
    			var keyHandler = function(e) {
    				if(e.type == 'keydown') {
    					if(e.ctrlKey && e.keyCode == 17) {
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
    				console.log('DESTROY');
        			$('body').off('keydown keyup', keyHandler);
    			});
	        }
	    };
	});
}(angular, jQuery));