var blogApp = angular.module('blogApp');
blogApp.controller
(
	'postsController',
	function ($scope, $http) 
	{
		$http.get('../../data/shortPosts.json').success
		(
			function(data) 
			{
	            $scope.shortPosts = data;
    		}
    	);
	}
);