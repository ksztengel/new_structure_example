app.controller('HomeController', function($scope){

$scope.view = {};
$scope.view.message = "Welcome!"


});


app.controller('DogsController', function($scope, $http){
  $scope.view = {};
  $scope.view.message = "Woof Woof!"


  $http.get('/itunes.json').then(function(data){
    $scope.view.itunes = data.data;
    $scope.view.results = data.data.results
  });


});
