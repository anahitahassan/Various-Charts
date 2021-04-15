var options = {
    series: [{
    name: "Sunday",
    data: [
    [1, 0], [2, 0], [3, 3], [4, 0], [5, 1], [6, 1], [7, 2], [8, 4], [9, 0]]
  },{
    name: "Monday",
    data: [
    [1, 3], [2, 2], [3, 2], [4, 1], [5, 0], [6, 0], [7, 2], [8, 4], [9, 0]]
  },{
    name: "Tuesday",
    data: [
    [1, 2], [2, 3], [3, 2], [4, 1], [5, 2], [6, 0], [7, 3], [8, 3], [9, 2]]
  },{
    name: "Wednesday",
    data: [
    [1, 1], [2, 2], [3, 2], [4, 4], [5, 1], [6, 0], [7, 3], [8, 2], [9, 2]]
  },{
    name: "Thursday",
    data: [
    [1, 5], [2, 2], [3, 1], [4, 2], [5, 1], [6, 1], [7, 4], [8, 1], [9, 3]]
  },{
    name: "Friday",
    data: [
    [1, 4], [2, 3], [3, 0], [4, 2], [5, 1], [6, 2], [7, 4], [8, 0], [9, 3]]
  },{
    name: "Saturday",
    data: [
    [1, 2], [2, 2], [3, 0], [4, 2], [5, 3], [6, 3], [7, 2], [8, 0], [9, 2]]
  }],
    chart: {
    height: 350,
    width: 500,
    type: 'heatmap',
  },
  xaxis: {
    tickAmount: 8,
    title: {
        text: 'Week number'
    }
  },
  yaxis: {
    tickAmount: 7
  },
  colors: ["#E5722C"],
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'HeatMap Chart of Coffee'
  },
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();