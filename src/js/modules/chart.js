// Подключение плагина для подписей
Chart.register(ChartDataLabels);

function createRadialGradientPie(context, color) {
  const chartArea = context.chart.chartArea;
  if (!chartArea || !context.element) {
    return;
  }

  const { x, y, outerRadius } = context.element;

  // Проверка, чтобы значения x, y, и outerRadius были числовыми и не равнялись NaN или Infinity
  if (isNaN(x) || isNaN(y) || isNaN(outerRadius)) {
    console.error('Invalid values for radial gradient:', { x, y, outerRadius });
    return;
  }

  const ctx = context.chart.ctx;
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, outerRadius);

  gradient.addColorStop(0, 'rgba(255,255,255,0)');
  gradient.addColorStop(1, color);

  return gradient;
}

const DATA_COUNT = 5;
const colors = ['rgba(255, 255, 255, 0.4)', 'rgba(109, 184, 102, 0.4)', 'rgba(255, 232, 103, 0.4)', 'rgba(253, 127, 102, 0.3)'];
const borderColors = ['rgba(255, 255, 255, 1)', '#809F7E', '#A69C65', '#9C6357'];

const data = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      data: [5, 75, 15, 25],
      borderWidth: 3, // Ширина обводки
      borderColor: function (context) {
        const borderColor = borderColors[context.dataIndex];
        if (!borderColor) return;
        return borderColor;
      },
    },
  ],
};

const config = {
  type: 'pie',
  data: data,
  options: {
    plugins: {
      legend: true,
      tooltip: false,
      datalabels: {
        // Опции для плагина datalabels
        display: true, // Отображать данные
        align: 'start', // Подписи будут выравниваться по началу сегмента
        anchor: 'end', // Привязка подписи к внешней стороне сегмента
        color: '#FA9B63', // Цвет текста
        font: {
          weight: 'bold',
        },
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex] + ': ' + value + '%'; // Отображать метку и значение
        },
        // Опции для выносных линий
        offset: 100, // Расстояние между меткой и сегментом
        lineHeight: 1.5,
      },
    },
    elements: {
      arc: {
        backgroundColor: function (context) {
          const color = colors[context.dataIndex];
          if (!color) return;
          return createRadialGradientPie(context, color);
        },
        borderWidth: 3, // Ширина обводки
        hoverOffset: 100, // Смещение сегмента при наведении, без изменения размера
      },
    },
    animation: {
      animateRotate: false, // Отключаем вращение
      animateScale: false, // Отключаем изменение масштаба
    },
    responsive: true, // Убедитесь, что график масштабируется с размером экрана
    layout: {
      padding: {
        left: 50, // Отступ слева
        right: 50, // Отступ справа
        top: 50, // Отступ сверху
        bottom: 50, // Отступ снизу
      },
    },
  },
};

new Chart(document.getElementById('chartCanvas'), config);
