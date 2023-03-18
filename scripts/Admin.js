let hotels = document.getElementById("hotel-detail")

let SideBar = document.getElementById("sidebar")

let dashboard = document.createElement("p")
dashboard.innerText = "Dashboard"
dashboard.setAttribute("class","dashboard")
dashboard.onclick = () => {
    window.location.href = "../pages/Admin.html"
}

let Addhotels = document.createElement("p")
Addhotels.innerText = "Add Hotels"
Addhotels.setAttribute("class", "addhotels")
Addhotels.onclick = () => {
    window.location.href = "../pages/AddHotel.html"
}

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


    let div1 = document.createElement("div")
    let span1 = document.createElement("p")
    let spanone = document.createElement("p")
    let imgone = document.createElement("img")
    div1.setAttribute("class", "divCon")
    imgone.src = "../assist/schedule.png"
    imgone.setAttribute("class", "img")
    span1.innerText = totalHotel     
    spanone.innerText = "Total Rooms" 
    span1.setAttribute("class", "span1") 
    

    let div2 = document.createElement("div")
    let span2 = document.createElement("p")
    let spantwo = document.createElement("p")
    let imgtwo = document.createElement("img")
    div2.setAttribute("class", "divCon")
    imgtwo.src = "../assist/room.png"
    imgtwo.setAttribute("class", "img")
    span2.innerText = Booked.length
    spantwo.innerText = "Booked Rooms" 
    span1.setAttribute("class", "span2") 
    
    
    let div3 = document.createElement("div")
    let span3 = document.createElement("p")
    let spanthree = document.createElement("p")
    let imgthree = document.createElement("img")
    div3.setAttribute("class", "divCon")
    imgthree.src = "../assist/bookmark.png"
    imgthree.setAttribute("class", "img")
    span3.innerText = Unbooked.length 
    spanthree.innerText = "Unbooked Rooms"
    span1.setAttribute("class", "span3") 

    let div4 = document.createElement("div")
    let span4 = document.createElement("p")
    let spanfour = document.createElement("p")
    let imgfour = document.createElement("img")
    div4.setAttribute("class", "divCon")
    imgfour.src = "../assist/rupee.png"
    imgfour.setAttribute("class", "img")
    span4.innerText = 300 
    spanfour.innerText = "Minimume Cost"
    span1.setAttribute("class", "span4") 

    div1.append(span1,spanone)
    totalDiv.append(div1,imgone)
    div2.append(span2,spantwo)
    bookedDiv.append(div2, imgtwo)
    div3.append(span3,spanthree)
    unbookedDiv.append(div3,imgthree)
    div4.append(span4,spanfour)
    sedule.append(div4,imgfour)
    hotelInfo.append(totalDiv,bookedDiv,unbookedDiv,sedule)
    hotels.append(hotelInfo)

}

fetch('https://hotel-booking-api-odw9.onrender.com/hotels')
.then(res => res.json())
.then((res) => {
    displayStaticData(res)
})
.catch((err) => console.log(err))