var dapxApp=angular.module("dapxApp");dapxApp.controller("webdevCtrl",["$scope","$http","$location","subFactory",function(t,o,p,a){var n=p.path().substr(1);t.loading=!0,t.posts=a.getPosts(n).then(function(o){t.loading=!1,t.posts=o},function(t){alert(t)})}]);