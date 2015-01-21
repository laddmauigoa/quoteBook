var app = angular.module('quoteBook')
//works
app.controller('mainCtrl', function($scope, dataService) {
	$scope.quotes = dataService.getdata();
// both codes work. one is a function one is not. why would i use a function????
	// $scope.getquotes = function() {
	// 	$scope.quotes = dataService.getdata();
	// }
	// $scope.getquotes();
	$scope.add = function() {
		dataService.addData($scope.text, $scope.author);
	}
	

	$scope.remove = function() {
		dataService.removeData($scope.searchTerm);

	}
	//i dont think i need the filter
	// $scope.filter = function() {

	// }
})