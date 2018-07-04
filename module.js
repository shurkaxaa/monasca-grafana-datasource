define([
  './datasource',
  './query_ctrl'
],
function(MonascaDatasource, MonascaQueryCtrl) {
  'use strict';

  var MonascaConfigCtrl = function($scope) {
    $scope.authModeChanged = function() {
      $scope.ctrl.current.jsonData.keystoneAuth = ($scope.ctrl.current.jsonData.authMode == 'Keystone');
    };

    this.current.jsonData = this.current.jsonData || {authMode: 'Keystone', keystoneAuth: true};
    Object.assign(this.current.jsonData, {authMode: 'Keystone', keystoneAuth: true}, this.current.jsonData);
    if (!this.current.jsonData.keystoneAuth) {
        this.current.jsonData.keystoneAuth = (this.current.jsonData.authMode == 'Keystone') || false;
    } else {
        this.current.jsonData.authMode = 'Keystone';
    }
  };
  MonascaConfigCtrl.templateUrl = "partials/config.html";

  var MonascaQueryOptionsCtrl = function() {};
  MonascaQueryOptionsCtrl.templateUrl = "partials/query.options.html";

  var MonascaAnnotationsQueryCtrl = function() {};
  MonascaAnnotationsQueryCtrl.templateUrl = "partials/annotations.editor.html";

  return {
    'Datasource': MonascaDatasource,
    'QueryCtrl': MonascaQueryCtrl,
    'ConfigCtrl': MonascaConfigCtrl,
    'QueryOptionsCtrl': MonascaQueryOptionsCtrl,
    'AnnotationsQueryCtrl': MonascaAnnotationsQueryCtrl
  };
});
