/*
$(document).ready(function(){
    
});
*/

$(function () {

    $('#raty1').raty({
        //只能讀
        readOnly: true,
        score: 4,
        //評價
        hints: ['極差', '差', '普通', '好', '極好']
    });

    //WOW的動畫
    new WOW().init();

    /*在console中顯示現在的高度
    $(window).bind('scroll', function () {
        console.log($(window).scrollTop());
    }) */

    //在nav a中綁定一個點擊事件
    $('nav a').bind('click', function () {
        //$(this)等於上面的$('nav a')
        var $anchor = $(this);
        var navHeight = 50;
        var time = 1500; //單位是微秒
        var timingFunction = 'easeInOutCubic';
        var target = $anchor.attr('href');

        //停止所有動畫再執行動畫
        $('html, body').stop().animate({

            scrollTop: ($(target).offset().top - navHeight)
        }, time, timingFunction);
    })

    // var text = '程式順利運行';
    // console.log(text);

    // google api
    function initMap() {
        var myLocation = {
            lat: 26.5355801,
            lng: 127.9689825
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            scrollwheel: false,
            draggable: false,
            disableDefaultUI: true,
            center: myLocation,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#8b8b8b"
            },
                        {
                            "saturation": "0"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ff0000"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            },
                        {
                            "lightness": "85"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
            },
                        {
                            "lightness": 45
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            },
                        {
                            "lightness": "60"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            },
                        {
                            "lightness": "0"
            },
                        {
                            "weight": "3.19"
            },
                        {
                            "saturation": "0"
            },
                        {
                            "gamma": "1.04"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
            }
        ]
    },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            },
                        {
                            "lightness": "60"
            }
        ]
    },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            },
                        {
                            "lightness": "60"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            },
                        {
                            "lightness": "60"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
            },
                        {
                            "color": "#ff0000"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#b48620"
            },
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "lightness": "100"
            },
                        {
                            "saturation": "80"
            },
                        {
                            "color": "#b4934a"
            },
                        {
                            "gamma": "1.70"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#b4934a"
            }
        ]
    }
]
        });
    }

    //使用initMap
    google.maps.event.addDomListener(window, 'load', initMap);


});
