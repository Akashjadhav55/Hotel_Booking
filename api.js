
const getData = async (url) => {
    try {
        console.log(url)
        let res = await fetch(url)
        let data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export{getData}