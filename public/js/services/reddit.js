angular
    .module('wit')
    .factory('RedditService', RedditService);

function RedditService($http) {
    return {
        getThoughts: function(query) {
            return $http.get(`https://www.reddit.com/r/Showerthoughts/search.json?q=${query}&restrict_sr=on&sort=relevance&t=all`).then(thoughts => {
                return thoughts.data.data.children
            })
        }
    }
}

RedditService.$inject = ['$http'];
