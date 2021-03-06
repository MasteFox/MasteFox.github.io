/*!
 * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
;(function ($) {
  'use strict' // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          'easeInOutExpo'
        )
        return false
      }
    }
  })
  //Teams

  // chart colors
  var colors = [
    '#007bff',
    '#28a745',
    '#333333',
    '#c3e6cb',
    '#dc3545',
    '#6c757d',
  ]

  /* large line chart */
  var chLine = document.getElementById('chLine')
  var chartData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс'],
    datasets: [
      {
        data: [69, 68, 52, 53, 89, 92, 63],
        backgroundColor: 'transparent',
        borderColor: colors[0],
        borderWidth: 4,
        pointBackgroundColor: colors[0],
      },
      //   {
      //     data: [639, 465, 493, 478, 589, 632, 674],
      //     backgroundColor: colors[3],
      //     borderColor: colors[1],
      //     borderWidth: 4,
      //     pointBackgroundColor: colors[1]
      //   }
    ],
  }
  if (chLine) {
    new Chart(chLine, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
      },
    })
  }

  /* large pie/donut chart */
  var chPie = document.getElementById('chPie')
  if (chPie) {
    new Chart(chPie, {
      type: 'pie',
      data: {
        labels: ['Desktop', 'Phone', 'Tablet', 'Unknown'],
        datasets: [
          {
            backgroundColor: [colors[1], colors[0], colors[2], colors[5]],
            borderWidth: 0,
            data: [50, 40, 15, 5],
          },
        ],
      },
      plugins: [
        {
          beforeDraw: function (chart) {
            var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx
            ctx.restore()
            var fontSize = (height / 70).toFixed(2)
            ctx.font = fontSize + 'em sans-serif'
            ctx.textBaseline = 'middle'
            var text = chart.config.data.datasets[0].data[0] + '%',
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2
            ctx.fillText(text, textX, textY)
            ctx.save()
          },
        },
      ],
      options: {
        layout: { padding: 0 },
        legend: { display: false },
        cutoutPercentage: 80,
      },
    })
  }

  /* bar chart */
  var chBar = document.getElementById('chBar')
  if (chBar) {
    new Chart(chBar, {
      type: 'bar',
      data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс'],
        datasets: [
          {
            data: [58, 45, 48, 50, 69, 92, 64],
            backgroundColor: colors[0],
          },
          {
            data: [63, 65, 43, 48, 59, 62, 67],
            backgroundColor: colors[1],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              barPercentage: 0.4,
              categoryPercentage: 0.5,
            },
          ],
        },
      },
    })
  }

  /* 3 donut charts */
  var donutOptions = {
    cutoutPercentage: 85,
    legend: {
      position: 'bottom',
      padding: 5,
      labels: { pointStyle: 'circle', usePointStyle: true },
    },
  }

  // donut 1
  var chDonutData1 = {
    labels: ['Bootstrap', 'Popper', 'Other'],
    datasets: [
      {
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [74, 11, 40],
      },
    ],
  }

  var chDonut1 = document.getElementById('chDonut1')
  if (chDonut1) {
    new Chart(chDonut1, {
      type: 'pie',
      data: chDonutData1,
      options: donutOptions,
    })
  }

  // donut 2
  var chDonutData2 = {
    labels: ['Wips', 'Pops', 'Dags'],
    datasets: [
      {
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [40, 45, 30],
      },
    ],
  }
  var chDonut2 = document.getElementById('chDonut2')
  if (chDonut2) {
    new Chart(chDonut2, {
      type: 'pie',
      data: chDonutData2,
      options: donutOptions,
    })
  }

  // donut 3
  var chDonutData3 = {
    labels: ['Angular', 'React', 'Other'],
    datasets: [
      {
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [21, 45, 55, 33],
      },
    ],
  }
  var chDonut3 = document.getElementById('chDonut3')
  if (chDonut3) {
    new Chart(chDonut3, {
      type: 'pie',
      data: chDonutData3,
      options: donutOptions,
    })
  }

  /* 3 line charts */
  var lineOptions = {
    legend: { display: false },
    tooltips: { interest: false, bodyFontSize: 11, titleFontSize: 11 },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [{ display: false }],
    },
    layout: {
      padding: {
        left: 6,
        right: 6,
        top: 4,
        bottom: 6,
      },
    },
  }

  var chLine1 = document.getElementById('chLine1')
  if (chLine1) {
    new Chart(chLine1, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            data: [10, 11, 4, 11, 4],
            fill: false,
          },
        ],
      },
      options: lineOptions,
    })
  }
  var chLine2 = document.getElementById('chLine2')
  if (chLine2) {
    new Chart(chLine2, {
      type: 'line',
      data: {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [
          {
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            data: [4, 5, 7, 13, 12],
            fill: false,
          },
        ],
      },
      options: lineOptions,
    })
  }

  var chLine3 = document.getElementById('chLine3')
  if (chLine3) {
    new Chart(chLine3, {
      type: 'line',
      data: {
        labels: ['Pos', 'Neg', 'Nue', 'Other', 'Unknown'],
        datasets: [
          {
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            data: [13, 15, 10, 9, 14],
            fill: false,
          },
        ],
      },
      options: lineOptions,
    })
  }
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide')
  })

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 74,
  })

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink')
    } else {
      $('#mainNav').removeClass('navbar-shrink')
    }
    $.getJSON(
      'https://spreadsheets.google.com/feeds/list/1VU26ww92nAlRBxx7joXE74OokUcPZw-AAJarLV_EX3k/2/public/values?alt=json',
      (data) => {
        var labels = []
        var numbers2 = []
        var numbers = []
        data.feed.entry.forEach((e) => {
          labels.push(e['gsx$дата']['$t'])
          numbers2.push(Number(e['gsx$невовремя']['$t']))
          numbers.push(Number(e['gsx$вовремяпришли']['$t']))
        })
        new Chart(document.getElementById('myChart'), {
          type: 'horizontalBar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Вовремя',
                data: numbers,
                backgroundColor: 'rgba(253, 48, 76, 0.2)',
                borderColor: 'rgb(253, 48, 76)',
                pointBackgroundColor: 'rgb(253, 48, 76)',
                order: 1,
              },
              {
                label: 'Невовремя',
                data: numbers2,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                pointBackgroundColor: 'rgb(250, 62, 50)',
                order: 2,
              },
            ],
          },
          options: {
            render: {
              duration: 800,
              lazy: false,
              easing: 'easeOutBounce',
            },
            animation: {
              duration: 2000,
            },
            lineOptions,
            tooltips: {
              callbacks: {
                title: (tooltipItem, data) => data.labels[tooltipItem[0].index],
              },
            },
          },
        })
      }
    )
  }
  // Collapse now if page is not at top
  navbarCollapse()
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse)
})(jQuery) // End of use strict
