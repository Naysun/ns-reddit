var dapxApp=angular.module("dapxApp");dapxApp.controller("cardmagicCtrl",["$scope","$http",function(a,d){d.get("http://www.reddit.com/r/cardmagic.json").success(function(d){a.posts=d.data.children,a.subrd=d.data.children[0].data.subreddit})}]);