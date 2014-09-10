angular.module("storeFreatureadminhttp")
.controller("storeFreatureadminhttpCtrl", function ($rootScope, $scope, $location, $routeParams, $log, storefreatureadminhttpSvc){
	storefreatureadminhttpSvc.getcheapProducts().then(function (cheapproducts){
		$scope.cheapproducts = cheapproducts.data;

	});
	storefreatureadminhttpSvc.getcheapProduct($routeParams.id).then(function(response){
		$scope.singleProduct = response.data;
	});

	storefreatureadminhttpSvc.getcheapItems().then(function (items){
		$scope.items = items.data;
	});
	storefreatureadminhttpSvc.getcheapItem($routeParams.id).then(function (response){
		$scope.singleItem = response.data;
	});



	$scope.addcheapItem = function (item) {
        storefreatureadminhttpSvc.addcheapItem(item).then(function () {
          $location.path("/storeFreatureadminhttp");
        });
      };

      $scope.deletecheapItem = function (item) {
        storefreatureadminhttpSvc.deletecheapItem(item).then(function () {
          $location.path("storeFreatureadminhttp/luxbag");
        });
      };

      $rootScope.$on("item:added",  function() {
        storefreatureadminhttpSvc.getcheapItems().then(function (items) {
          $scope.items = items.data;
        });
      });

      $rootScope.$on("item:deleted",  function() {
        storefreatureadminhttpSvc.getcheapItems().then(function (items) {
          $scope.items = items.data;
        });
      });

});
