let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/4a8177f0d446efd0cb69016794c074ed/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheety API
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gCheckin = json.bookings[i].checkin;
                let gCheckout = json.bookings[i].checkout;
                let gNoChild = json.bookings[i].noChild;
                let gNoAdults = json.bookings[i].noAdults;
                let gRoomType = json.bookings[i].roomtype;
                let gNoRoom = json.bookings[i].noRoom;
                let gEmail = json.bookings[i].email;
                let gPhone = json.bookings[i].phone;
                let gId = json.bookings[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gCheckin
                row.insertCell(3).innerHTML = gCheckout
                row.insertCell(4).innerHTML = gNoChild
                row.insertCell(5).innerHTML = gNoAdults
                row.insertCell(6).innerHTML = gRoomType
                row.insertCell(7).innerHTML = gNoRoom
                row.insertCell(8).innerHTML = gEmail
                row.insertCell(9).innerHTML = gPhone
                row.insertCell(10).innerHTML = "<button id='" + btnId + "'type='button' class='btn btn-danger'>Delete</button>"
                bookingIds.push(btnId)
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteBooking(theId)
                })  
            }
        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/4a8177f0d446efd0cb69016794c074ed/bookingApp/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })              
        .then(() => {
            alert("Record id " + id + "deleted!")
            GetBooking()
        });
}