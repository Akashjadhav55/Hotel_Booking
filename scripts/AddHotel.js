// category
// image
// typeOfRoom
// BedType
// NoOfAdults
// capacity
// cost

let category = document.getElementById("category")
let image = document.getElementById("image")
let typeOfRoom = document.getElementById("typeOfRoom")
let BedType = document.getElementById("BedType")
let NoOfAdults = document.getElementById("NoOfAdults")
let capacity = document.getElementById("capacity")
let cost = document.getElementById("cost")
let dashboard = document.getElementById("dashboard")


let Submit = document.getElementById("submit")

dashboard.addEventListener("click", () => {
  window.location.href = "../pages/Admin.html"
})

Submit.addEventListener("click", () => {
    
    let data = {
        category : category.value,
        image_url : image.value,
        type_of_room : typeOfRoom.value,
        bed_type : BedType.value,
        no_of_persons : NoOfAdults.value,
        capacity : capacity.value,
        cost : cost.value,
        booked : false
    }
    let url = "https://hotel-booking-api-odw9.onrender.com/hotels"
    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
        window.location.href = "../pages/Admin.html"
    })
    .catch((err) => console.log(err))
})
