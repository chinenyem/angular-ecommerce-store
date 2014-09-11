angular.module("storeFreatureadminhttp")
  .factory("storeFreatureadminhttpSvc", function ($log, $rootScope, $http){

var urlBag = "http://chshackathon.herokuapp.com/collections/chinenyembagproduct";


  var getBags = function (){
    return $http.get(urlBag);
  };

  var getBag = function (id) {
    return $http.get(urlBag + "/" + id);
  };

  var addBag = function (bag) {
    $http.post(urlBag, bag).then(function (response){
    $rootScope.$broadcast("bag:added");
    $log.info("bag:added");
    });
  };

  var updateBag = function (bag){
    $http.put(urlBag + "/" + bag._id, bag).then(function (response){
      $rootScope.$broadcast("bag:updated");
      $log.info("bag:updated");
    });
  };

  var deleteBag = function (id){
    $http.delete(urlBag + "/" + id).then(function (response){
      $rootScope.$broadcast("bag:deleted");
      $log.info("bag:deleted");
    });
  };




  return {
    getBags: getBags,
    getBag: getBag,
    addBag: addBag,
    updateBag: updateBag,
    deleteBag: deleteBag
  };



  });