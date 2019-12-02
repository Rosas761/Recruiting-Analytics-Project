function buildCharts() {
  var pie = d3.select("#pie");
  var url3 = `/Sources`;

  d3.json(url3).then(function (piedata) {

    pie.html("");

    var graph_keys = piedata.Sources;
    var graph_values = piedata.Revenue;

    console.log(graph_keys)
    //console.log(graph_value)
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


// Initialize the dashboard
}

buildCharts();