angular.module("storeFreatureadminhttp",["ngRoute"])

.config(function ($routeProvider) {

   $routeProvider
        .when("/storefreatureadminhttp/luxbag", {
            templateUrl: "views/storefreatureadminhttpview/luxbag.html",
            controller: "storeFreatureadminhttpCtrl"
        })
        .when("/storefreatureadminhttp", {
           templateUrl: "views/storefreatureadminhttpview/list.html",
           controller: "storeFreatureadminhttpCtrl"
         })
        .when("/storefreatureadminhttp/:id", {
           templateUrl: "views/storefreatureadminhttpview/singleid.html",
           controller: "storefreatureadminhttpCtrl"
         })
        .otherwise({
           redirectTo: "/"
         });
});



