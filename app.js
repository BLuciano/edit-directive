var app = angular.module('mainApp', []);

app.directive('makeEditable', function() {
  return {
    restrict: 'A',
    templateUrl: 'makeEditable.html',
    transclude: true,
    replace: true,
    scope : true,
    link : function(scope, element, attrs){
    	scope.editable = false;
    	scope.toggleEdit = function(){
    		scope.editable = !scope.editable; 
    	};
    }
  };
});