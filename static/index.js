fetch('static/worldl.json')
   .then(r=>r.json())
   .then(r=>{
       for(let c of r){
           let d = document.createElement('div');
           d.innerText = c.name;
           d.classList.add('countryIndex');
           d.onclick = ()=>{
               document.getElementById('content').innerHTML = `
               <div class="tbone">
               <table class="cty-list">
               <tr><th> Name:</th><td>${c.name}</td></tr>
               <tr><th>Id: </th><td>${c.id}</td></tr>
               <tr><th>Capital: </th><td>${c.capital}</td></tr>
               <tr><th>Continent: </th><td>${c.continent}</td></tr>
               <tr><th>Area: </th><td>${c.area}</td></tr>
               <tr><th>GDP: </th><td>${c.gdp}</td></tr>
               <tr><th>Population: </th><td>${c.population}</td></tr>
               </table>
               </div>
                <div class="tbtwo">
                    <img src=${c.flag}>
                </div>
               
               `;
           }
           document.getElementById('countryList').append(d);
       }
       document.querySelector('select').onchange=()=>{
        //    console.log(document.querySelector("select").value)
           let letter = document.querySelector('select').value
           for(let n of document.querySelectorAll('#countryList div')){
            if (n.innerText.startsWith(letter)){
                n.classList.remove('hide');
            }else{
                n.classList.add('hide');
            }
        } 
       }
    })
