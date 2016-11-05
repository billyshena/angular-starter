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
    $scope.colors = ["fc-event-purple", "fc-event-green", "fc-event-cyan", "fc-event-orange", "fc-event-red", "fc-event-black"];


    // Default events
    $scope.events = [
      {id: 1, title: 'Arnaud lemaire', start: new Date(y, m, d - 3, 16, 0), allDay: false, color: "fc-event-purple" },
      {id: 4, title: 'Julie moreaux', start: new Date(y, m, d - 2, 8, 0), allDay: false, color: "fc-event-green" },
      {id: 5, title: 'Amélie schwartz', start: new Date(y, m, d - 2, 11, 0), allDay: false, color: "fc-event-cyan" },
      {id: 6, title: 'Anthony Certeux', start: new Date(y, m, d - 3, 8, 0), allDay: false, color: "fc-event-red" },
      {id: 7, title: 'Lucie schneider', start: new Date(y, m, d - 4, 14, 0), end: new Date(y, m, d - 4, 18, 0), allDay: false, color: "fc-event-orange" },
      {id: 8, title: 'Marc ober', start: new Date(y, m, d - 5, 10, 0), allDay: false, color: "fc-event-green" },
      {id: 9, title: 'Antoine chrétien', start: new Date(y, m, d - 1, 10, 0), end: new Date(y, m, d - 1, 14, 0), allDay: false, color: "fc-event-black" },
      {id: 10, title: 'Léa altabal', start: new Date(y, m, d - 5, 18, 0), end: new Date(y, m, d - 5, 20, 0), allDay: false, color: "fc-event-cyan" },
      {id: 11, title: 'Stéphane padowski', start: new Date(y, m, d, 15, 0), end: new Date(y, m, d, 19, 0), allDay: false, color: "fc-event-red" }
    ]


    // Source events
    $scope.eventSources = [$scope.events];


    $scope.alertOnEventClick = function(date, jsEvent, view) {
      console.log('onClick', date, jsEvent, view )
    }

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
            minTime: '08:00:00',
            maxTime: '22:00:00',
            firstDay: 1,
            editable: true,
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
            eventClick: $scope.alertOnEventClick,
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
              element.find('.fc-title').html(event.title);
              element.addClass(event.color);
            }
        }
    };
});
