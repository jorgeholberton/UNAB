// cargar la libreria. current la actual, se puede colocar  número específico
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('number', 'MUESTRA');
data.addColumn('number', 'Peso Normal');
data.addColumn('number', 'Bajo de Peso');
data.addColumn('number', 'Sobre Peso');
data.addColumn('number', 'Obeso');

data.addRows([
  [1,  25.8, 19.8, 27.8, 30.4],
  [2,  24.9, 18.5,   30, 31.3],
  [3,  23.4,   17, 28.7, 32.7],
  [4,  22.7, 16.8, 29.5, 33.5],
  [5,  21.9, 17.6, 27.4, 38.9],
  [6,  26.8, 13.6, 27.7, 40.2],
  [7,  22.6, 12.3, 29.6, 43.4],
  [8,  25.3, 18.2, 28.6, 34.5],
  [9,  20.9, 17.9, 29.8, 30.1],
  [10, 24.8, 15.9, 26.6, 36.2],
  [11, 23.3, 17.9, 27.9, 44.3],
  [12, 22.6, 18.4, 28.2, 33.7],
  [13, 25.8, 16.3, 29.6, 36.8],
  [14, 26.2, 18.2, 28.4, 35.7]
]);

var options = {
  chart: {
    title: 'CLASIFICACIÓN INDICE DE MASA CORPORAL',
    subtitle: 'VALOR IMC'
  },
  width: 900,
  height: 500,

  
};

var chart = new google.charts.Line(document.getElementById('linechart_material'));

chart.draw(data, google.charts.Line.convertOptions(options));
}