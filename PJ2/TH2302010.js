var app = angular.module('myApp', [])

    app.controller('myController', ['$scope', function ($scope) {
        const courses = [
            {
                name: 'ASP.NET MVC',
                author: 'Nick Harrison',
                about: 'ASP.NET Model View Controller design pattern to keep the data, views, and logic clearly separated in apps.'
            },
            {
                name: 'NODE.JS',
                author: 'Emanuele DelBono',
                about: 'ASP.NET Model View Controller design pattern to keep the data, views, and logic clearly separated in apps.'
            },
            {
                name: 'REACT.JS',
                author: 'DmitriNesteruk',
                about: 'ASP.NET Model View Controller design pattern to keep the data, views, and logic clearly separated in apps.'
            },
            {
                name: 'TYPESCRIPT',
                author: 'Steve Fenton',
                about: 'ASP.NET Model View Controller design pattern to keep the data, views, and logic clearly separated in apps.'
            }
        ]
        $scope.courses = courses;
        $scope.textSearch = '';
        
    }])