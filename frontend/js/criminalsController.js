(function (){
  'use strict';
  angular.module('CriminalsApp')
    .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http'];

  function CriminalsController($http){
    var vm = this;

    vm.all = [];
    vm.addCriminal = addCriminal;
    vm.newCriminal = {};
    vm.getCriminals = getCriminals;
    vm.removeCriminal = removeCriminal;

    function getCriminals(){
      $http
        .get('http://localhost:3000/criminals')
        .then(function(res){
          console.log(res);
          vm.all = res.data.criminals;
        });

    }

    getCriminals();

    function addCriminal(){
      $http
        .post('http://localhost:3000/criminals', vm.newCriminal)
        .then(function(res){
          // getCriminals(); Makes an API call everytime
          vm.all.push(res.data.criminal);
        });

    }

})();