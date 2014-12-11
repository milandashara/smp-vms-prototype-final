/**
 * Created by milan on 12/10/2014.
 */
var camerasControllers = angular.module('camerasControllers', []);

camerasControllers.controller('CameraListCtrl', ['$scope', 'Camera', function ($scope, Camera) {
    $scope.cameras = Camera.query();
    $scope.orderProp = 'name';
}]);

camerasControllers.controller('CameraDetailCtrl', ['$scope', '$routeParams', 'Camera', function ($scope, $routeParams, Camera) {
    $scope.camera = Camera.get({id: $routeParams.id}, function (camera) {
        // $scope.mainImageUrl = camera.images[0];
    });

    //$scope.setImage = function(imageUrl) {
    //  $scope.mainImageUrl = imageUrl;
    //}
}]);