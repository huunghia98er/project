var app = angular.module('myApp', [])

    app.controller('myController', ['$scope', function ($scope) {
        const courses = [
            {
                logo: 'picture/aspnet.png',
                name: 'ASP.NET MVC',
                author: 'Nick Harrison',
                about: 'ASP.NET Model View Controller design pattern to keep the data, views, and logic clearly separated in apps.'
            },
            {
                logo: 'picture/nodejs.png',
                name: 'NODE.JS',
                author: 'Emanuele DelBono',
                about: 'Node.js is a wildly popular platform for writing web applications that has revolutionized web development in many ways.'
            },
            {
                logo: 'picture/reactjs.png',
                name: 'REACT.JS',
                author: 'DmitriNesteruk',
                about: 'React is a Javascript libraly that has revolitionized how developers design and think about views in web applications.'
            },
            {
                logo: 'picture/typescript.jpg',
                name: 'TYPESCRIPT',
                author: 'Steve Fenton',
                about: 'Microsoft Typescript extends many familiar features of .NET programming to JavaScript.'
            }
        ]
        $scope.courses = courses;
        $scope.textSearch = '';
        
    }])