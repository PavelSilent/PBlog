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

blogApp.directive("customRequiredText", function()
{
    return {
        restrict: 'AE',
        link: function (scope, elem, attrs, ctrl )
        {
           



            elem[0].bind('oninvalid', function(e) 
            {
                console.log(e);

                e.target.setCustomValidity('Fyll i det här fältet');
            });

            elem[0].bind('oninput', function(e) 
            {
                console.log(e);
                e.target.setCustomValidity('F;;;;;;;;;;;är fältet');
            });

     console.log(elem);
                console.log(elem[0]);

        }
       

    }
});