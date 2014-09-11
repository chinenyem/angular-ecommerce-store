angular.module ("storeFeaturehttp", ["ngRoute"])
.config(function ($routeProvider) {
	$routeProvider
       .when("/storefeaturehttp", {
           templateUrl: "views/storefeaturehttpview/list.html",
           controller: "storefeaturehttpCtrl"
       })
      .when("/storefeaturehttp/add", {
           templateUrl: "views/storefeaturehttpview/create.html",
           controller: "storefeaturehttpCtrl"
       })
      .when("/storefeaturehttp/:cheapproductId", {
           templateUrl: "views/storefeaturehttpview/singleid.html",
           controller: "storefeaturehttpCtrl"
       })
       .when("/storefeaturehttp/:cheapproductId/edit", {
           templateUrl: "views/storefeaturehttpview/edit.html",
           controller: "storefeaturehttpCtrl"
       })
});



