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
        $scope.events.push({
          title: data.selected.name,
          start: date.format(),
          hasKalinox: data.hasKalinox,
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
              if(event.hasKalinox) {
                event.title += '<br> <p>'+
                '<svg class="kalinox" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">'+
                '<path d="M72.862,23.914H27.138c-3.192,0-5.789-2.597-5.789-5.788v-7.337C21.349,7.597,23.945,5,27.138,5h45.725  c3.192,0,5.789,2.597,5.789,5.789v7.337C78.651,21.317,76.055,23.914,72.862,23.914z M27.138,8.83c-1.08,0-1.959,0.879-1.959,1.959  v7.337c0,1.079,0.879,1.958,1.959,1.958h45.725c1.08,0,1.959-0.879,1.959-1.958v-7.337c0-1.08-0.879-1.959-1.959-1.959H27.138z"/>'+
                '<path d="M82.083,80.389H17.917c-1.058,0-1.915-0.857-1.915-1.915V48.502c0-1.058,0.857-1.915,1.915-1.915h64.166  c1.058,0,1.915,0.857,1.915,1.915v29.972C83.998,79.531,83.141,80.389,82.083,80.389z M19.832,76.559h60.336V50.417H19.832V76.559z"/><g><g>'+
                '<path d="M53.634,74.738h-7.266c-0.793,0-1.436-0.644-1.436-1.437v-4.746h-4.747c-0.793,0-1.437-0.643-1.437-1.436v-7.266    c0-0.793,0.644-1.437,1.437-1.437h4.747v-4.744c0-0.793,0.643-1.437,1.436-1.437h7.266c0.793,0,1.436,0.644,1.436,1.437v4.744    h4.745c0.793,0,1.437,0.644,1.437,1.437v7.266c0,0.793-0.644,1.436-1.437,1.436h-4.745v4.746    C55.069,74.095,54.427,74.738,53.634,74.738z M47.805,71.866h4.393v-4.669c0-0.835,0.678-1.514,1.512-1.514h4.67V61.29h-4.67    c-0.834,0-1.512-0.678-1.512-1.512v-4.669h-4.393v4.669c0,0.834-0.679,1.512-1.513,1.512h-4.671v4.394h4.671    c0.834,0,1.513,0.679,1.513,1.514V71.866z"/></g></g>'+
                '<path d="M50,95H25.665c-5.328,0-9.663-4.335-9.663-9.662V48.421c0-5.073,3.774-8.921,7.105-12.316  c2.225-2.267,4.524-4.611,4.524-6.396v-7.709c0-1.058,0.857-1.915,1.915-1.915s1.915,0.857,1.915,1.915v7.709  c0,3.351-2.73,6.133-5.621,9.079c-2.954,3.012-6.009,6.126-6.009,9.634v36.917c0,3.216,2.616,5.832,5.833,5.832H50  c1.058,0,1.915,0.857,1.915,1.915S51.058,95,50,95z"/>'+
                '<path d="M74.335,95H50c-1.058,0-1.915-0.857-1.915-1.915S48.942,91.17,50,91.17h24.335c3.217,0,5.833-2.616,5.833-5.832V48.421  c0-3.508-3.055-6.622-6.009-9.634c-2.891-2.946-5.621-5.729-5.621-9.079v-7.709c0-1.058,0.857-1.915,1.915-1.915  s1.915,0.857,1.915,1.915v7.709c0,1.785,2.3,4.13,4.524,6.396c3.331,3.396,7.105,7.243,7.105,12.316v36.917  C83.998,90.665,79.663,95,74.335,95z"/>'+
                '</svg>'+
                'Kalinox </p>';
                element.find('.fc-title').html(event.title);
              }
              var random = Math.floor(Math.random() * $scope.colors.length) + 0;
              element.addClass(event.color);
            }
        }
    };
});
