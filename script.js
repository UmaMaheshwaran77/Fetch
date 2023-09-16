

  const res = fetch("https://jsonplaceholder.typicode.com/users")

  res.then((data)=>data.json()).then((data1)=>{
      for (let i =0; i<data1.length; i++){
          console.log(data1[i]);
          const div = document.createElement("div")
      
          div.innerHTML= `<div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
                      <div class="card-body">
                <h5 class="card-title"> ${data1[i].name}</h5>
                <p class="card-text"><b><i>Email :  ${data1[i].email}</i></b></p>
                <p class="card-text"><b><i>Street :  ${data1[i].address.street}</i></b></p>
                <p class="card-text"><b><i>City :  ${data1[i].address.city}</i></b></p>

                

              </div>
            </div>
          </div>
          </div>`
          document.body.append(div);
      }
  })