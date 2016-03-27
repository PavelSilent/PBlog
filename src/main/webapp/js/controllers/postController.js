var blogApp = angular.module('blogApp');
blogApp.controller
(
	'postController',
	function ($rootScope, $scope, $http, $routeParams) 
	{
		console.log('postController');

		$scope.showPost = function ()
		{
			var postId = Number($routeParams.postId);
		    for (var i = 0; i < $rootScope.posts.length; i++)
		    {
				var post = $rootScope.posts[i];
				if (post.id == postId)
				{
					console.log('success');
					$scope.post = post;
					$scope.comments = post.comments;
					break;
				}
			};

		}

		if (!$rootScope.postsWasLoaded)
		{
			$http.get('../../data/posts.json').success
			(
				function(data) 
				{
					if ($rootScope.posts != undefined)
					{
						$rootScope.posts = $rootScope.posts.concat(data)
					}
					else
					{
						$rootScope.posts = data;
					}

					$rootScope.postsWasLoaded = true;
					$scope.showPost();
				}
			);
		}
		else
		{
			$scope.showPost();
		}



		$scope.isCommentContainerVisible = false;
		$scope.showCommentContainer = function ()
		{
		    $scope.isCommentContainerVisible = true;
		};

  		$scope.hideCommentContainer = function()
  		{
        	$scope.isCommentContainerVisible = false;
  		};

  		$scope.addComment = function()
  		{
			console.log('addComment!');

  			var newComment = {
  								"commentator": {"name": $scope.newCommentAuthor, "userpicSrc": "../assets/img/anon.png"},	
  								"date": getCurrentDate(),
  								"text": $scope.newCommentText
  							 };
  			if ($scope.comments == undefined)
  				$scope.comments = [];

  			$scope.comments.push(newComment);
  			$scope.isCommentContainerVisible = false;
			$scope.newCommentAuthor = "";
			$scope.newCommentText = "";
  		};

	}
);



