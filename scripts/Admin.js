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
 
    let Unbooked = data.filter((res) => res.booked === "false")
    let Booked = data.filter((res) => res.booked === "true")


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
    span4.innerText = 3000 
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
    .then(() => location.reload())

}

function EditDetail(data,id){
    console.log(id)
    let url = `https://hotel-booking-api-odw9.onrender.com/hotels/${id}`
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => console.log("success"))
    .then(() => location.reload())
    .catch((err) => console.log(err))
}

function displayData(res){

    let value = JSON.parse(localStorage.getItem("value"))
    console.log(value)


    if(value){
        res.map((data) => {
            let container = document.getElementById("tableContactBody2")
            let tr2 = document.createElement("tr")
            tr2.setAttribute("class", "tdatag")
            
            let td1 = document.createElement("td")
            td1.setAttribute("class", "tdatag")
            let td2 = document.createElement("td")
            td2.setAttribute("class", "tdatag")
            let td3 = document.createElement("td")
            td3.setAttribute("class", "tdatag")
            let td4 = document.createElement("td")
            td4.setAttribute("class", "tdatag")
            let td5 = document.createElement("td")
            td5.setAttribute("class", "tdatag")
            let td6 = document.createElement("td")
            td6.setAttribute("class", "tdatag")
            let td7 = document.createElement("td")
            td7.setAttribute("class", "tdatag")
            let td8 = document.createElement("td")
            td8.setAttribute("class", "tdatag")
            let td9 = document.createElement("td")
            td9.setAttribute("class", "tdatag")
            let td10 = document.createElement("td")
            td10.setAttribute("class", "tdatag")
          
            let input1 = document.createElement("span")
            input1.innerText = data.id
            input1.setAttribute("class", "inputEdite")
    
            let input2 = document.createElement("input")
            input2.value = data.category
            input2.setAttribute("class", "inputEdite")
            
            let input3 = document.createElement("input")
            input3.value = data.type_of_room
            input3.setAttribute("class", "inputEdite")
    
            let input4 = document.createElement("input")
            input4.value = data.bed_type
            input4.setAttribute("class", "inputEdite")
        
            let input5 = document.createElement("input")
            input5.value = data.no_of_persons
            input5.setAttribute("class", "inputEdite")

            let input6 = document.createElement("input")
            input6.value = data.capacity
            input6.setAttribute("class", "inputEdite")

            let input7 = document.createElement("input")
            input7.value = data.cost
            input7.setAttribute("class", "inputEdite")

            let input8 = document.createElement("input")
            input8.value = data.booked
            input8.setAttribute("class", "inputEdite")
    

            let input9 = document.createElement("span")
            input9.value = ""

            // let stringValue1 = Boolean('true');
            // let stringValue2 = Boolean('');
            // console.log(stringValue1); // true
            // console.log(stringValue2); // false


            let input10 = document.createElement("td")
            input10.innerText = "Submit"
            input10.onclick = () => {

                let info = {
                    category : input2.value,
                    image_url : data.image_url,
                    type_of_room : input3.value,
                    bed_type : input4.value,
                    no_of_persons : input5.value,
                    capacity : input6.value,
                    cost : input7.value,
                    booked : input8.value,
                    id : data.id
                }
                console.log(info)
                value = false
                window.localStorage.setItem('value', JSON.stringify(false));
        EditDetail(info, data.id)        
                console.log(value)
            }
            input10.style.backgroundColor = "green"
            input10.style.cursor = "pointer"

            td1.append(input1)
            td2.append(input2)
            td3.append(input3)
            td4.append(input4)
            td5.append(input5)
            td6.append(input6)
            td7.append(input7)
            td8.append(input8)
            td9.append(input9)
            td10.append(input10)
            tr2.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10)
            container.append(tr2)
        })
    }else{
    res.map((data) => {
        let container = document.getElementById("tableContactBody")
        let tr2 = document.createElement("tr")
        
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
            // Remove(data.id)
        }
        td9.style.backgroundColor = "red"

        let td10 = document.createElement("td")
        td10.innerText = "Edit"
        td10.onclick = () => {
            // EditDetail(data.id)
            value = true
            window.localStorage.setItem('value', JSON.stringify(true));
            location.reload()
            console.log(value)
        }
        td10.style.backgroundColor = "green"

        
       

        tr2.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10)
        container.append(tr2)
})
}}


datafetch()


