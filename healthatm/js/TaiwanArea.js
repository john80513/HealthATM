
var map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 23.6036873, lng: 120.97 },
        draggable: false,
        disableDefaultUI: true,
        styles: mapstyle
    });



    var infowindow = new google.maps.InfoWindow({
        content: '<div>123</div>',
        position: { lat: 23.6036873, lng: 120.87 }
    })

   //地圖依使用人數套用不同顏色
    map.data.setStyle(function (f) {

        var color;
        var pop = f.getProperty('population');

        if (pop >= 500) {
            color = '#a2becc'
        }
        else if (pop >= 400) {
            color = 'rgba(162, 190, 204, 0.8)'
        }
        else if (pop >= 300) {
            color = 'rgba(162, 190, 204, 0.6)'
        }
        else if (pop >= 200) {
            color = 'rgba(162, 190, 204, 0.4)'
        }
        else if (pop >= 100) {
            color = 'rgba(162, 190, 204, 0.2)'
        }
 
        return {
            'fillColor': color,
            strokeWeight: 1,
            strokeColor: '#fff',
            fillOpacity: 1
        };

    })

    map.data.loadGeoJson("healthatm/TaiwanCity.json");

    map.data.addListener('mouseover', function (event) {

      
        map.data.overrideStyle(event.feature, { fillColor: '#35304a' });

        var coordinate = { lat: 25.0336962, lng: 121.5643673 };


        coordinate.lat = event.feature.getProperty('location')[0]
        coordinate.lng = event.feature.getProperty('location')[1]

        infowindow.setContent("<div class='hoverInfo'>" + "H2U健康指數</div>" + "<div class='hoverContent'>" + event.feature.getProperty('population')+"</div>" +"<div class='hoverInfoDown'></div>"  );
        
        infowindow.setPosition(coordinate)

        infowindow.open(map)

    });

    map.data.addListener('mouseout', function (event) {
        map.data.revertStyle();
        infowindow.close()

    });


}



$(function () {

    var numSet ;

    var timeadd = Math.floor(Math.random() * 40000) + 1;

    //取得人數
    $.get('healthatm/pCountDown.txt',function(data){

        $('#people').text(data);
  
        numSet = parseInt(data);

            var clock = $('#numberFlip').FlipClock(numSet, {
                clockFace: 'Counter',
                minimumDigits: 9
    });

     //翻牌累加
     setTimeout(function () {
        setInterval(function () {
            data++;
            $('#people').text(data);
            clock.increment();
        }, timeadd);
    });

});
   

    //更新日期
    $.get('healthatm/updateDate.txt',function(data){
        $('#updt').text(data);
    });

   
 
    $(".flip-clock-wrapper ul li a").attr('href', 'javascript:;');



    enquire.register("screen and (orientation:portrait)", {

        setup: function () { },


        match: function () {
            map.zoom = 7;
        },

     
        unmatch: function () {
            map.zoom = 8;
        },


    });



})


var mapstyle = [
  {
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#ebe3cd"
        }
      ]
  },
  {
      "elementType": "labels",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#523735"
        }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
            "color": "#f5f1e6"
        }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
            "color": "#c9b2a6"
        }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
            "color": "#dcd2be"
        }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#ae9e90"
        }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
            //"color": "#dfd2ae"
            //"color": "#efeae6"
             "color": "#ffffff"
        }
      ]
  },
  {
      "featureType": "poi",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#dfd2ae"
        }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#93817c"
        }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
            "color": "#a5b076"
        }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#447530"
        }
      ]
  },
  {
      "featureType": "road",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#f5f1e6"
        }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#fdfcf8"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#f8c967"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
            "color": "#e9bc62"
        }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#e98d58"
        }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
            "color": "#db8555"
        }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#806b63"
        }
      ]
  },
  {
      "featureType": "transit",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#dfd2ae"
        }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#8f7d77"
        }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
            "color": "#ebe3cd"
        }
      ]
  },
  {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#dfd2ae"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          //"color": "#efeae6"
            "color": "#ffffff"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#92998d"
        }
      ]
  }
]

