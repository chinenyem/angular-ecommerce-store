angular.module("storeFreatureadminhttp")
	.controller("storeFreatureadminhttpCtrl", function( $scope, $log, $location, $rootScope, $routeParams, storeFreatureadminhttpSvc, storeFeaturehttpSvc){

	storeFeaturehttpSvc.getcheapProducts().then(function (cheapproducts) {
  	 $scope.cheapproducts = cheapproducts.data;
  	 $log.info(cheapproducts);
  });

  storeFeaturehttpSvc.getcheapProduct($routeParams.id).then(function (response) {
  	$scope.singleProduct = response.data;
  	$log.info(response);
  });

	storeFreatureadminhttpSvc.getBags().then(function (bags){
		$scope.bags = bags.data;
		$log.info(bags);
	})

	storeFreatureadminhttpSvc.getBag($routeParams.id).then(function (response){
		$scope.singleBag = response.data;
		$log.info(response);
	});


	$scope.addBag = function (bag){
		var orderBag = {
			name: bag.name,
			price: bag.price,
			description: bag.description,
			image: bag.image,
			link: bag.link

		};
		storeFreatureadminhttpSvc.addBag(orderBag).then(function() {
			$location.path ("/storefreatureadminhttp");
		});

	};

	$scope.addbagReview = function (bagreview){

		storeFeaturehttpSvc.getcheapProduct($routeParam.id).success(function(cheapproduct){

		
		$scope.singleBag =cheapproduct;
		$log.info($scope.singleBag);
		$scope.singleBag.bagreviews.push({

			bagreviewCustomer:bagreview.Customer,
			bagreviewDescription:bagreview.description,
			bagreviewDate:new Date()

		});


		storeFeaturehttpSvc.editInventoryBag(cheapproduct);

		});
			$scope.bagreview = {};

	};

	$scope.editBag = function (bag){
		storeFreatureadminhttpSvc.updateBag(bag).then(function(){
		});
	};

	$scope.deleteBag = function (id){
		$log.info(id)
		storeFreatureadminhttpSvc.deleteBag(id).then(function (){
			$location.path("/storefreatureadminhttp/luxbag");
		});
	};

	$rootScope.$on("bag:added", function (){
		storeFreatureadminhttpSvc.getBags().then(function (bags){
			$scope.bags = bags.data;
		});
	});

	$rootScope.$on("bag:deleted", function(){
		storeFreatureadminhttpSvc.getBags().then(function (bags){
			$scope.bags = bags.data;
			});

		});


	});





  



