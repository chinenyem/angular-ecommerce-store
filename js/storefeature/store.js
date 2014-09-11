angular.module ("storeFeature", ["ngRoute"])
	.config(function ($routeProvider){
		$routeProvider
			.when("/luxproductview", {
				templateUrl: "views/storeFeatureviews/list.html",
				controller: "storeCtrl"
			})
			.when("/luxproductview/add", {
				templateUrl: "views/storeFeatureviews/create.html",
				controller: "storeCtrl"
			})
			.when("/luxproductview/:id", {
				templateUrl: "views/storeFeatureviews/singleid.html",
				controller: "storeCtrl"
			})
			.when("/luxproductview/ :id/ edit", {
				templateUrl: "views/storeFeatureviews/edit.html",
				controller: "storeCtrl"
			})

	});