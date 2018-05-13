// An Example Google V3 customization





GeoMashup.addAction( 'loadedMap', function ( properties, mxn ) {

	// Load some KML only into global maps - for instance pictures of squirrels
    
    var map= mxn.getMap();
      var midMap = {lat: 34.486051, lng: 22.339063};
    
    map.setCenter(midMap);
    map.setZoom(4);

    function CenterControl(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Show all';
        controlUI.appendChild(controlText);


        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function() {
          map.setCenter(midMap);
          map.setZoom(2);
        });

      }
              // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    
	var google_map = mxn.getMap();

	if (properties.map_content == 'global') {

		// Make the Google v3 call to add a Flickr KML layer
// 		var kml = new google.maps.KmlLayer( 'http://api.flickr.com/services/feeds/geo/?g=52241987644@N01&lang=en-us&format=kml', {
// 			map: google_map
// 		} );

	}

} );