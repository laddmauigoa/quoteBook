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
		(dataService.addData($scope.text, $scope.author)) 
		$scope.text = '';
		$scope.author = '';
	}
	

	$scope.remove = function() {
		dataService.removeData($scope.searchTerm);
		$scope.searchTerm = '';
	}

	$scope.showAdd = function() {
		$scope.addedQuote = !$scope.addedQuote;
		$scope.deletedQuote = false;
		$scope.filters = false;

	}

	$scope.showDelete = function() {
		$scope.addedQuote = false;
		$scope.deletedQuote = !$scope.deletedQuote;
		$scope.filters = false;

	}

	$scope.showfilter = function() {
		$scope.addedQuote = false;
		$scope.deletedQuote = false;
		$scope.filterQuote = !$scope.filterQuote;

	}



	
})