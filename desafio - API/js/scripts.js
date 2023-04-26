

google.charts.load('current', {
  'packages': ['geochart'],
});
google.charts.setOnLoadCallback(carregarDados);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ]);

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('grafico-mapa'));

  chart.draw(data, options);
}




// gráfico-pizza

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  var options = {

  };

  var chart = new google.visualization.PieChart(document.getElementById('grafico-pizza'));

  chart.draw(data, options);
}


// tabela

google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(carregarTabela);

function carregarTabela() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Sigla');
  data.addColumn('number', 'Estado');
  data.addColumn('boolean', 'Confirmados');
  data.addRows([
    ['Mike', { v: 10000, f: '$10,000' }, true],
    ['Jim', { v: 8000, f: '$8,000' }, false],
    ['Alice', { v: 12500, f: '$12,500' }, true],
    ['Bob', { v: 7000, f: '$7,000' }, true]
  ]);

  var table = new google.visualization.Table(document.getElementById('tabela'));

  table.draw(data, { showRowNumber: true, width: '70%', height: '70%' });
}