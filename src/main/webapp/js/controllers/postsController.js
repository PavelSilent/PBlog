var blogApp = angular.module('blogApp');
blogApp.controller
(
	'postsController',
	function ($rootScope, $scope, $http) 
	{
		console.log('postsController shortPostsWasLoaded = ' + $rootScope.shortPostsWasLoaded)


		if (!$rootScope.shortPostsWasLoaded)
		{
			$http.get('../../data/shortPosts.json').success
			(
				function(data) 
				{
	        	    $rootScope.shortPosts = data;
	        	    $rootScope.shortPostsWasLoaded = true;

	        	    console.log('set shortPostsWasLoaded = ' + $rootScope.shortPostsWasLoaded)
    			}
    		);
		}

		

		$scope.redirect2AddPost = function ()
		{
		    window.location.href = "#/addPost";
		};

  		$scope.savePost = function()
  		{
  			console.log('savePost start! ' + $scope.newPostData);
  			var id = $rootScope.shortPosts.length + 1;
  			var newPost = {
  							"id":id,
  							"title": $scope.newPostSubject,
  							"author": {"name": $scope.newPostAuthor, "userpicSrc": "../assets/img/anon.png"},	
  							"date": getCurrentDate(),
  							"fullText": $scope.newPostData,
  							"isItFavourite": "0",
  							"commentsCount": "0"
  						};

  			$rootScope.shortPosts.unshift(newPost);

  			if ($rootScope.posts == undefined)
  				$rootScope.posts = [];
  			
  			$rootScope.posts.unshift(newPost);

  			console.log('savePost finish!');

  			window.location.href = "#/"
  		};

	}
);