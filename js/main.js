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

    SyntaxHighlighter.all();

    $( '#profile-pic' )
        .mouseover( function() {
            $( '#profile-pic' ).fadeTo( 'slow', 0.5 );
        } )
        .mouseout( function() {
            $( '#profile-pic' ).fadeTo( 'slow', 1 );
        } );
} );
