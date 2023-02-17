
const addItemEl = document.querySelector("#add_item");
const addItemInputEl = document.querySelector("#add_item_input");

const outListEl = document.querySelector("#items");


listOfThings= [];

addItemEl.addEventListener("click",
    function (eve) {
        eve.preventDefault();
        const thing = addItemInputEl.value;

        const listOfThingsObject = {
            thingsObj: thing,
            id: Math.round((Math.random() * 100)  + 1000),
        };
        listOfThings.push(listOfThingsObject);

        outListEl.innerHTML = "";

        for (let stuff of listOfThings) {
            const tr = document.createElement("tr");

            tr.innerHTML =`
                
                 <td>${stuff['thingsObj']}</td>
                 <td><button class="bg-sky-700 text-white justify-end remove_el" value= "${stuff['id']}">Remove</button></td>
                 
            `

            outListEl.appendChild(tr);

        }
        addItemInputEl.value ="";
    })
document.addEventListener("click",(evie)=>{
        if(evie.target.matches(".remove_el")){
            const listIndex = listOfThings.findIndex((stuff)=>{
                return stuff['thingsObj'] === evie.target.value;

            })

             const newListOfThings = listOfThings ;

            newListOfThings.splice(listIndex, 1);


            outListEl.innerHTML = '';

            for (let stuff of newListOfThings) {



                const tr = document.createElement("tr");
                //tr.classList.add( "simplify-around")

                tr.innerHTML =`
                        
                         <td class="id">${stuff['thingsObj']}</td>
                          <td><button class="bg-sky-700 text-white remove_el" value= "${stuff['id']}">Remove</button></td>
                          
                        `;


                outListEl.appendChild(tr);

            }


        }

    })

