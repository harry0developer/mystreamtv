// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  .state('tabs', {
    url: "/tabs",
    abstract: true,
    templateUrl: "templates/tabs.html",
  })
  .state('app.tabs', {
    url: "/tab",
    views: {
      'menuContent': {
        templateUrl: "templates/tabs.html"
      }
    }
  })

  .state('app.tabs.home', {
    url: "/home",
    views: {
      'tabs-home': {
        templateUrl: "templates/home.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.tabs.stream', {
    url: "/stream",
    views: {
      'tabs-stream': {
        templateUrl: "templates/stream.html",
        controller: 'channelsController'
      }
    }
  })

  .state('app.tabs.player', {
    url: "/stream/:cID",
    views: {
      'tabs-stream': {
        templateUrl: "templates/player.html",
        controller: 'channelsController'
      }
    }
  })

  .state('app.tabs.vod', {
    url: "/vod",
    views: {
      'tabs-vod': {
        templateUrl: "templates/vod.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.tabs.live', {
    url: "/live",
    views: {
      'tabs-live': {
        templateUrl: "templates/live.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })
    /*Side menu controller*/
  .state('app.tabs.news', {
    url: "/news",
    views: {
      'tabs-news': {
        templateUrl: "templates/news.html",
      }
    }
  })
  .state('app.tabs.wall', {
    url: "/wall",
    views: {
      'tabs-wall': {
        templateUrl: "templates/wall.html",
      }
    }
  })
  .state('app.tabs.events', {
    url: "/events",
    views: {
      'tabs-events': {
        templateUrl: "templates/events.html",
      }
    }
  })
  .state('app.tabs.contact', {
    url: "/contact",
    views: {
      'tabs-contact': {
        templateUrl: "templates/contact.html",
      }
    }
  })

  .state('app.tabs.location', {
    url: "/location",
    views: {
      'tabs-contact': {
        templateUrl: "templates/location.html",
      }
    }
  })
  .state('app.tabs.about', {
    url: "/about",
    views: {
      'tabs-contact': {
        templateUrl: "templates/about.html",
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tab/home');
})

.controller('channelsController',function($scope, $http, $state){
     $http.get('js/channels.json').success(function(data){
      $scope.channels = data.channels;
      $scope.whichChannel = $state.params.cID;
    })
})