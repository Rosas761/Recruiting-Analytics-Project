console.log("Hello World")
function chart1(sample) {
  var table = d3.select("#sample-metadata");
  var url = `/metadata/${sample}`;
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

function buildCharts(sample2) {
  var pie = d3.select("#pie");
  var bubble = d3.select("#bubble")
  var url2 = `/samples/${sample2}`;

  d3.json(url2).then(function (piedata) {

    pie.html("");

    var graph_values = piedata.sample_values.slice(0, 10);
    var graph_keys = piedata.otu_ids.slice(0, 10);


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

  d3.json(url2).then(function (bubbledata) {

    bubble.html("");

    var otu_ids = bubbledata.otu_ids;
    var sample_values = bubbledata.sample_values;
    var otu_labels = bubbledata.otu_labels;

    var trace1 = {
      x: otu_ids,
      y: sample_values,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids
      },
      text: otu_labels

    };
    
    var data = [trace1];
    
    var layout = {
      title: 'Marker Size',
      showlegend: false,
      height: 600,
      width: 1400
    };
    
    Plotly.newPlot('bubble', data, layout);

  });
}



function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
