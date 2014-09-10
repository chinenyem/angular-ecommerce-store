angular.module("storeFeature")
	.factory("storeFeaturehttpSvc",  function ($rootScope, $log, $http){
		
		var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/chinenyemcheapproduct";

		var getcheapProducts = function (){
			return $http.get(urlBase);
		};

		var getcheapProduct = function (id){
			return $http.get(urlBase + "/" + id);
		};

		var goToAdd = function (cheapproduct){
			return $http.get(urlBase, cheapproduct).then(function(response){
			$rootScope.$broadcast("cheapproduct:added");
			$log.info("cheapproduct:added");	
			});
		};

		var updateProduct = function (cheapproduct){
			return $http.put(urlBase + "/" + cheapproduct._id, cheapproduct).then(function (responose) {
            $rootScope.$broadcast("cheapproduct:updated");
            $log.info("cheapproduct:updated");
          });
		};
		var deleteProduct = function (cheapproduct) {
          return $http.delete(urlBase + "/" + cheapproduct._id, cheapproduct).then(function (response) {
            $rootScope.$broadcast("cheapproduct:deleted");
            $log.info("cheapproduct:deleted");
          });
        };

        return {
            getcheapProducts: getcheapProducts,
            getcheapProduct: getcheapProduct,
            addProduct: addProduct,
            updateProduct: updateProduct,
            deleteProduct: deleteProduct

        };








});