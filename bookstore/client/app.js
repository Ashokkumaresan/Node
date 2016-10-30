var Books=angular.module('Books',['ngRoute']);

Books.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:'usercontroller',
		templateUrl:'views/login.html'
	})
	.when('/books',{
		controller:'bookscontroller',
		templateUrl:'views/books.html'
	})
	.when('/register',{
		controller:'usercontroller',
		templateUrl:'views/registration.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});