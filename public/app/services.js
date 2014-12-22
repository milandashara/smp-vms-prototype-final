
/**************************
 App ui Services

 loggit - Creates a logit type message for all logging

 **************************/
//
var smpvmsServices = angular.module('smpvmsServices', ['ngResource']);

smpvmsServices.factory('cameraClusterService', ['$resource',
    function ($resource) {
        return $resource('/api/cameraCluster', {}, {
        //    query: {method: 'GET', params: {id: 'cameras'}, isArray: true}
        });
    }]);
        //return toastr.options = {
        //    closeButton: !0,
        //    positionClass: "toast-top-right",
        //    timeOut: "3000"
        //}, logIt = function(message, type) {
        //    return toastr[type](message);
        //}, {
        //    log: function(message) {
        //        logIt(message, "info");
        //    },
        //    logWarning: function(message) {
        //        logIt(message, "warning");
        //    },
        //    logSuccess: function(message) {
        //        logIt(message, "success");
        //    },
        //    logError: function(message) {
        //        logIt(message, "error");
//        //    }
//        //};
//    }
//]);

