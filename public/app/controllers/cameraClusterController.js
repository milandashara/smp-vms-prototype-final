/**
 * Created by like on 17/12/14.
 */
controlGlobal.controller("tableCtrl", ["$scope", "$filter", "$modal", "$log", '$http', 'cameraClusterService',
    function ($scope, $filter, $modal, $log, $http,cameraClusterService) {
        var init;

        $scope.selectedCluster = 'Nijiya Market';
        $scope.clusters = [];
        $scope.searchKeywords = "";
        $scope.filteredclusters = [];
        $scope.row = "";
        $scope.select = function (page) {
            var end, start;
            start = (page - 1) * $scope.numPerPage;
            end = start + $scope.numPerPage;
            $scope.currentPageclusters = $scope.filteredclusters.slice(start, end);
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
            $scope.filteredclusters = $filter("filter")($scope.clusters, $scope.searchKeywords);
            $scope.onFilterChange();
        };
        $scope.order = function (rowName) {
            if($scope.row !== rowName){
                $scope.row = rowName;
                    $scope.filteredclusters= $filter("orderBy")($scope.clusters, rowName);
                    $scope.onOrderChange();
            }else{
                void 0;
            }
        };
        $scope.numPerPageOpt = [3, 5, 10, 20];
        $scope.numPerPage = $scope.numPerPageOpt[2];
        $scope.currentPage = 1;
        $scope.currentPageclusters = [];
        $scope.updateTablemy  = function(){
            cameraClusterService.query(function(data){
                $scope.clusters = data;
$log.info(data);
            })
        }
        (init = function () {
            $scope.search();
            $scope.select($scope.currentPage);
        });
        $scope.search();
        $scope.updateTablemy();
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
    .controller('cameraClusterControler', ["$scope", "$filter", "$modal", "$log", '$http', 'cameraClusterService',
        function ($scope, $filter, $modal, $log, $http){
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
        } ])

;