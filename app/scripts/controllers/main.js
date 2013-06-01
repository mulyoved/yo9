'use strict';

angular.module('yo6App')
  .controller('MainCtrl', function ($scope, $rootScope, $http, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.brand = 'Evnt7x24';
    $scope.events_date = 'Today';
    $scope.events_time = 'All Day';
    $scope.events_location = 'Tel-Aviv, Israel';

    $scope.info = {};
    $scope.isCollapsed = false;
    $scope.userID = '';
    //to avoid refresh and bliking parts pf the page need to make it 3 state, unitalized, true, false and hide both part if unitalized
    $scope.isLoggedin = true;
})
.controller('EventsController', function($scope, $http) {
    $scope.items = [];
    $scope.busy = false;
    $scope.after = '';

    //$scope.loadEvents = function() {
        console.log('next page');
        if ($scope.busy) return;
        $scope.busy = true;

        var url = "mockup/fbevents_sample.json";
        //var url = "http://api.reddit.com/hot?after=" + $scope.after + "&jsonp=JSON_CALLBACK";
        $http.get(url)
        .success(function(data) {
            console.log('json - success');
            var items = data;
            for (var i = 0; i < items.length; i++) {
                $scope.items.push(items[i]);
            }
            //$scope.after = "t3_" + $scope.items[$scope.items.length - 1]._id;
            $scope.busy = false;
        })
        .error(function(data, status, headers, config) {
            console.log('json - error');
        });
    //};
})
