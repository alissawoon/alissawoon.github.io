let bookNowBtn = document.getElementById("bookNow")

bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let chckInDate = document.getElementById("chckInDate")
    let chckInDateVal = chckInDate.value

    let chckOutDate = document.getElementById("chckOutDate")
    let chckOutDateVal = chckOutDate.value

    let numOfChild = document.getElementById("numOfChild")
    let numOfChildVal = numOfChild.value

    let numOfAdults = document.getElementById("numOfAdults")
    let numOfAdultsVal = numOfAdults.value

    let roomtype = document.getElementById("roomtype")
    let roomtypeVal = roomtype.value

    let numOfRoom = document.getElementById("numOfRoom")
    let numOfRoomVal = numOfRoom.value

    let email = document.getElementById("email")
    let emailVal = email.value

    let phone = document.getElementById("phone")
    let phoneVal = phone.value


    BookNow(userNameVal, chckInDateVal, chckOutDateVal, numOfChildVal, numOfAdultsVal, roomtypeVal, numOfRoomVal, emailVal, phoneVal)
})

function BookNow(userName, chckInDate, chckOutDate, numOfChild, numOfAdults, roomtype, numOfRoom, email, phone){
    let url = 'https://api.sheety.co/4a8177f0d446efd0cb69016794c074ed/bookingApp/bookings';
    let body = {
    booking: {
      name: userName,
      checkin: chckInDate,
      checkout: chckOutDate,
      noChild: numOfChild,
      noAdults: numOfAdults,
      roomtype: roomtype,
      noRoom: numOfRoom,
      email: email,
      phone: phone,
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json"
    }
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.booking);
        alert(json.booking.name + " added in the list!")
  });
}