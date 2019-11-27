function buildCharts() {
  var pie = d3.select("#pie");
  var url2 = `/how_heard`;

  d3.json(url2).then(function (piedata) {

    pie.html("");

    var graph_values = piedata.how_heard;
    var graph_keys = piedata.Revanue;


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
