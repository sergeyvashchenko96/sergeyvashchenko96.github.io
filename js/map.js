var geocoder;
var map;
var address = "Крестовский пр., 15, Санкт-Петербург, Россия, 197110";

var mapBlackStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];
var mapWhiteStyle = [
{
    "elementType": "geometry",
    "stylers": [
    {
        "color": "#f5f5f5"
    }
    ]
},
{
    "elementType": "labels.icon",
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
        "color": "#616161"
    }
    ]
},
{
    "elementType": "labels.text.stroke",
    "stylers": [
    {
        "color": "#f5f5f5"
    }
    ]
},
{
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "color": "#bdbdbd"
    }
    ]
},
{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
    {
        "color": "#eeeeee"
    }
    ]
},
{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "color": "#757575"
    }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
    {
        "color": "#e5e5e5"
    }
    ]
},
{
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "color": "#9e9e9e"
    }
    ]
},
{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
    {
        "color": "#ffffff"
    }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "color": "#757575"
    }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
    {
        "color": "#dadada"
    }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "color": "#616161"
    }
    ]
},
{
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "color": "#9e9e9e"
    }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
    {
        "color": "#e5e5e5"
    }
    ]
},
{
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
    {
        "color": "#eeeeee"
    }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
    {
        "color": "#c9c9c9"
    }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "color": "#9e9e9e"
    }
    ]
}
];

function initialize() {
    geocoder = new google.maps.Geocoder();
    var myOptions = {
    center: {
        lat: 59.948624,
        lng: 30.306279
    },
    zoom: 12,
    mapTypeControl: false,
    zoomControl: true,
    disableDoubleClickZoom: true,
    scaleControl: false,
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    draggable : true,
    overviewMapControl: false,
    mapTypeControlOptions: {
        styles: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: window.mapWhite ? mapWhiteStyle : mapBlackStyle
  };
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    var markers = {
        'Бол. Пушкарская ул.': { lat: 59.957750, lng: 30.301646 },
        'Боровая ул.': { lat: 59.913817, lng: 30.343562 },
        'Крестовский пр.': { lat: 59.969721, lng: 30.269857 },
        'Чернышевского пр.': { lat: 59.944988, lng: 30.359633 },
        'пл. Восстания': {lat: 59.9331776, lng: 30.3561278}
    };
    Object.keys(markers).forEach(function(key) {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" wdith="50" height="50"><defs><style>.cls-1{fill:#bd9f57;}.cls-2{fill:#e6e7e8;}</style></defs><title>map-pin</title><g><g><circle class="cls-1" cx="24" cy="24" r="24"/><g id="Layer_2" data-name="Layer 2"><g><path class="cls-2" d="M34.34,12.88a.48.48,0,0,0-.49-.19L28.1,13.86,24.75,9.19h0s0,0-.05-.05v0l0,0-.05,0h0s0,0-.07,0h-.29l-.07,0h0l-.05,0,0,0,0,0s0,0-.05.05h0l-3.36,4.67-5.75-1.19a.47.47,0,0,0-.49.72l4,6.29-1.49.86,0,0h0s0,0-.05.05h0s0,0-.05.07h0l0,.08v0a.17.17,0,0,0,0,.08h0v12h0s0,.05,0,.08h0a.53.53,0,0,0,.08.15h0l.05.05h0l0,0,3.93,2.22h0l3.3,1.91a.5.5,0,0,0,.48,0l3.55-2h0l3.67-2.12,0,0h0s0,0,.05-.05h0A.33.33,0,0,0,32,33h0a.17.17,0,0,0,0-.08h0v-12h0s0-.05,0-.08v0A.41.41,0,0,0,32,20.6h0l-.05-.05h0l0,0-1.49-.86,4-6.29A.44.44,0,0,0,34.34,12.88ZM30.63,21l-2.54,1.46-2.72-1.6,2.54-1.45ZM31.11,32l-2.54-1.47v-7.3l2.54-1.46Zm-3.19,2.37L25.43,33l2.68-1.62,2.52,1.46ZM18.1,32.82l2.54-1.46L23.53,33l-2.47,1.5Zm-.46-11,2.54,1.46v7.3L17.64,32Zm3.3-2.46,2.51,1.47-2.81,1.62L18.1,21Zm3.43-2L27,18.84l-2.52,1.43-2.55-1.5Zm-3.25,13.2v-7.3l3.29-1.87,3.22,1.86v7.3l-3.22,1.87Zm3.73-14V10.94l2.59,3.59-.16,3.38Zm-.94,0-2.43,1.41-.16-3.4,2.59-3.59Zm-8.12-2.68,4.59.94.18,3.69-1.32.75Zm8.58,22.6L22,35.07l2.51-1.51L27,34.95Zm5.15-17.22-1.32-.76.18-3.69,4.59-.94Z"/></g></g></g></g></svg>';
    
        new google.maps.Marker({
            position: markers[key],
            map: map,
            title: key,
            icon: {
                url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(svg)
            },
        });
    });
}
google.maps.event.addDomListener(window, 'load', initialize);