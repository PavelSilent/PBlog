var blogApp = angular.module('blogApp');
blogApp.controller('menuController', function($scope, $location) 
{
	$scope.menu =
	[
		{
			title: 'Блог', 
			href: '#/'
		},
		{
			title: 'Избранное', 
			href: '#/favourites'
		},
		{
			title: 'Полезные ссылки', 
			href: '#/links'
		},
		{
			title: 'Цитаты', 
			href: '#/excerption'
		},
		{
			title: 'Картинки', 
			href: '#/pictures'
		},		
		{
			title: 'Контакты', 
			href: '#/contacts'
		},		
		{
			title: 'AngularJS', 
			href: '#/angular'
		},		
	] 

	$scope.isActive = function(location) 
	{
    	var result = (location === ("#" +$location.path()));

  //  	console.log(location + " " + $location.path() + " " + result);

    	return result;
    }
	
});