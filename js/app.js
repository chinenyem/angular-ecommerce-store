 angular.module("fatherController",
    [
    "storeFeature",
   "storeFeaturehttp",
    "storeFreatureadminhttp",
     "ngRoute"
     ])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
});
