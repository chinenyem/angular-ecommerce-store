angular.module("storeFeature")
	.factory("storeFeaturehttpSvc",  function ($log, $rootScope,  $http){
		
		var baseUrl = "http://tiy-fee-rest.herokuapp.com/collections/chinenyemcheapproduct";

		var getcheapProducts = function (){
			return $http.get(baseUrl);
		};




		var getcheapProduct = function (id){
			return $http.get(baseUrl + "/" + id);
		};

		var addCheap = function (cheapproduct){
			$http.post(baseUrl, cheapproduct).then(function(response){
			$rootScope.$broadcast("cheapproduct:added");
			$log.info("cheapproduct:added");	
			});
		};


		var deleteProduct = function (id) {
           $http.delete(baseUrl + "/" + id).then(function (response) {
            $rootScope.$broadcast("cheapproduct:deleted");
            $log.info("cheapproduct:deleted");
          });
        };

		var updateProduct = function (cheapproduct){
			$http.put(baseUrl + "/" + cheapproduct._id, cheapproduct).then(function (responose) {
            $rootScope.$broadcast("cheapproduct:updated");
            $log.info("cheapproduct:updated");
          });
		};

		var editInventoryBag = function(cheapproduct){
			$http.put(baseUrl + "/" + cheapproduct._id, cheapproduct).success(function(data){
			$rootScope.$broadcast("bagreview:edited");
			$log.info("bagreview:edited");
			});

		};
		

        return {
            getcheapProducts: getcheapProducts,
            getcheapProduct: getcheapProduct,
            addCheap: addCheap,
            deleteProduct: deleteProduct,
            updateProduct: updateProduct,
            editInventoryBag: editInventoryBag

        };


});