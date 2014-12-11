angular.module('smpvmsControllers', ['camerasControllers']);


//smpvmsControllers.controller('CameraListCtrl', ['$scope', 'Camera', function($scope, Camera) {
//  $scope.cameras = Camera.query();
//  $scope.orderProp = 'name';
//}]);
//
//smpvmsControllers.controller('CameraDetailCtrl', ['$scope', '$routeParams', 'Camera', function($scope, $routeParams, Camera) {
//  $scope.camera = Camera.get({id: $routeParams.id}, function(camera) {
//   // $scope.mainImageUrl = camera.images[0];
//  });
//
//  //$scope.setImage = function(imageUrl) {
//  //  $scope.mainImageUrl = imageUrl;
//  //}
//}]);