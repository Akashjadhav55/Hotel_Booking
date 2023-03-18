let hotels = document.getElementById("hotel-detail")

let SideBar = document.getElementById("sidebar")

let dashboard = document.createElement("p")
dashboard.innerText = "Dashboard"
dashboard.setAttribute("class","dashboard")

let Addhotels = document.createElement("p")
Addhotels.innerText = "Add Hotels"
Addhotels.setAttribute("class", "addhotels")

SideBar.append(dashboard,Addhotels)

function displayStaticData(data){
    var totalHotel = data.length
 
    let Unbooked = data.filter((res) => res.booked == false)
    let Booked = data.filter((res) => res.booked == true)

    console.log(totalHotel,Booked.length, Unbooked.length)

    let hotels = document.getElementById("hotel-detail")
    

    let hotelInfo = document.createElement("div")
    hotelInfo.setAttribute("class" , "hotelInfo")

    let totalDiv = document.createElement("div")
    totalDiv.setAttribute("class", "span1div")
    let bookedDiv = document.createElement("div")
    bookedDiv.setAttribute("class", "span2div")
    let unbookedDiv = document.createElement("div")
    unbookedDiv.setAttribute("class", "span3div")
    let sedule = document.createElement("div")
    sedule.setAttribute("class", "span4div")


    let span1 = document.createElement("p")
    let spanone = document.createElement("p")
    span1.innerText = totalHotel     
    spanone.innerText = "Total Rooms" 
    span1.setAttribute("class", "span1") 
    

    let span2 = document.createElement("p")
    let spantwo = document.createElement("p")
    span2.innerText = Booked.length
    spantwo.innerText = "Booked Rooms" 
    span1.setAttribute("class", "span2") 
    

    let span3 = document.createElement("p")
    let spanthree = document.createElement("p")
    span3.innerText = Unbooked.length 
    spanthree.innerText = "Unbooked Rooms"
    span1.setAttribute("class", "span3") 

    
    let span4 = document.createElement("p")
    let spanfour = document.createElement("p")
    span4.innerText = 4 
    spanfour.innerText = "Schedule Room"
    span1.setAttribute("class", "span4") 

    totalDiv.append(span1,spanone)
    bookedDiv.append(span2,spantwo)
    unbookedDiv.append(span3,spanthree)
    sedule.append(span4,spanfour)
    hotelInfo.append(totalDiv,bookedDiv,unbookedDiv,sedule)
    hotels.append(hotelInfo)

}

fetch('https://hotel-booking-api-odw9.onrender.com/hotels')
.then(res => res.json())
.then((res) => {
    displayStaticData(res)
})
.catch((err) => console.log(err))