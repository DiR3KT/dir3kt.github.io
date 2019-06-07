for (champion in champion_9_11) {
  var championName = champion_9_11[champion];
  var h1 = document.createElement("h1");
  h1.innerHTML = championName;
  document.body.appendChild(h1);
  var chart = document.createElement("canvas");
  chart.id = championName;
  chart.innerHTML = " ";
  chart.style.height = '300px';
  chart.style.width = '1000px';
  document.body.appendChild(chart);

  var ctx = document.getElementById(championName);
  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontSize = 20;
  Chart.defaults.global.defaultFontFamily = 'calibri';
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7', '9.8', '9.9', '9.10', '9.11'],
      datasets: [{
        label: 'Winrate',
        borderColor: 'rgb(99, 171, 255)',
        backgroundColor: 'rgb(99, 171, 255)',
        data: [
          winrate_9_1[champion],
          winrate_9_2[champion],
          winrate_9_3[champion],
          winrate_9_4[champion],
          winrate_9_5[champion],
          winrate_9_6[champion],
          winrate_9_7[champion],
          winrate_9_8[champion],
          winrate_9_9[champion],
          winrate_9_10[champion],
          winrate_9_11[champion]
        ],
        borderWidth: 5,
        fill: false
      },{
        label: 'Playrate',
        borderColor: 'rgb(99, 255, 124)',
        backgroundColor: 'rgb(99, 255, 124)',
        data: [
          playrate_9_1[champion],
          playrate_9_2[champion],
          playrate_9_3[champion],
          playrate_9_4[champion],
          playrate_9_5[champion],
          playrate_9_6[champion],
          playrate_9_7[champion],
          playrate_9_8[champion],
          playrate_9_9[champion],
          playrate_9_10[champion],
          playrate_9_11[champion]
        ],
        borderWidth: 5,
        fill: false,
        hidden: true
      },{
        label: 'Banrate',
        borderColor: 'rgb(255, 127, 99)',
        backgroundColor: 'rgb(255, 127, 99)',
        data: [
          banrate_9_1[champion],
          banrate_9_2[champion],
          banrate_9_3[champion],
          banrate_9_4[champion],
          banrate_9_5[champion],
          banrate_9_6[champion],
          banrate_9_7[champion],
          banrate_9_8[champion],
          banrate_9_9[champion],
          banrate_9_10[champion],
          banrate_9_11[champion]
        ],
        borderWidth: 5,
        fill: false,
        hidden: true
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      aspectRatio: 5,
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0
      },
      fill: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            labelString: 'WinRate'
          }
        }],
        yAxes: [{
          ticks: {
            suggestedMin: 45,
            suggestedMax: 55,
            beginAtZero: false
          }
        }]
      }
    }
  });

}
