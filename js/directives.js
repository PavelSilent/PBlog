blogApp.directive("pbComment", function () 
{
    return {
        link: function (scope, element, attrs) 
        {
            scope.commentData = scope.comment;
        },
        templateUrl: "../../view/templates/commentView.html"
    }
});

blogApp.directive("pbAddComment", function () 
{
    return {
        link: function (scope, element, attrs) 
        {
        },
        templateUrl: "../../view/templates/addCommentView.html"
    }
});

blogApp.directive('clickOutside', function($document)
{
    return {
        restrict: 'A',
        link: function(scope, element, attributes) 
        {
            element.bind('click', function(e) 
            {
                e.stopPropagation();
            });

            $document.bind('click', function() 
            {
                scope.$apply(attributes.clickOutside);
            })
        }
    }
});