angular.module("storeFeaturehttp")
.controller("storefeaturehttpCtrl", function ($rootScope, $scope, $location, $routeParams, storeFeaturehttpSvc){
	storeFeaturehttpSvc.getcheapProducts().success(function (cheapproducts){
		$scope.cheapproducts = cheapproducts;
	});
		storeFeaturehttpSvc.getcheapProduct($routeParams.id).then(function(response){
		$scope.singleProduct = review.data;
	});
		$scope.goToAdd = function(cheapproduct){
		storeFeaturehttpSvc.goToAdd(cheapproduct).then(function(){
		$location.path("/storeFeaturehttp");
		});
	};
		$scope.editProducts = function (cheapproduct){
			storeFeaturehttpSvc.updateProduct(cheapproduct).then(function (){
				$location.path("/storeFeaturehttp");

			});
		};

// .success its returning a list of objects the array of products
// .then returns the server information. the data. the price, image,  

		$scope.deleteProduct = function (cheapproduct){
			storeFeaturehttpSvc.deleteProduct(cheapproduct).then(function(){
			$location.path("/storeFeaturehttp");
			});
		};
		$rootScope.$on("cheapproduct:added", function(){
			storeFeaturehttpSvc.getCheapProduct().then(function (cheapproducts){
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