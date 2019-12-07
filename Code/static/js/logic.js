var SBmap = L.map("map", {
    center: [40.154781, -84.818594],
    zoom: 7
  });

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
<<<<<<< HEAD
  accessToken: "pk.eyJ1IjoiZmVyZ3VzMjE2IiwiYSI6ImNrM3FrODN4YjAyajEzY24zZDBldDZ3ODcifQ.dYJ7B8qZ0RSjHIMclRv-dQ" //Note need this to work on all computers
=======
  accessToken: "pk.eyJ1Ijoicm9zYXM3NjEiLCJhIjoiY2syeXkzOGd4MDZxdTNjcWlvbDU0bDRsayJ9.P11ckMToLK6jd34E6ZT3bw" //Note need this to work on all computers
>>>>>>> a70e7ceb8c6d029a41d2d712ec5e444b7e21d6b6
}).addTo(SBmap);

// Branch locations
var branches = [
    {
      name: "Greater Cleveland - 3 Branches",
      location: [41.376723, -81.639248],
      workers: 1501
    },
    {
      name: "Columbus Area - 3 Branches",
      location: [40.027940, -83.103491],
      workers: 1327
    },
    {
      name: "Cincinnati Area - 2 Branches",
      location: [39.329734, -84.427795],
      workers: 1272
    },
    {
      name: "Chicago - 1 Branch",
      location: [41.900421, -87.641065],
      workers: 1334
    },
    {
      name: "Louisville - 1 Branch",
      location: [38.246136, -85.763988],
      workers: 964
    },
  ];

  // Loop 
for (var i = 0; i < branches.length; i++) {

    // Conditionals for amount of workers
    var color = "";
    if (branches[i].workers < 1600) {
      color = "green";
    }
    if (branches[i].workers < 1400) {
      color = "yellow";
    }
    if (branches[i].workers < 1200) {
      color = "red";
    }
  
    // Add circles 
    L.circle(branches[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust radius
      radius: branches[i].workers * 50
    }).bindPopup("<h1>" + branches[i].name + "</h1> <hr> <h3>workers: " + branches[i].workers + "</h3>").addTo(SBmap);
  }
  