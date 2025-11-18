function initMap(){
    const lat_lng = new google.maps.LatLng(24.863361222105272, 67.07477360387622)

    const myMap = new google.maps.Map(document.getElementById("map"),{
        center : lat_lng,
        zoom : 10,
        type:'roadmap'
    })


    const mark = new google.maps.Marker({
        position : lat_lng,
        map : myMap,
        title : 'Aptech SFC'
    })
}

