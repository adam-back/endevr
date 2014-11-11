angular.module('LinkedInService', ['ionic.utils', 'ionic'])

.factory('LinkedInService', function($location, $localstorage) {
  // url matches the server route that uses passport
  var url = 'http://localhost:9000/auth/linkedin';
  var token, hasToken, userId, hasUserId;

  return {
    login: function() {
      var loginWindow = window.open(url, '_blank', 'location=no');
      loginWindow.addEventListener('loadstart', function(event) {
        hasToken = event.url.indexOf('?oauth_token=');
        hasUserId = event.url.indexOf('&userId=');
        
        if (hasToken > -1 && hasUserId > -1) {
          token = event.url.match('oauth_token=(.*)&userId')[1];
          userId = event.url.match('&userId=(.*)')[1];
          $localstorage.set('linkedin-token', token);
          $localstorage.set('token-date', JSON.stringify(new Date()));
          $localstorage.set('userId', userId);
          loginWindow.close();
          location.href = location.pathname;
        }
        
      });
    }
  }
});