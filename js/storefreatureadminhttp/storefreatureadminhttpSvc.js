angular.module("storeFreatureadminhttp")
.factory("storeFreatureadminhttpSvc",  function ($rootScope, $log, $http){

	var urlClient = "http://tiy-fee-rest.herokuapp.com/collections/chinenyemanotheroneandtired";

	var getcheapItems = function () {
        return $http.get(urlClient);
      };

      var getcheapItem = function (id) {
        return $http.get(urlClient + "/" + id);
      };

      var addcheapItem = function (item) {
        return $http.post(urlClient, item).then(function (response) {
          $rootScope.$broadcast("item:added");
          $log.info("item:added");
          });
      };

      var updateCheapItem = function (item) {
        return $http.put(urlClient + "/" + item._id, item).then(function (responose) {
          $rootScope.$broadcast("item:updated");
          $log.info("item:updated");
        });
      };

      var deletecheapItem = function (item) {
        return $http.delete(urlClient + "/" + item._id, item).then(function (response) {
          $rootScope.$broadcast("item:deleted");
          $log.info("item:deleted");
        });
      };

      return {
        getcheapItems: getcheapItems,
        getcheapItem: getcheapItem,
        addcheapItem: addcheapItem,
        updateCheapItem: updateCheapItem,
        deletecheapItem: deletecheapItem
      };

    });



































