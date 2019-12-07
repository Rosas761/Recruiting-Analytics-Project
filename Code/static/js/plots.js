function buildCharts1() {
  var pie = d3.select("#pie");

  var url3 = `/Sources`;

  d3.json(url3).then(function (piedata) {

    pie.html("");

    var graph_keys = piedata.Sources1;
    var graph_values = piedata.Revenue1;


    console.log(piedata)

    var data = [{
      values: graph_values,
      labels: graph_keys,
      type: "pie"
    }];

    var layout = {
      height: 800,
      width: 800,
      title: "Total Revenue From Each Recruiting Source",
      "titlefont": { "size": 30},
      legend: { font: { size: 18}}

    };

    Plotly.plot("pie", data, layout);

  });
}

function buildCharts2() {
  var plot = d3.select("#plot");
  var url4 = `/bar`;

  d3.json(url4).then(function (bardata) {

    plot.html("");

    var graph_keys2 = bardata.Branch;
    var graph_values2 = bardata.Revenue2;


    console.log(bardata)

    var data2 = [{
      y: graph_values2,
      x: graph_keys2,
      type: "bar"
    }];

    var layout2 = {
      align: 'center',
      title: "Average Revenue by Branch",
      "titlefont": { "size": 36},
      xaxis: { title: "Branch", titlefont: { size: 24} },
      yaxis: { title: "Average Revenue", titlefont: { size: 28} } 
    };

    Plotly.newPlot("plot", data2, layout2);

  });

}

buildCharts2();
buildCharts1();

