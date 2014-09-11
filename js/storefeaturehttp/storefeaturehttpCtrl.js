angular.module("storeFeaturehttp")
.controller("storefeaturehttpCtrl", function ($rootScope, $scope, $location, $routeParams, storeFeaturehttpSvc){
	storeFeaturehttpSvc.getcheapProducts().success(function (cheapproducts){
		$scope.cheapproducts = cheapproducts;
	});
		storeFeaturehttpSvc.getcheapProduct($routeParams.cheapproductId).then(function(response){
		$scope.singleProduct = response.data;
	});
		$scope.addCheap = function(cheapproduct){
		storeFeaturehttpSvc.addCheap(cheapproduct);
		$location.path("/storefeaturehttp");
	};
		$scope.editProducts = function (cheapproduct){
		storeFeaturehttpSvc.updateProduct(cheapproduct)
				$location.path("/storeFeaturehttp");
		};




// .success its returning a list of objects the array of products
// .then returns the server information. the data. the price, image,  

		$scope.deleteProduct = function (id){
			storeFeaturehttpSvc.deleteProduct(id);
			$location.path("/storeFeaturehttp");
			};
		
		$rootScope.$on("cheapproduct:added", function(){
			storeFeaturehttpSvc.getCheapProducts().sucess(function (cheapproducts){
		$scope.cheapproducts = cheapproducts.data;
		});
	});	
		$rootScope.$on("cheapproduct:updated", function(){
		 storeFeaturehttpSvc.getCheapProduct().then(function (cheapproducts){
		$scope.cheapproducts = cheapproducts.data;
		});
	});
		$rootScope.$on("cheapproduct:deleted", function(){
		 storeFeaturehttpSvc.getCheapProduct().then(function (cheapproducts){
		$scope.cheapproducts = cheapproducts.data;
		});
	});

});





