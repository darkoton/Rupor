// function createRadialGradientPie(context, color) {
//   const chartArea = context.chart.chartArea;
//   if (!chartArea || !context.element) {
//     return color;
//   }

//   const { x, y, outerRadius } = context.element;

//   // Проверка, чтобы значения x, y, и outerRadius были числовыми и не равнялись NaN или Infinity
//   if (isNaN(x) || isNaN(y) || isNaN(outerRadius)) {
//     console.error('Invalid values for radial gradient:', { x, y, outerRadius });
//     return;
//   }

//   const ctx = context.chart.ctx;
//   const gradient = ctx.createRadialGradient(x, y, 0, x, y, outerRadius);

//   gradient.addColorStop(0, 'rgba(255,255,255,0)');
//   gradient.addColorStop(1, color);

//   return gradient;
// }

// const colors = ['rgba(255, 255, 255, 0.4)', 'rgba(109, 184, 102, 0.4)', 'rgba(255, 232, 103, 0.4)', 'rgba(253, 127, 102, 0.3)'];
// const borderColors = ['rgba(255, 255, 255, 1)', '#809F7E', '#A69C65', '#9C6357'];

// const data = {
//   labels: ['Public', 'Public', 'Public', 'Public', 'Public'],
//   datasets: [
//     {
//       data: [5, 75, 15, 25],
//       borderWidth: 3, // Ширина обводки
//       borderColor: function (context) {
//         const borderColor = borderColors[context.dataIndex];
//         if (!borderColor) return;
//         return borderColor;
//       },
//     },
//   ],
// };

// const config = {
//   type: 'pie',
//   data: data,
//   options: {
//     // zoomOutPercentage: 100,
//     // defaultFontSize: 100,
//     plugins: {
//       legend: false,
//       tooltip: true,
//       outlabels: {
//         borderRadius: 0, // Border radius of Label
//         borderWidth: 0, // Thickness of border
//         color: '#FD7F66', // Font color,
//         backgroundColor: '#121214',
//         textSize: 100,
//         display: true,
//         lineWidth: 1, // Thickness of line between chart arc and Label
//         lineColor: 'white',
//         stretch: 70, // The length between chart arc and Label
//         text: '%p \n %l',
//         textAlign: 'center',
//         font: {
//           family: 'Space Grotesk',
//           weight: 900,
//           minSize: 30,
//         },
//       },
//     },
//     elements: {
//       arc: {
//         backgroundColor: function (context) {
//           const color = colors[context.dataIndex];
//           if (!color) return;
//           return createRadialGradientPie(context, color);
//         },
//         // borderWidth: 3, // Ширина обводки
//         // hoverOffset: 100, // Смещение сегмента при наведении, без изменения размера
//       },
//     },
//     animation: {
//       animateRotate: false, // Отключаем вращение
//       animateScale: false, // Отключаем изменение масштаба
//     },
//     responsive: true, // Убедитесь, что график масштабируется с размером экрана
//     layout: {
//       padding: {
//         left: 140, // Отступ слева
//         right: 140, // Отступ справа
//         top: 140, // Отступ сверху
//         bottom: 140, // Отступ снизу
//       },
//     },
//   },
// };

// const chartToken = new Chart(document.getElementById('chartCanvas'), config);

document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('tokenomics__charts', {
    chart: {
      width: 1320,
      height: 500,
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: null,
    tooltip: {
      valueSuffix: '%',
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: true,
            format: `
            <div style="
                display: flex;
                flex-direction: column;
                font-family: Space Grotesk;

            ">
            <span style="
            font-family: Space Grotesk;
            font-size: 45px;
            line-height: 57px;
            font-weight: 500;
            color: #F9A962">
               &nbsp {point.y}%
            </span>
            <br>
            <br>
            <span style="
            font-family: Space Grotesk;
            font-size: 27px;
            line-height: 26px;
            font-weight: 100;
            text-transform: uppercase;
            color: #fff">
             {point.name}
            </span>
            </div>`,
            // connectorColor: 'rgba(128,128,128,0.5)',
            distance: 80,
            style: {
              textOutline: 'none',
              opacity: 1,
              textAlign: 'center',
              //   color: '#F4D35E',
            },
          },
          {
            enabled: false,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7,
            },
            filter: {
              operator: '>',
              property: 'percentage',
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: [
          {
            name: 'Public',
            y: 5,
            borderColor: '#ECECED',
            color: {
              linearGradient: { x1: 0, x2: 2, y1: 1, y2: 0 },
              stops: [
                [0, 'rgba(255,255,255,0.4)'],
                [1, 'rgba(255,255,255,0)'],
              ],
            },
          },
          {
            name: 'Public',
            y: 75,
            borderColor: '#779176',
            color: {
              linearGradient: { x1: 0, x2: 2, y1: 1, y2: 0 },
              stops: [
                [0, 'rgba(109, 184, 102, 0.4)'],
                [1, 'rgba(255,255,255,0)'],
              ],
            },
          },
          {
            name: 'Public',
            sliced: true,
            y: 15,
            borderColor: '#A49D69',
            color: {
              linearGradient: { x1: 0, x2: 2, y1: 1, y2: 0 },
              stops: [
                [0, 'rgba(255, 232, 103, 0.4)'],
                [1, 'rgba(255,255,255,0)'],
              ],
            },
          },
          {
            name: 'Public',
            y: 25,
            borderColor: '#A66455',
            color: {
              linearGradient: { x1: 0, x2: 2, y1: 1, y2: 0 },
              stops: [
                [0, 'rgba(253, 127, 102, 0.4)'],
                [1, 'rgba(255,255,255,0)'],
              ],
            },
          },
        ],
      },
    ],
  });
});
