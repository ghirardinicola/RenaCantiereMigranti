
import mapboxgl from 'mapbox-gl';
import angular from 'angular';
import style from './style.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2hpcmFyZGluaWNvbGEiLCJhIjoiY2o3aHF6dWpyMHh5cjMzdDVidzA1aDBwZyJ9.07gl-h43qOfeH6qfZ7VRbg';

var map = new mapboxgl.Map({
    container: 'map1',
    //style: 'mapbox://styles/mapbox/satellite-v9',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [11.3316, 44.4871],
    zoom: 13 
});
