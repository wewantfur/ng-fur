/**
 * Angular Divider directive
 * 
 * @author Ids Klijnsma - Fur
 * @version 0.3 Copyright (C) 2013 Fur
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (angular, $) {

	var furGridDirectives = angular.module('ngfur.divider.directives', []);
	// $('.divider').divider({widths: [25,75]});
	furGridDirectives.directive('divider', ['$parse', function($parse) {
			return {
				restrict : 'E',
				link : function($scope, elem, attrs) {
					var invoker = $parse(attrs.onWidthChange);
					$(elem).divider();
					$(elem).on('dividerChange', function(e,data) {
						invoker($scope, {widths: data.panelWidths} );
					});
				}
			};
		}]);
	
	angular.module('ngfur.divider', ['ngfur.divider.directives']);
}(angular, jQuery));;