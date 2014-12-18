/**
 * Created by like on 17/12/14.
 */
controlGlobal.controller("tableCtrl", ["$scope", "$filter", "$modal", "$log", '$http', 'cameraClusterService',
    function ($scope, $filter, $modal, $log, $http) {
        var init;
        $scope.open = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'app/views/camera/modaltest.html',
                controller: 'ModalInstanceCtrl',
                size: size

            });
            modalInstance.result.then(function (cameraCluster) {
                cameraCluster.$save(function (data, status) {
                    $log.info('successful');
                });
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


        $scope.stores = [{
            name: "Nijiya Market",
            price: "$$",
            sales: 292,
            rating: 4
        }, {
            name: "House of Bagels",
            price: "$",
            sales: 82,
            rating: 4.4
        }];
        $scope.searchKeywords = "";
        $scope.filteredStores = [];
        $scope.row = "";
        $scope.select = function (page) {
            var end, start;
            start = (page - 1) * $scope.numPerPage;
            end = start + $scope.numPerPage;
            $scope.currentPageStores = $scope.filteredStores.slice(start, end);
        };

        $scope.onFilterChange = function () {
            $scope.select(1);
            $scope.currentPage = 1;
            $scope.row = "";
        };
        $scope.onNumPerPageChange = function () {
            $scope.select(1);
            $scope.currentPage = 1;
        };
        $scope.onOrderChange = function () {
            $scope.select(1);
            $scope.currentPage = 1;
        };
        $scope.search = function () {
            $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords);
            $scope.onFilterChange();
        };
        $scope.order = function (rowName) {
            if($scope.row !== rowName){
                $scope.row = rowName;
                    $scope.filteredStores = $filter("orderBy")($scope.stores, rowName);
                    $scope.onOrderChange();
            }else{
                void 0;
            }
        };
        $scope.numPerPageOpt = [3, 5, 10, 20];
        $scope.numPerPage = $scope.numPerPageOpt[2];
        $scope.currentPage = 1;
        $scope.currentPageStores = [];
        (init = function () {
            $scope.search();
            $scope.select($scope.currentPage);
        });
        $scope.search();

    }
])

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
    .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'cameraClusterService', function ($scope, $modalInstance, ccs) {
        $scope.cameraCluster = new ccs();
        $scope.ok = function () {
            $modalInstance.close($scope.cameraCluster);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }])


;