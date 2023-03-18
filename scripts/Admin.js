let hotels = document.getElementById("hotel-detail")

let SideBar = document.getElementById("sidebar")

let dashboard = document.createElement("button")
dashboard.innerHTML = "Dashboard"
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



function datafetch() {
    fetch('https://hotel-booking-api-odw9.onrender.com/hotels')
    .then(res => res.json())
    .then((res) => {
        displayStaticData(res)
        displayData(res)
    })
    .catch((err) => console.log(err))
}


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

function Remove(id){
    fetch(`https://hotel-booking-api-odw9.onrender.com/hotels/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {datafetch()})

}

function EditDetail(id){
    fetch(`https://hotel-booking-api-odw9.onrender.com/hotels/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({})
    })
    .then(response => response.json())
}

function displayData(res){

    res.map((data) => {

        let container = document.getElementById("table")
        let table = document.createElement("table")
        table.setAttribute("class","table")
        let thead = document.createElement("thead")
        let tbody = document.createElement("tbody")
        tbody.setAttribute("class", "tbody")
        let tr1 = document.createElement("tr")
        let tr2 = document.createElement("tr")


        let th1 = document.createElement("th")
        th1.innerText = "Id"

        let th2 = document.createElement("th")
        th2.innerText = "Category"

        let th3 = document.createElement("th")
        th3.innerText = "Type Of Room"

        let th4 = document.createElement("th")
        th4.innerText = "Bed Type"

        let th5 = document.createElement("th")
        th5.innerText = "No Of Persons"

        let th6 = document.createElement("th")
        th6.innerText = "Capacity"

        let th7 = document.createElement("th")
        th7.innerText = "Cost"

        let th8 = document.createElement("th")
        th8.innerText = "Status"

        let th9 = document.createElement("th")
        th9.innerText = ""

        let th10 = document.createElement("th")
        th10.innerText = ""


        let td1 = document.createElement("td")
        td1.innerText = data.id

        let td2 = document.createElement("td")
        td2.innerText = data.category

        let td3 = document.createElement("td")
        td3.innerText = data.type_of_room

        let td4 = document.createElement("td")
        td4.innerText = data.bed_type
    
        let td5 = document.createElement("td")
        td5.innerText = data.no_of_persons
        
        let td6 = document.createElement("td")
        td6.innerText = data.capacity

        let td7 = document.createElement("td")
        td7.innerText = data.cost

        let td8 = document.createElement("td")
        td8.innerText = data.booked

        let td9 = document.createElement("td")
        td9.innerText = "Delete"
        td9.onclick = () => {
            Remove(data.id)
        }
        td9.style.backgroundColor = "red"

        let td10 = document.createElement("td")
        td10.innerText = "Edit"
        td10.onclick = () => {
            EditDetail(data.id)
        }
        td10.style.backgroundColor = "green"

        tr1.append(th1,th2,th3,th4,th5,th6,th7,th8,th9,th10)
        tr2.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10)
        thead.append(tr1)
        tbody.append(tr2)
        table.append(thead,tbody)
        container.append(table)
})

}


datafetch()


