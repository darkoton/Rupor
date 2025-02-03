const datas = [
  {
    name: 'Percentage',
    colorByPoint: true,
    data: [
      {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
];

const indicatorTabToken = document.querySelector('.tokenomics__indicator');
let activeTabToken = document.querySelector('.tokenomics__tab._active');

let chart;
document.addEventListener('DOMContentLoaded', function () {
  chart = Highcharts.chart('tokenomics__charts', {
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
        allowPointSelect: false,
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
    series: datas,
  });
});

setTimeout(() => {
  indicatorTabToken.style.width = activeTabToken.clientWidth + 18 + 'px';
  indicatorTabToken.style.left = activeTabToken.offsetLeft - 9 + 'px';
}, 100);

let tabsToken = () => {
  let nav = document.querySelectorAll('.tokenomics__tab'),
    result = document.querySelectorAll('.tokenomics__block'),
    tabName;

  nav.forEach(item => {
    item.addEventListener('click', selectnav);
  });

  function selectnav() {
    nav.forEach(item => {
      item.classList.remove('_active');
    });
    this.classList.add('_active');

    indicatorTabToken.style.width = this.clientWidth + 18 + 'px';
    indicatorTabToken.style.left = this.offsetLeft - 9 + 'px';

    tabName = this.getAttribute('data-tab-name');
    const chartEl = this.getAttribute('data-chart-el');

    datas[0].data = datas[0].data.map(el => {
      el.sliced = false;
      return el;
    });

    datas[0].data[chartEl].sliced = true;

    chart.update({
      series: datas,
    });

    console.log(chart);

    selectresult(tabName);
  }

  function selectresult(tabName) {
    result.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');
    });
  }
};

tabsToken();
