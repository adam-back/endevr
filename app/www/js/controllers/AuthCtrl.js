angular.module('AuthCtrl', ['ionic.contrib.ui.tinderCards', 'ionic.utils', 'ionic'])

.controller('AuthCtrl', function($scope, $rootScope, $state, $localstorage){
  if($localstorage.get('linkedin-token')) {
    console.log('got in linkedin');
    $rootScope.LinkedInAuthenticated = true;
  }
  if($localstorage.get('github-token')) {
    console.log('got in github');
    $rootScope.GitHubAuthenticated = true;
  }
  if (!$localstorage.get('linkedin-token') || !$localstorage.get('github-token')) {
    $rootScope.needsAuthentication = true;
  }

  $scope.logout = function(){
    console.log('Logout clicked');
    $localstorage.clearAll();
    $rootScope.LinkedInAuthenticated = false;
    $rootScope.GitHubAuthenticated = false;
  };
})