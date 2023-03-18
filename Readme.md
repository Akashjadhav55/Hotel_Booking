fetch(`http://localhost:3000/hotels/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({})
    })
    .then(response => response.json())
  

fetch(`http://localhost:3000/hotels/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(fetchToys)


fetch(`http://localhost:3000/hotels/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({})
  })
    .then(resp => resp.json())
    .then(renderToys)
 

 
fetch('http://localhost:3000/hotels')
  .then(resp => resp.json())
  .then(renderToys)
