'use strict';


angular.module('demoInAngularJsApp')
  .controller('DemoCtrl', function ($scope,getvoyagedata,getCurrencList) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getCurrencList = getCurrencList;
    $scope.voyagePlan  = getvoyagedata;
    $scope.voyagePlan.statisticsPeriod =   new Date($scope.voyagePlan.statisticsPeriod);
    $scope.gridOptions = {
      enableColumnResizing: true,
      enableSorting: true
    };
    $scope.gridOptions.columnDefs = [
      {name:"Currency", enableCellEdit: true},
      {name:"ExchangeRate",enableCellEdit: true}
    ];
    $scope.gridOptions.enableColumnResizing = true;
    $scope.gridOptions.enableFiltering = true;
    $scope.gridOptions.enableGridMenu = true;
    $scope.gridOptions.showGridFooter = true;
    $scope.gridOptions.showColumnFooter = true;
    $scope.gridOptions.enableVerticalScrollbar = 0;
    $scope.gridOptions.enableHorizontalScrollbar = 0;

    $scope.gridOptions.data = $scope.voyagePlan.portDetails.currency;
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.popup1 = {
      opened: false
    };
    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

  });
