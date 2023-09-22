

mapboxgl.accessToken ='pk.eyJ1IjoiaHJmdXJlODciLCJhIjoiY2xtcTRvaHR1MWpwZjJrcnhyaWU5eDhpeiJ9.Fol6J_pEIIh02jQqSwBNuA';
    
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.104081, 42.365554],
        zoom: 14
		
    });



async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();


var markers = [];

async function addMarkers(){
	var locations = await getBusLocations();


locations.forEach(function(bus){
	var marker = getMarker(bus.id);
	if (marker){
		moveMarker(marker,bus);
	}
	else {
		addMarker(bus);
	}
});

console.log(new Date());
setTimeout(addMarkers,15000);
}

function addMarker(bus){
	var icon = getIcon(bus);
	var marker = new mapboxgl.Marker({
		element: icon,
		anchor: 'center'
	})
	.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
	.addTo(map);
	marker.id = bus.id;
	markers.push(marker);
	}

function getIcon(bus){
	var img = document.createElement('img');
	img.width = 50;
	img.height = 50;
	if(bus.attributes.direction_id === 0) {
		img.src = 'red.png';
	} else {
		img.src = 'blue.png'
	}
	 return img;
}	

function moveMarker(marker, bus) {
	
	marker.setLngLat([bus.attributes.longitude, bus.attributes.latitude]);
	
}

function getMarker(id){
	var marker = markers.find(function(item){
		return item.id === id;
	});
	return marker;
}


window.onload = addMarkers();

