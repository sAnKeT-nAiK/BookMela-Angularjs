
var app=angular.module("myapp",['ui.bootstrap','ngRoute','fileModelDirective','uploadFileService']);


app.controller('myctrl',function($scope,$http,uploadFile){


$scope.file={};

$scope.submit=function(){
    $scope.uploading=true;
    uploadFile.upload($scope.file).then(function(data){
        if(data.data.success){
            $scope.uploading=false;
            $scope.alert="alert alert-success";
            $scope.message=data.data.message;
            $scope.file={};
        }else{

            $scope.uploading=false;
            $scope.alert="alert alert-danger";
            $scope.message=data.data.message;
            $scope.file={};

        }
        });
    }



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
     .when("/admin", {
        templateUrl : "admin.html",
        controller : ""
    })
     .otherwise({redirectTo:"/"})
      

     

   
});
