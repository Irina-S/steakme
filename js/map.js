$(document).ready(function(){

  ymaps.ready(init);

  function init() {

    // const centerMap = [52.033094156732325,113.50529006745901];
    const centerMap = [52.03244565829469,113.5053973558196];

    var myMap = new ymaps.Map("map", {
        center: centerMap,
        controls: [],
        zoom: 17
      }),

      point =  new ymaps.Placemark([52.03131407205469,113.50545099999991], {
        balloonContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-pointer.svg',
        iconImageSize: [58, 67],
        iconImageOffset: [-30, -70]
      });

    myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');

    myMap.geoObjects.add(point);

  }

});
