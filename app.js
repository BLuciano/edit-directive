var app = angular.module('mainApp', []);

app.directive('makeEditable', function() {
  return {
    restrict: 'E',
    templateUrl: 'makeEditable.html',
    scope : true,
    link : function(scope, element, attrs){
    	scope.editable = false;
    	scope.toggleEdit = function(){
    		scope.editable = !scope.editable;
    	};
    }
  };
});