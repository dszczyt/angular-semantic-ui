'use strict';

angular.module('angularify.semantic.checkbox', [])
.directive('checkbox', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      checked: '&?',
      disabled: '&?',
      ngModel: '=ngModel'
    },
    controller: function() {
      var vm = this;

      if(angular.isFunction(vm.checked)) { vm.ngModel = !!vm.checked(); }

      vm.toggle = function() {
        if(angular.isFunction(vm.disabled) && vm.disabled()) return;
        vm.ngModel = !vm.ngModel;
      }
    },
    controllerAs: 'vm',
    bindToController: true,
    require: 'ngModel',
    template: '<div class="ui checkbox">' +
      '<input type="checkbox" ng-model="vm.ngModel" ng-disabled="vm.disabled()"/>' +
      '<label ng-click="vm.toggle()" ng-transclude></label>' +
      '</div>',
    link: function() { }
  };
});
