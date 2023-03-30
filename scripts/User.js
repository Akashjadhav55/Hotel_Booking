import { getData } from "../api.js"

let product = await getData('https://hotel-booking-api-cndl.onrender.com/hotels')
localStorage.setItem("product",JSON.stringify(product))

let FilterByCategory = document.getElementById("sortbycategory")
    FilterByCategory.addEventListener("click",() =>{
        let products = JSON.parse(localStorage.getItem("product"));
        console.log(products,FilterByCategory.value)
        let data = products.filter((el) => {
            if(FilterByCategory.value == "Family"){
                return el.category == "Family" 
            }
            else if(FilterByCategory.value == "ApartmentHotel"){
                return el.category == "ApartmentHotel"
            }
            else if(FilterByCategory.value == "ResortHotel"){
                return el.category == "ResortHotel"
            }
            else{
                return el.category == "Motel"
            }
        })
            console.log(data)
        })


// let SortByPrice = document.getElementById("sortbyprice")
// SortByPrice.addEventListener("click",() =>{
//     let products = JSON.parse(localStorage.getItem("product"));
//     console.log(products,SortByPrice.value)
//     let data = products.sort((a , b) => {
//         if(SortByName.value == "ASC"){
//             return b.name < a.name
//         }
//         console.log(data)
//     })
// })

let SortByBooked = document.getElementById("sortbybooked")

// function EditDetail(data,id){
//     console.log(id)
//     let url = `https://hotel-booking-api-odw9.onrender.com/hotels/${id}`
//     fetch(url, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(() => console.log("success"))
//     .then(() => location.reload())
//     .catch((err) => console.log(   err))
// }


// function displayData(data){
    product.map((res) => {
        
        let Inbox =  document.getElementById("box")
        let ImageDiv =  document.createElement("div")
        ImageDiv.setAttribute("class", "imagediv")

        let image = document.createElement("img")
        image.src = res.image_url
        image.setAttribute("class", "imagefech")

        let innerBox = document.createElement("div")
        innerBox.setAttribute("class", "innerBox")
        let div = document.createElement("div")
        div.setAttribute("class","div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        let p5 = document.createElement("p")

        let label1 = document.createElement("label")
        label1.innerText = "Category"+ "   :   "
        let span1 =  document.createElement("span")
        span1.innerText = res.category

        let label2 = document.createElement("label")
        label2.innerText = "Adults" +"   :   "
        let span2 =  document.createElement("span")
        span2.innerText = res.no_of_persons

        let label3 = document.createElement("label")
        label3.innerText = "Capacity" + "   :   "
        let span3 =  document.createElement("span")
        span3.innerText = res.capacity

        let label4 = document.createElement("label")
        label4.innerText = "Bed Type" + "  :  "
        let span4 =  document.createElement("span")
        span4.innerText = res.bed_type

        let label5 = document.createElement("label")
        label5.innerText = "Price"+ "  :  "
        let span5 =  document.createElement("span")
        span5.innerText = res.cost

        let button1 = document.createElement("button")
        button1.innerText = "Booked Now"
        button1.style.backgroundColor = "#fff"
        button1.setAttribute("class" , "buttonBooked")
        // console.log(res.booked)

        if(res.booked === "true"){
            // console.log("hello", res.booked)
            button1.disabled = true
            button1.style.backgroundColor = "#fff"
        }else{
            button1.onclick = () => {
                let data = {
                    category : res.category,
                    image_url : res.image_url,
                    type_of_room : res.type_of_room,
                    bed_type : res.bed_type,
                    no_of_persons : res.no_of_persons,
                    capacity : res.capacity,
                    cost : res.cost,
                    booked : "true"
                }
                disabled = true
                // console.log("hello")
                EditDetail(data, data.id)  
            }
        }

        p1.append(label1,span1)
        p2.append(label2,span2)
        p3.append(label3,span3)
        p4.append(label4,span4)
        p5.append(label5,span5)
        div.append(p1,p2,p3,p4,p5,button1)
        ImageDiv.append(image)
        innerBox.append(ImageDiv,div)
        Inbox.append(innerBox)


    })
// }











// displayData()

