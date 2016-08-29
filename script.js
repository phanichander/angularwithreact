// Code goes here

 angular.module('fasterAngular', []).
  controller('mycontroller', ['$scope', function($scope){
      $scope.framework = 'ReactJs';
      $scope.data = [];
      // Fill the data map with random data
      for(var i = 0; i < 20; ++i) {
          $scope.data[i] = {};
          for(var j = 0; j < 5; ++j) {
              $scope.data[i][j] = Math.random();
          }
      }
  }]).directive('fastRepeat', function(){
      return{
          restrict: 'E',
          scope:{
              data: '='
          },
          link:function(scope, el, attrs){
              scope.$watch('data', function(newValue, oldValue){
                  React.renderComponent(
                      COMMENTBOX({data:newValue}),
                      el[0]
                  );
              })
          }
      }
  })