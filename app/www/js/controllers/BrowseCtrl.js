angular.module('BrowseCtrl', ['ionic.contrib.ui.tinderCards', 'LocalStorageModule', 'ionic'])

// The BrowseCtrl sets the heading on the main page.
// Currently hardcoded for 'Browse Employers'
// but should be variable for 'Browse Candidates'
// in the future.
.controller('BrowseCtrl', function($scope, $rootScope, $location) {
  $scope.userType = 'Employers';
  if($rootScope.LinkedInAuthenticated == true) {
    $location.path('/app/matches');
  }
  // if ($rootScope.LinkedInAuthenticated == true && $rootScope.GitHubAuthenticated == true) {
  //   alert('into matches!');
  //   $location.path('/app/matches');
  // }
});
