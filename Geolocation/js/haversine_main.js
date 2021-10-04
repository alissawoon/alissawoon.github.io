function calculateDistance(lat, long){
    let depulze = haversine(lat, lon,2.922561,101.650965)
    let pyramid = haversine(lat, lon,3.073065,101.607787)      
    let klcc = haversine(lat, lon,3.158761,101.714524)      

    return [depulze, pyramid, klcc]
}

let elLocate = document.getElementById("locate")
elLocate.addEventListener("Click", function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long")
            let elDepulze = document.getElementById("depulze")
            let elKlcc = document.getElementById("klcc")
            let elSunway = document.getElementById("sunway")

            let userLat = position.coords.latitude
            let userLong = position.coords.latitude

            let distances = calculateDistance(userLat, userLong)

            elLat.innerHTML = "Your latitude: " + userLat
            elLong.innerHTML = "Your longitude: " + userLong
            elDepulze.innerHTML = "Distance to Depulze, Cyberjaya is" + distances[0] +"km"
            elKlcc.innerHTML = "Distance to KLCC is" + distances[2] +"km"
            elSunway.innerHTML = "Distance to Sunway Pyramid is" + distances[1] +"km"
        })    
    } else {
        alert("Geolocation is not supported!")
    }
})
