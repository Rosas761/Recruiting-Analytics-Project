var SBmap = L.map("map", {
    center: [40.154781, -84.818594],
    zoom: 3
  });

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: "pk.eyJ1Ijoicm9zYXM3NjEiLCJhIjoiY2syeXkzOGd4MDZxdTNjcWlvbDU0bDRsayJ9.P11ckMToLK6jd34E6ZT3bw" //Note need this to work on all computers
}).addTo(SBmap);

// Branch locations
var branches = [
    {
      name: "Independence",
      location: [41.376723, -81.639248],
      workers: 511
    },
    {
      name: "Elyria",
      location: [41.369736, -82.107768],
      workers: 377
    },
    {
      name: "Akron",
      location: [41.084457, -81.518349],
      workers: 613
    },
    {
      name: "Columbus East",
      location: [39.995740, -82.919147],
      workers: 707
    },
    {
      name: "Columbus West",
      location: [40.027940, -83.103491],
      workers: 442
    },
    {
      name: "Lancaster",
      location: [39.713700, -82.59933],
      workers: 178
    },
    {
      name: "West Chester",
      location: [39.329734, -84.427795],
      workers: 180
    },
    {
      name: "Florence",
      location: [39.006781, -84.629776],
      workers: 1092
    },
    {
      name: "Chicago",
      location: [41.900421, -87.641065],
      workers: 1334
    },
    {
      name: "Louisville",
      location: [38.246136, -85.763988],
      workers: 964
    },
  ];

  // Loop 
for (var i = 0; i < branches.length; i++) {

    // Conditionals for countries points
    var color = "";
    if (branches[i].workers > 100) {
      color = "red";
    }
    else if (branches[i].workers > 500) {
      color = "yellow";
    }
    else if (branches[i].workers > 1000) {
      color = "green";
    }
    else {
      color = "silver";
    }
  
    // Add circles 
    L.circle(branches[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust radius
      radius: branches[i].points * 1500
    }).bindPopup("<h1>" + branches[i].name + "</h1> <hr> <h3>workers: " + branches[i].workers + "</h3>").addTo(SBmap);
  }
  