(function(){

	var app = angular.module('bookApp',['ui.router']);

	app.controller('LibroController',function(){
		this.productos=books;
	});
	app.config(function($stateProvider) {

				$stateProvider
					.state('dashboard',{
						url:'/dashboard',
						templateUrl: 'templates/dashboard.html',
						controller: 'LibroController'
					})
					.state('dashboard.datos',{
						url:'/data',
						templateUrl: 'templates/data.html',
						controller: 'LibroController'
					})
					.state('dashboard.pedidos',{
						url:'/pedidos',
						templateUrl: 'templates/pedidos.html',
						controller: 'LibroController'
					})
					.state('dashboard.favoritos',{
						url:'/favorios',
						templateUrl: 'templates/favoritos.html',
						controller: 'LibroController'
					})
					.state('libros',{
						url:'/libros',
						templateUrl: 'templates/libros.html',
						controller: 'LibroController'
					})
				});
	var books=[{
			"id":"1",
			"titulo":"Harry Potter 1",
			"autor":"anonimo",
			"editorial":"asf",
			"descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor alias quasi exercitationem! Repudiandae incidunt, culpa asperiores deserunt accusamus minima, perspiciatis dolorem aut tenetur voluptates non atque porro voluptas reprehenderit cupiditate.",
			imagenes: [
			{id:0,url:'img/portada-1.jpg'}
			]				
		},
		{
			"id":"2",
			"titulo":"Harry Potter 2",
			"autor":"anonimo",
			"editorial":"asd",
			"descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi earum laudantium quaerat et doloribus, in quis qui molestiae beatae magni, quisquam maiores nisi veniam praesentium accusamus autem repellat totam esse.",
			imagenes: [
			{id:0,url:'img/portada-2.jpg'}
			]			
		},
		{
			"id":"3",
			"titulo":"Harry Potter 3",
			"autor":"anonimo",
			"editorial":"asd",
			"descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima facilis, deleniti suscipit molestias. Quasi blanditiis ex saepe nisi officia reprehenderit iste iure aliquid consequuntur, quo magni id vitae quam eveniet.",
			imagenes: [
			{id:0,url:'img/portada-3.jpg'}
			]			
		},
		{
			"id":"4",
			"titulo":"Harry Potter 4",
			"autor":"anonimo",
			"editorial":"asdas",
			"descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non in reiciendis laudantium autem fuga, officiis ad deserunt, ipsum, magnam earum ab nulla sunt quam doloribus quas. Incidunt, magni quasi reiciendis.",
			imagenes: [
			{id:0,url:'img/portada-4.jpg'}
			]			
		}
		];


})();