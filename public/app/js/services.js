var smpvmsServices = angular.module('smpvmsServices', ['ngResource']);

smpvmsServices.factory('Camera', ['$resource',
    function ($resource) {
        return $resource('/api/:id', {}, {
            query: {method: 'GET', params: {id: 'cameras'}, isArray: true}
        });
    }]);