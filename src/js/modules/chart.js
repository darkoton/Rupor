let dtaPoint = [
  { y: 60.9, label: 'Public' },
  { y: 4.3, label: 'Public' },
  { y: 13.1, label: 'Public' },
  { y: 21.7, label: 'Public' },
];

window.onload = function () {
  //intilizing first time
  createChart('chartContainer', dtaPoint, 'color1');
};

//creating custom ccolor theme
CanvasJS.addColorSet('color1', [
  //colorSet Array
  'rgba(253, 127, 102, 0.4)',
  'rgba(255, 255, 255, 0.4)',
  'rgba(109, 184, 102, 0.4)',
  'rgba(255, 232, 103, 0.4)',
]);

function createChart(getCnvsId, dtaPoint, colorTheme) {
  let s = '',
    c = '',
    t = '',
    t2 = '',
    z;



  let drwChart = new CanvasJS.Chart(getCnvsId, (() => {

    return {
      backgroundColor: 'transparent',
      colorSet: colorTheme,
      data: [
        {
          type: 'pie',
          startAngle: 0,
          indexLabelFontColor: '#ff6347', // измените цвет текста метки
          indexLabelFontSize: 40,
          toolTipContent: '{label}: {y} - <strong>#percent%</strong>',
          indexLabel: '{label} #percent%',
          dataPoints: [
            { y: 60.9, label: 'Public' },
            { y: 4.3, label: 'Public' },
            { y: 13.1, label: 'Public' },
            { y: 21.7, label: 'Public' },
          ],
        },
      ],
    }
  })());
  drwChart.render();
}
