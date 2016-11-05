'use strict';

/**
 * @ngdoc function
 * @name airliquideApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the airliquideApp
 */
angular.module('airliquideApp')
  .controller('AgendaCtrl', function ($scope, $state) {


    // Date configuration variables
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var isLoading = true;
    $scope.colors = ["fc-event-purple", "fc-event-green", "fc-event-cyan", "fc-event-orange", "fc-event-red"];



    // Default events
    $scope.events = [
      {id: 1, title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false, color: "fc-event-purple" },
      {id: 2, title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false, color: "fc-event-green" },
      {id: 3, title: 'Birthday Party', start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false, color: "fc-event-red" },
    ]


    // Source events
    $scope.eventSources = [$scope.events];


    // FULLCALENDAR CONFIG
    $scope.uiConfig = {
        calendar:{
            lang: 'fr',
            contentHeight: $(window).height() - 170,
            defaultView: 'agendaWeek',
            aspectRatio: 4,
            timezone: 'local',
            //hiddenDays: [0],
            scrollTime: '8:00',
            firstDay: 1,
            editable: false,
            axisFormat: 'HH:mm',
            timeFormat: {
                '': 'HH:mm',
                agenda: 'HH:mm'
            },
            header:{
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            viewRender: function (view) {
                if(!isLoading) {
                    setTimeline();
                }
            },
            viewDisplay: function(view) {
                //setTimeline();
            },
            eventRender: function (event, element, view) {
              var random = Math.floor(Math.random() * $scope.colors.length) + 0;
              element.addClass(event.color);
            }
        }
    };
});
