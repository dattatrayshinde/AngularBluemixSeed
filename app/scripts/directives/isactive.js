'use strict';

/**
 * @ngdoc directive
 * @name angularBluemixSeedApp.directive:isActive
 * @description
 * # isActive
 */
angular.module('angularBluemixSeedApp')
.directive('isActive', ['$location', function ($location) {
return {
    restrict: 'A', //use as attribute
    replace: false,
    link: function (scope, elem) {
        //after the route has changed
        scope.$on('$routeChangeSuccess', function () {
            var hrefs = ['/#' + $location.path(),
                         '#' + $location.path(),
                         $location.path()];
            angular.forEach(elem.find('a'), function (a) {
                a = angular.element(a);
                if (-1 !== hrefs.indexOf(a.attr('href'))) {
                    a.parent().addClass('active');
                } else {
                    a.parent().removeClass('active');
                }
            });
        });
    }
};
}]);
