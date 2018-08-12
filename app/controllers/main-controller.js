
var app=angular.module("myapp",['ui.bootstrap','ngRoute']);


app.controller('myctrl',function($scope,$http){


$scope.books=['Java','C','C++','Python','Django','noSql','Nodejs','Angularjs'];	

// $scope.submit=function(){
// 	console.log($scope.mela);
// 	$http.post('/test',$scope.mela).then(function(response){
// 		console.log("success pushing to node",response);
// 	});
// };

// 	$http.get('/test').then(function(response){
// 		console.log("get executed")
// 		$scope.dta=response.data;
// 	});

});



app.controller('signup',function($scope,$http){


       $scope.send= function(){
        console.log($scope.signup);
    $http.post('/signupdata',$scope.signup).then(function(response){
        console.log("sent form angularjs",response);
    });

};
});



app.config(function($routeProvider) {
    $routeProvider
    // .when("/", {
    //     templateUrl : "index.html",
    //     controller:"indexcontroller"
    // })
     .when("/", {
        templateUrl : "homepage.html",
        controller : ""
    })
     .when("/login", {
        templateUrl : "login.html",
        controller : ""
    })
     .when("/signup", {
        templateUrl : "signup.html",
        controller : ""
    })
     .otherwise({redirectTo:"/"})
      



   
});
