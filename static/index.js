fetch('static/worldl.json')
   .then(r=>r.json())
   .then(r=>{
        let continent= []
// --------------------- for alphabet ---------------------

       for(let c of r){
           let d = document.createElement('div');
           d.innerText = c.name;
           d.classList.add('countryIndex');
           d.onclick = ()=>{
               document.getElementById('content').innerHTML = `
               <div class="tbone">
               <table class="cty-list">
               <tr><td colspan=2 class="flagImage"><img src=${c.flag} alt="Flag image"></td></tr>
               <tr><th> Name:</th><td>${c.name}</td></tr>
               <tr><th>Id: </th><td>${c.id}</td></tr>
               <tr><th>Capital: </th><td>${c.capital}</td></tr>
               <tr><th>Continent: </th><td>${c.continent}</td></tr>
               <tr><th>Area: </th><td>${c.area}</td></tr>
               <tr><th>GDP: </th><td>${c.gdp}</td></tr>
               <tr><th>Population: </th><td>${c.population}</td></tr>
               </table>
               </div>
               `;
           }
           document.getElementById('countryList').append(d);

        }

        document.querySelector('select').onchange=()=>{
        console.log(document.querySelector("select").value)
        let letter = document.querySelector('select').value
        for(let n of document.querySelectorAll('#countryList div')){
        if (n.innerText.startsWith(letter)){
            n.classList.remove('hide');
        }else if(letter === '#'){
            n.classList.remove('hide')
        }
        else{
            n.classList.add('hide');
        }
    } 
   }
//    for alphabet order

   for (alpha='A'.charCodeAt();alpha<= 'Z'.charCodeAt();alpha++){
    let a = String.fromCharCode(alpha)
    let o = document.createElement('option')
    o.innerText = a
    o.value = a
    let s = document.getElementById('country')
    // console.log(s)
    s.append(o)
}
// --------------------- for continent ---------------------------

        for (let w of r){
            let i = w.continent
            // console.log(continent)
            continent.push(i)
        } 
    //    }
        const uniqueValuesSet = new Set(continent);
        console.log(uniqueValuesSet)
        for(let uniCon of uniqueValuesSet){
            let opt = document.createElement('option')
            opt.innerText = uniCon
            opt.value = uniCon
            let co = document.getElementById('continent')
            co.append(opt)
       }

    
        document.getElementById('continent').onchange=()=>{
            console.log(document.getElementById('continent').value);
            let conTin = document.getElementById('continent').value;
            document.getElementById('countryList').innerHTML= ' ';
             
            for(let c of r){
                if(conTin === c.continent){    
                let d = document.createElement('div');

                d.innerText = c.name;
                d.classList.add('countryIndex');
                d.onclick = ()=>{
                    document.getElementById('content').innerHTML = `
                    <div class="tbone">
                    <table class="cty-list">
                    <tr><td colspan=2 class="flagImage"><img src=${c.flag} alt="Flag image"></td></tr>
                    <tr><th> Name:</th><td>${c.name}</td></tr>
                    <tr><th>Id: </th><td>${c.id}</td></tr>
                    <tr><th>Capital: </th><td>${c.capital}</td></tr>
                    <tr><th>Continent: </th><td>${c.continent}</td></tr>
                    <tr><th>Area: </th><td>${c.area}</td></tr>
                    <tr><th>GDP: </th><td>${c.gdp}</td></tr>
                    <tr><th>Population: </th><td>${c.population}</td></tr>
                    </table>
                    </div>
                    `;
                }
            
                document.getElementById('countryList').append(d);
            }
    }
}

// // --------------------- for alphabet ---------------------

//        document.querySelector('select').onchange=()=>{
//             console.log(document.querySelector("select").value)
//            let letter = document.querySelector('select').value
//            for(let n of document.querySelectorAll('#countryList div')){
//             if (n.innerText.startsWith(letter)){
//                 n.classList.remove('hide');
//             }else if(letter === '#'){
//                 n.classList.remove('hide')
//             }
//             else{
//                 n.classList.add('hide');
//             }
//         } 
//        }
//     //    for alphabet order

//        for (alpha='A'.charCodeAt();alpha<= 'Z'.charCodeAt();alpha++){
//         let a = String.fromCharCode(alpha)
//         let o = document.createElement('option')
//         o.innerText = a
//         o.value = a
//         let s = document.getElementById('country')
//         // console.log(s)
//         s.append(o)
//     }
   })
   
