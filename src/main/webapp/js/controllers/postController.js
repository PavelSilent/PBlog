var blogApp = angular.module('blogApp');
blogApp.controller
(
	'postController',
	function ($scope, $http, $routeParams) 
	{
		console.log('postController');

		$http.get('../../data/posts.json').success
		(
			function(data) 
			{
	            var postId = Number($routeParams.postId);
				//console.log('postId: ' + postId);
	            for (var i = 0; i < data.length; i++)
	            {
	            	var post = data[i];

					console.log('currentPostId: ' + post.id);

	            	if (post.id == postId)
	            	{
	            		console.log('success');
	            		$scope.post = post;
	            		$scope.comments = post.comments;
	            		break;
	            	}
	            };
    		}
    	);

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
  			var newComment = {
  								"commentator": {"name": $scope.newCommentAuthor, "userpicSrc": "../assets/img/anon.png"},	
  								"date": getCurrentDate(),
  								"text": $scope.newCommentText
  							 };
  			$scope.comments.push(newComment);
  			$scope.isCommentContainerVisible = false;
			$scope.newCommentAuthor = "";
			$scope.newCommentText = "";
  		}

	}
);



