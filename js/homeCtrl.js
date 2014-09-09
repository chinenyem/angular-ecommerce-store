angular.module("fatherController")
	.controller("homeCtrl", function ($scope, $log, $location){
		$scope.greeting= "Angular  Luxury Store Demo";
		$log.info=("store home view loaded");

		//wrapping the $scope around the location.path method
		$scope.goToProducts=function(){
			$location.path("/luxproductview");
		};


	});