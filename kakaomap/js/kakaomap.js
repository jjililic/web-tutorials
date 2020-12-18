var mapContainer = null;
var mapOptions = null;
var map = null;

function mapInitialise(elementId, lat, lng, level) {
    mapContainer = document.getElementById(elementId);

    mapOptions = {
        center: new kakao.maps.LatLng(lat, lng),
        level: level
    }

    if
}

function zoomIn() {
    map.setLevel(map.getLevel()-1);
}

function zoomOut() {
    map.setLevel(map.getLevel()+1)
}

function setMapType(mapType) {
    var roadmapControl = document.getElementById('btnRoadmap');
    var 
}