var dapxApp=angular.module("redditApp");dapxApp.factory("subFactory",function(r,e,t){var s={posts:!1,getPosts:function(o){var n=e.defer();return r.get("http://www.reddit.com/r/"+o+".json").success(function(r,e){s.posts=r.data.children,t(function(){n.resolve(s.posts,s.subr)},2e3)}).error(function(r,e){n.reject("Impossible de récupérer les données...")}),n.promise}};return s});