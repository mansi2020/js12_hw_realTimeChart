const ctx = document.getElementById("myChart");

let chart;
const initialData = {
  labels: [],
  datasets: [
    {
      label: "Value",
      data: [],
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      fill: false,
    },
  ],
};

const chartConfig = {
  type: "line",
  data: initialData,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
    animation: false,
  },
};
chart = new Chart(ctx, chartConfig);

function addData() {
  const newData = Math.random() * 100;
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(newData);
  chart.update();
}

setInterval(addData, 1000);


//todo animation from anime.js



//animation of div container which have chart
var container = document.querySelector('div');
anime({
    targets: container,
    translateX:["-3000px",0],
});
