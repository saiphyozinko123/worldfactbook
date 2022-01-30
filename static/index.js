function getElementIndex(sortedWithPOP,countryName){
    for(let i =0;i<sortedWithPOP.length;i++){
        if(sortedWithPOP[i].name === countryName){
            return i+1;
        }
    }
}



fetch('static/worldl.json')
   .then(r=>r.json())
   .then(r=>{
        let continent= []
// --------------------- for alphabet ---------------------
        let sortedWithPOP = r.sort((a,b) => b.population - a.population)


       
       for(let c of r){
           
            let d = document.createElement('div');
            d.innerText = c.name;
            d.classList.add('countryIndex');
            d.onclick = ()=>{
            let rank = getElementIndex(sortedWithPOP,c.name)
            
                
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
               <div class='popRank'>
                <div class="card border-dark mb-3" style="max-width: 10rem;">
                <div class="card-header">Population</div>
                <div class="card-body text-dark">
                <h5 class="card-title">Rank ${rank}</h5>
                </div>
                </div>

               <div>
               `;
           }
           document.getElementById('countryList').append(d);
        //    let doc = document.createElement('div');
        //    doc.setAttribute('id', 'rank');
        //    doc.innerText = `Ranking ${rank}`
        //    document.getElementById('content').append(doc);

{/* <span class="badge bg-secondary"><h2 class="rank">Rank ${rank}</h2><br><h3>Population</h3> </span> */}

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
                    let rank = getElementIndex(sortedWithPOP,c.name)
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
                    <div class='popRank'>
                    <div class="card border-dark mb-3" style="max-width: 10rem;">
                    <div class="card-header">Population</div>
                    <div class="card-body text-dark">
                    <h5 class="card-title">Rank ${rank}</h5>
                    </div>
                    </div>

                    <div>
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

// --------------------------------------------Quiz Game selection --------------------------------------------

    let bOne = document.getElementById('bone');
    bOne.onclick = () => {
        // let btnData = document.getElementById('quizgame').value;
        // console.log(btnData)
        // if (btnData === 'population'){

        document.getElementById('content').innerHTML = ' ';
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'questions');
        newDiv.innerText = "Which country has biggest population?"
        let questPlace = document.getElementById('question');
        questPlace.append(newDiv);
        document.getElementById('content').append(newDiv);

        let popList = r.filter(c => c.population >= 100000000);
        for (let popRandom of popList){
            popRandom.rand = Math.random();
        }
        popList.sort((a,b) => a.rand - b.rand);
        let distractors = [];
        for(let i = 0;i<5;i++){
            distractors.push(popList[i]);
        }
        // console.log(distractors)
        let largePopulation = 0;  //-------------------------------> to ask the teacher
        for (let p of distractors){
            if (p.population>largePopulation){
                largePopulation = p.population;
            }
        }
        // console.log(largePopulation);
        for (let loopDist of distractors){
            let popDiv = document.createElement('div');
            popDiv.setAttribute('id', 'answer');
            popDiv.innerText = loopDist.name;
            popDiv.onclick = () => {
                if(loopDist.population === largePopulation){
                    alert("You got the right thing !! 😄"); 
                }else{
                    alert("Sorry, You're wrong!! 😇 ")
                }
            }
            document.getElementById('content').append(popDiv) 
        };
    }
    let bTwo = document.getElementById('btwo');
    bTwo.onclick = () => {

        // else if (btnData === 'gdp'){
            document.getElementById('content').innerHTML = ' ';
            let newDiv = document.createElement('div');
            newDiv.setAttribute('id', 'questions');
            newDiv.innerText = "Which country has biggest GDP growth rate?"
            let questPlace = document.getElementById('question');
            questPlace.append(newDiv);
            document.getElementById('content').append(newDiv);

            let gdpList = r.filter(c => c.gdp >= 10000000000);
            for (let gdpRandom of gdpList){
                gdpRandom.rand = Math.random();
            }
            gdpList.sort((a,b) => a.rand - b.rand);
            let distractors = [];
            for(let i = 0;i<5;i++){
                distractors.push(gdpList[i]);
            }
        // console.log(distractors)
            let largeGdp = 0;  //-------------------------------> to ask the teacher
            for (let p of distractors){
                if (p.gdp>largeGdp){
                    largeGdp = p.gdp;
                }
            }
        // console.log(largePopulation);
            for (let loopDist of distractors){
                let gdpDiv = document.createElement('div');
                gdpDiv.setAttribute('id', 'answer');
                gdpDiv.innerText = loopDist.name;
                gdpDiv.onclick = () => {
                    if(loopDist.gdp === largeGdp){
                        alert("You got the right thing !! 😄"); 
                    }else{
                        alert("Sorry, You're wrong!! 😇 ")
                    }
                }
            document.getElementById('content').append(gdpDiv) 
        };
    }
        // let button = document.createElement('div');
        // button.setAttribute('id', 'nextButton');
        // button.innerHTML=`<button type="button" class="btn" id =bthree>Next</button>`
        let bThree = document.getElementById('bthree');
        bThree.onclick = () => {
    // else if (btnData === 'area'){
            document.getElementById('content').innerHTML = ' ';
            let newDiv = document.createElement('div');
            newDiv.setAttribute('id', 'questions');
            newDiv.innerText = "Which country has biggest Area?"
            let questPlace = document.getElementById('question');
            questPlace.append(newDiv);
            
            // document.getElementById('content').append(button)
            document.getElementById('content').append(newDiv);

            let areaList = r.filter(c => c.area >= 2000000);
            for (let areaRandom of areaList){
                areaRandom.rand = Math.random();
            }
            areaList.sort((a,b) => a.rand - b.rand);
            let distractors = [];
            for(let i = 0;i<5;i++){
                distractors.push(areaList[i]);
            }
    // console.log(distractors)
            let largeArea = 0;  //-------------------------------> to ask the teacher
            for (let p of distractors){
                if (p.area>largeArea){
                    largeArea = p.area;
                }
            }
    // console.log(largePopulation);
            for (let loopDist of distractors){
                let areaDiv = document.createElement('div');
                areaDiv.setAttribute('id', 'answer');
                areaDiv.innerText = loopDist.name;
                areaDiv.onclick = () => {
                    if(loopDist.area === largeArea){
                        alert("You got the right thing !! 😄"); 
                    }else{
                        alert("Sorry, You're wrong!! 😇 ")
                    }
                }
            document.getElementById('content').append(areaDiv) 
            };
        }
        let bFour = document.getElementById('bfour');
        bFour.onclick = () => {
    // else if (btnData === 'flag'){
            document.getElementById('content').innerHTML = ' ';
            let flagName = Math.floor(r.length*Math.random());
            let newDiv = document.createElement('div');
            newDiv.setAttribute('id', 'questions');
            newDiv.innerText = `Choose the Flag of ${r[flagName].name}`
            let questPlace = document.getElementById('question');
            questPlace.append(newDiv);
            document.getElementById('content').append(newDiv);
            let distractors = [];
            for (i = 0;i<3;i++){
                let randomFlag = Math.floor(Math.random() * 195);
                console.log(randomFlag)
                distractors.push(r[randomFlag].flag);
            }
            distractors.push(r[flagName].flag);

            let uniflag=new Set(distractors);
            console.log(uniflag)
            const arr = [...uniflag];
        // const shuffleArray
            let shuffled = arr
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            console.log(shuffled)

            for (let d of shuffled){
                let imgFlag = document.createElement('img')
                // newDiv.setAttribute('id', 'question');
                imgFlag.src = d;
                imgFlag.style.width = '100px';
                imgFlag.onclick = () => {
                    if(d === r[flagName].flag){
                        alert("You got the right thing !! 😄"); 
                    }else{
                        alert("Sorry, You're wrong!! 😇 ")
                    }
                }
            document.getElementById('content').append(imgFlag)
            };
         

        }
    
    // ------------------- reload window--------------------

    let reLoad = document.getElementById('reload');
        reLoad.onclick = () => {
            window.location.reload();
        }
   
        
// ------------------------------- End of Quiz Game selection ----------------------------------------------
        
// --------------- start of edit data -----------------
// document.getElementById('visible').style.display = 'none';
// let editBtn = document.getElementById('editData');
//     editBtn.onclick = () => {
//         let editData = editBtn.value;
//         console.log(editData);
//         if (editData === 'edit'){
//             document.getElementById('visible').style.display = 'block';
//         }
        
        
        // let editData = document.getElementById('editData').value;
        // console.log(editData)
        // if (comfirmData === 'editData'){
        //     document.getElementById('content').innerHTML = ' ';
        //     let newDiv = document.createElement('div');
        //     newDiv.setAttribute('id', 'questions');
        //     newDiv.innerText = "Get Data Information";
        //     let infoHeading = document.getElementById('question');
        //     infoHeading.append(newDiv);
        //     document.getElementById('content').append(newDiv);

        //     // getData.style.display = "block";

        //     let textBox = document.createElement("input");
        //     let newDivtwo = document.createElement('div');
        //     let textNote = document.createTextNode('ID');
        //     textBox.setAttribute('type', 'text');
        //     textBox.setAttribute('value', 'default');
        //     newDivtwo.append(textNote);
        //     newDivtwo.append(textBox);
        //     document.getElementById('content').append(newDivtwo);


            
        //     // let textBox = document.createElement("input");
        //     // textBox.setAttribute('type', 'text');
        //     // textBox.setAttribute('value', 'default');
        //     // new XMLSerializer().serializeToString(textBox);
        //     // document.getElementById('content').append(textBox)
        // }else{
        //     document.getElementById('getdata').style.display = 'none';
        // }
    // }                   
//  document.getElementById('content').innerHTML = ' ';
//             let newDiv = document.createElement('div');
//             newDiv.setAttribute('id', 'questions');
//             newDiv.innerText = "Which country has biggest Area?"
//             let questPlace = document.getElementById('question');
//             questPlace.append(newDiv);
//             document.getElementById('content').append(newDiv)

// --------------- end of edit data -------------------
   })


//    ----------------------- data editing ------------------------
   
document.getElementById('getbutton').onclick = () => {
    console.log('pabc')
    //Make a GET call
    let id = document.getElementById('getid').value;
    console.log('372 console')
    fetch(`/api/country/${id}`)
      .then(r=>r.json())
      .then(r=>{
          document.getElementById('getoutput').value=JSON.stringify(r);
      })
}

document.getElementById('deletebutton').onclick = ()=>{
    let id = document.getElementById('deleteid').value;
    fetch(`/api/country/${id}`, {method:'DELETE'})
}


document.getElementById('postbutton').onclick = ()=>{
    let payload = {
        id: document.getElementById('postid').value,
        name: document.getElementById('postname').value,
        continent: document.getElementById('postcontinent').value,
        capital: document.getElementById('postcapital').value,
        // area: document.getElementById('postarea').value,
        // population: document.getElementById('postpopulation').value,
        // gdp: document.getElementById('postgdp').value,
        // flag: document.getElementById('postflag').value,
        // tld: document.getElementById('posttld').value,
    }
    fetch(`/api/country/${payload.id}`, {
        method:'post',
        body: JSON.stringify(payload),
        headers:{'content-type':'application/json'}
    })
}


document.getElementById('putbutton').onclick = ()=>{
    let payload = {
        id: document.getElementById('putid').value,
        name: document.getElementById('putname').value,
        continent: document.getElementById('putcontinent').value,
        capital: document.getElementById('putcapital').value,
        // area: document.getElementById('putarea').value,
        // population: document.getElementById('putpopulation').value,
        // gdp: document.getElementById('putgdp').value,
        // flag: document.getElementById('putflag').value,
        // tld: document.getElementById('puttld').value,
    }
    fetch(`/api/country/`, {
        method:'put',
        body: JSON.stringify(payload),
        headers:{'content-type':'application/json'}
    })
}



