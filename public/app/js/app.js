var smpvmsApp = angular.module('smpvmsApp', [
    'ngRoute', 'cameraAnimations',
    'smpvmsControllers', 'smpvmsFilters', 'smpvmsServices'
]);

smpvmsApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/cameras', {
                templateUrl: '/assets/app/partials/camera-list.html',
                controller: 'CameraListCtrl'
            }).
            when('/cameras/:id', {
                templateUrl: '/assets/app/partials/camera-detail.html',
                controller: 'CameraDetailCtrl'
            }).
            otherwise({
                redirectTo: '/cameras'
            });
    }]);