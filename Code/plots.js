console.log("Hello World")
function chart1(sample) {
  var table = d3.select("#sample-metadata");
  var url = `/how_heard/${how_heard}`;
  console.log(url)
  d3.json(url).then(function (sample_metadata) {

    console.log(sample_metadata)
    var data1 = sample_metadata;

    table.html("");

    Object.entries(sample_metadata).forEach(([key, value]) => {
      table.append("h6").text(`${key}: ${value}`);
    });
  });
}





// Initialize the dashboard
init();
