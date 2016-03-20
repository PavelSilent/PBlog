var app = angular.module('blogApp', ['ngRoute', 'ngSanitize', 'ngWig']);
/*
app.controller(
	'appMainController',
	function ($scope) 
	{
       

	}).config(
		[
			'ngWigToolbarProvider', 
			function (ngWigToolbarProvider) 
			{
	        	ngWigToolbarProvider.setButtons(['formats', 'list1', 'list2', 'bold', 'italic', 'link']);
	        	ngWigToolbarProvider.addStandardButton('underline', 'Underline', 'underline', 'fa-underline');
			}
		]
	);*/


app.config(
	function($routeProvider)
	{
		$routeProvider
			.when('/', 			
				{
					templateUrl: 'view/home.html',
				  	controller: 'postsController'
				})		
			.when('/posts/:postId',
				{ 
					templateUrl: 'view/templates/postView.html',
					controller: 'postController'
				})
			.when('/addPost',
				{
					templateUrl: 'view/templates/addPostView.html',
					controller: 'postsController'
				})
			.when('/favourites',	{ templateUrl: 'view/favourites.html'})
			.when('/excerption',	{ templateUrl: 'view/excerption.html'})
			.when('/links',			{ templateUrl: 'view/links.html'})
			.when('/pictures',		{ templateUrl: 'view/pictures.html'})
			.when('/contacts',		{ templateUrl: 'view/contacts.html'})
			.when('/angular',		{ templateUrl: 'view/angular.html'})
			.otherwise(				{ template: '<h1>404 Not found</h1>'})
	}
);

     