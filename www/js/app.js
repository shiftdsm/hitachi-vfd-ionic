// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
        
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom"); //Places tabs at the bottom for all OS
  // $ionicConfigProvider.views.maxCache(0); //Keeps app from remembering navigation history- had issue with home button becoming non-responsive. 
  $ionicConfigProvider.views.swipeBackEnabled(false);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be founjn in controllers.js
  $stateProvider


  


  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'CatalogCtrl'
  })

  // Each tab has its own nav history stack:
  .state('tab.catalog', {
    cache: false,
      url: '/catalog',
      views: {
        'tab-catalog': {
          templateUrl: 'templates/tab-catalog.html',
          controller: 'CatalogCtrl'
        }
      }
    })
  
    .state('tab.filter-results', {
      cache: false,
      url: '/filterResults',
      views: {
        'tab-catalog': {
          templateUrl: 'templates/filter-results.html',
          controller: 'FilterResultsCtrl'
        }
      }
    })

  .state('tab.guides', {
    cache: false,
    url: '/guides',
    views: {
      'tab-guides': {
        templateUrl: function() {
          if (ionic.Platform.isAndroid()) {
              return  "templates/tab-guides-android.html";
          }
          return 'templates/tab-guides.html';
        },
        controller: 'GuidesCtrl'
      }
    }
  })

    .state('tab.FAQs', {
      cache: false,
      url: '/FAQs',
      views: {
        'tab-FAQs': {
          templateUrl: 'templates/tab-FAQs.html',
          controller: 'FAQCtrl'
        }
      }
    })

    .state('tab.videos', {
      cache: false,
    url: '/videos',
    views: {
      'tab-videos': {
        templateUrl: 'templates/tab-videos.html',
      }
    }
  })

    .state('tab.vfdbasics', {
      cache: false,
    url: '/video1',
    views: {
      'tab-videos': {
        templateUrl: 'templates/vfd-basics-video.html',
      }
    }
  })

  .state('tab.vfdoverview', {
      cache: false,
    url: '/video2',
    views: {
      'tab-videos': {
        templateUrl: 'templates/vfd-overview-video.html',
      }
    }
  })
  .state('tab.vfdbraking', {
    cache: false,
    url: '/video3',
    views: {
      'tab-videos': {
        templateUrl: 'templates/vfd-braking-video.html'
      }
    }
  })
  .state('tab.vfdpid', {
    cache: false,
    url: '/video4',
    views: {
      'tab-videos': {
        templateUrl: 'templates/vfd-pid-video.html'
      }
    }
  })
  
  .state('tab.vfdrcs', {
    cache: false,
    url: '/video5',
    views: {
      'tab-videos': {
        templateUrl: 'templates/vfd-zrun-cmd-source-video.html',
      }
    }
  })
  .state('tab.vfdmd', {
    cache: false,
    url: '/video6',
    views: {
      'tab-videos': {
        templateUrl: 'templates/vfd-zmotor-data-video.html',
      }
    }
  })
  .state('tab.vfdsr', {
    cache: false,
    url: '/video7',
    views: {
      'tab-videos': {
        templateUrl: 'templates/vfd-zspeed-reference-video.html',
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/catalog');

});