let hotels = document.getElementById("hotel-detail")


function displayStaticData(data){
    var totalHotel = data.length
 
    data.map((res) => {
        console.log(res.booked)
    })
}

    let hotelInfo = document.createElement("div")

    let span1 = document.createElement("span")
    

    let span2 = document.createElement("span")
    

    let span3 = document.createElement("span")
    

    let span4 = document.createElement("span")




fetch('https://hotel-booking-api-odw9.onrender.com/hotels')
.then(res => res.json())
.then((res) => {
    displayStaticData(res)
})
.catch((err) => console.log(err))