'use strict';

/**
 * @ngdoc function
 * @name airliquideApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the airliquideApp
 */
angular.module('airliquideApp')
  .controller('AgendaCtrl', function ($scope, $state, $uibModal) {


    // Date configuration variables
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var isLoading = true;
    $scope.colors = ["fc-event-purple", "fc-event-green", "fc-event-cyan", "fc-event-orange", "fc-event-red", "fc-event-black"];


    // Default events
    $scope.events = [
      {id: 1, title: 'Arnaud Lemaire', start: new Date(y, m, d - 3, 16, 0), allDay: false, color: "fc-event-purple", pathology: 'Consultation dentaire' },
      {id: 4, title: 'Julie Moreaux', start: new Date(y, m, d - 2, 8, 0), allDay: false, color: "fc-event-green", pathology: 'Blanchiment des dents' },
      {id: 5, title: 'Amélie Schwartz', start: new Date(y, m, d - 2, 11, 0), allDay: false, color: "fc-event-cyan" },
      {id: 6, title: 'Anthony Certeux', start: new Date(y, m, d - 3, 8, 0), allDay: false, color: "fc-event-red" },
      {id: 7, title: 'Lucie Schneider', start: new Date(y, m, d - 4, 14, 0), end: new Date(y, m, d - 4, 18, 0), allDay: false, color: "fc-event-orange" },
      {id: 8, title: 'Marc Ober', start: new Date(y, m, d - 5, 10, 0), allDay: false, color: "fc-event-green" },
      {id: 9, title: 'Antoine Chrétien', start: new Date(y, m, d - 1, 10, 0), end: new Date(y, m, d - 1, 14, 0), allDay: false, color: "fc-event-black", pathology: "Urgence dentaire" },
      {id: 10, title: 'Léa Altabal', start: new Date(y, m, d - 5, 18, 0), end: new Date(y, m, d - 5, 20, 0), allDay: false, color: "fc-event-cyan", pathology: "Détartrage" },
      {id: 11, title: 'Stéphane Padowski', start: new Date(y, m, d, 15, 0), end: new Date(y, m, d, 19, 0), allDay: false, color: "fc-event-red" }
    ]


    // Source events
    $scope.eventSources = [$scope.events];


    $scope.alertOnEventClick = function(date, jsEvent, view) {
      console.log('onClick', date, jsEvent, view)
    }


    $scope.dayClick = function(date, jsEvent, view) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/views/create-event-modal.html',
        controller: 'EventCtrl'
      });

      // Push new event on the calendar
      modalInstance.result.then(function(data) {
        if(!data.selected) {
          return;
        }
        var random = Math.floor(Math.random() * $scope.colors.length) + 0;
        console.log('data', data);
        $scope.events.push({
          title: data.selected.name,
          start: date.format(),
          hasKalinox: data.hasKalinox,
          pathology: data.pathology.label,
          color: $scope.colors[random]
        });
      });
    }

    // FULLCALENDAR CONFIG
    $scope.uiConfig = {
        calendar:{
            lang: 'fr',
            contentHeight: $(window).height() - 170,
            defaultView: 'agendaWeek',
            aspectRatio: 4,
            timezone: 'local',
            scrollTime: '8:00',
            minTime: '08:30:00',
            maxTime: '21:00:00',
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
            dayClick: $scope.dayClick,
            viewRender: function (view) {
              if(!isLoading) {
                  setTimeline();
              }
            },
            eventRender: function (event, element, view) {
              if(event.pathology) {
                event.title += '<br><p>' + event.pathology + '</p>';
              }
              if(event.hasKalinox) {
                event.title += '<p style="font-size:1.2rem;">+ Anti-douleur</p>';
                console.log('event', event);
              }
              element.find('.fc-title').html(event.title);

              var random = Math.floor(Math.random() * $scope.colors.length) + 0;
              element.addClass(event.color);
            }
        }
    };
});
