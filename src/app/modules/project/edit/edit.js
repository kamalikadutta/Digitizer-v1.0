(function() {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProjectController', projectController);

  projectController.$inject = ['projects', 'projectResource', 'elements','$state', 'shortHistory', 'notificator'];
  function projectController(projects, projectResource, elements, $state, shortHistory, notificator) {
    var vm = this;
    vm.project = projects;
    vm.elements = elements;
    vm.showReturnBtn = vm.project.id && shortHistory.from.state.name;

    vm.update = function() {
      vm.project.date = (new Date()).toISOString();
      projectResource.update(vm.project, function(p) {
        shortHistory.goTo('from');
        notificator.success('Project was successfully updated')
      });
    };

    vm.return = function() {
        $state.go(shortHistory.from.state.name, shortHistory.from.params);
    };

    vm.reset = function() {
      $state.reload();
    };

    vm.save = function() {
      vm.project.date = (new Date()).toISOString();
      projectResource.save(this.project, function(savedProject) {
        shortHistory.goTo('from');
        notificator.success('Project was successfully saved')
      });
    };
  }

})();
