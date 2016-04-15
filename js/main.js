$( document ).ready( function() {
    map = new GMaps( {
        div: '#map',
        lat: 39.0313,
        lng: -84.4644444
    } );

    map.addMarker( {
        lat: 39.0313,
        lng: -84.4644444,
        title: 'Jesse Hockenbury'
    } );
} );
