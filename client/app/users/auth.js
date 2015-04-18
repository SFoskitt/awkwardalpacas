'use strict';

angular.module('lunchCorgi.signup', ['ngRoute'])

.controller('SignUpCtrl', ['$scope', 'Users', function($scope, Users) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.corgi', token);
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function() {
    Users.signup($scope.user)
      .then(function(token){
        // $window.localStorage.setItem('com.corgi', token);
        // $location.path('/');
      })
      .catch(function(error){
        console.log(error);
      });
  };

}]);