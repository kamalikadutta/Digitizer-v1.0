(function() {
  'use strict';

  var app = angular.module('app');

  app.directive('joint', [function() {

    var directive = {
      link: link,
      restrict: 'E',
      scope: {
        height: '=',
        width: '=',
        gridSize: '=',
        graph: '='
      }
    };

    return directive;

    function link(scope, element, attrs) {

      var diagram = newDiagram(scope.height, scope.width, scope.gridSize, scope.graph, element[0]);

      //add event handlers to interact with the diagram
      diagram.on('cell:pointerclick', function(cellView, evt, x, y) {

        //your logic here e.g. select the element

      });

      diagram.on('blank:pointerclick', function(evt, x, y) {

        // your logic here e.g. unselect the element by clicking on a blank part of the diagram
      });

      diagram.on('link:options', function(evt, cellView, x, y) {

        // your logic here: e.g. select a link by its options tool
      });
    }

    function newDiagram(height, width, gridSize, graph, targetElement) {

      var paper = new joint.dia.Paper({
        el: targetElement,
        width: width,
        height: height,
        gridSize: gridSize,
        model: graph
      });

      return paper;
    }

  }]);

})();
