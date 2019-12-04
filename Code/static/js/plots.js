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
      height: 600,
      width: 600
    };

    Plotly.plot("pie", data, layout);

  });
}

function buildCharts2() {
  var plot = d3.select("#plot");
  var url4 = `/bar`;

  d3.json(url4).then(function (bardata) {

    plot.html("");

    var graph_keys2 = bardata.Sources2;
    var graph_values2 = bardata.Revenue2;


    console.log(bardata)

    var data2 = [{
      y: graph_values2,
      x: graph_keys2,
      type: "bar"
    }];

    var layout2 = {
      title: "'Bar Chart",
      xaxis: { title: "Sources" },
      yaxis: { title: "Average REV" }
    };

    Plotly.newPlot("plot", data2, layout2);

  });

}

buildCharts2();
buildCharts1();

