function showLocation() {
    let map = document.getElementById("map");
    if (navigator.geolocation) {
        map.innerHTML = "Getting your location"
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;


            map.innerHTML = `
            <iframe
             src="https://www.google.com/maps?q=${lat},${lng}&output=embed"
                width="100%"
                height="500px"
                style="border:0"
                allowfullscreen=""
                loading="lazy"
             >
             </iframe>
            
            `
        })
    }else{
        map.innerHTML = "Your browser does not support geolocation"
    }
}