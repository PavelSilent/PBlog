var app = angular.module('blogApp', ['ngRoute']);
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
	});