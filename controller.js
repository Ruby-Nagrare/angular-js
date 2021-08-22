var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
   $routeProvider
   .when('/', {
       templateUrl: 'signup.html'
   })
   .when('/quiz', {
         resolve: {
            "check": function($location, $rootScope) {
               if(!$rootScope.signupSuccess) {
                  $location.path('/')
               }
            }
         },
         templateUrl: 'quiz.html'
      }
   )
   .otherwise({
       redirectTo: '/'
   });
});

app.controller('signupCtrl', function($scope, $location, $rootScope) {
    $scope.register = function () {
       var email = $scope.email;
       var password = $scope.password;
       var first_name = $scope.first_name;
       var last_name = $scope.last_name;
       var message;
       if(email) {
         message = "Please provide an email. "
       }
       if(password) {
         message = message + "Please provide password. "
       }
       if(first_name) {
         message = message + "Please provide First Name. "
       }
       if(last_name) {
         message = message + "Please provide Last Name."
       }
       if(message) {
         $rootScope.signupSuccess = true;
         $location.path('/quiz');
       }
    };
});