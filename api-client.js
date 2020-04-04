 
 const apiUrl = `https://wincacademydatabase.firebaseio.com/marcel/tasks.json`;

 const getToDoList = async function () { 
   
    try {
    const res =  await fetch(apiUrl, { method: 'GET' });
        const data = await res.json();
        let tasks = Object.keys(data).map(key => ({
            id: key,
            description: data[key].description,
            done: data[key].done
        }));

        tasks.forEach (task => {
            const removeTask = async function () {
                const apiRemUrl = `https://wincacademydatabase.firebaseio.com/marcel/tasks/${task.id}.json`;
                 try { 
                  const res = await fetch(apiRemUrl, { method: 'DELETE',                     
                       })
                       console.log('Task removed succesfully'); 
                   location.reload(true);
                       }
                   catch (error) {
                   console.log(error)}  
       
               };
            const list = document.getElementById('items');
            const newLi = document.createElement("li");
            const trashBin = document.createElement("img");
            trashBin.src = 'trash-delete-icon.png';
            trashBin.addEventListener ("click", removeTask
            )
            newLi.innerHTML= `${task.description} &nbsp; `;
            items.appendChild(newLi);
            newLi.append(trashBin);

        })
                           
            }
        catch (error) {
            console.log(error)}   
          
           
        }
       

getToDoList();

               
        const addTask = async function () {
            const task = document.getElementById("inputfield").value; 
        
            try { 
           const res =  await fetch(apiUrl, { method: 'POST', 
             body: JSON.stringify ({
                 description: task,
                 done: false
                }) 
            })
            console.log (`Task added succesfully.`);
              location.reload(true);
        }
        catch (error) {
            console.log(error)}   
                                
                }
        
        let newTask= document.getElementById('button');
        button.addEventListener("click", addTask);
       
             
                
        /* 
        Poging voor inbouwen checkbox ipv listitems 
        (niet gelukt daar tekst niet zichtbaar wordt; een oplossing hoor ik eventueel graag :))
            .getElementsByTagName('li');
            //checkBox.setAttribute("type", "checkbox");
            //const label = document.createElement('label');
            //checkBox.name = 'listitem'
            //checkBox.id = 'listitem'
            //c/heckBox.value = 'test'
            //label.htmlFor = checkBox.id;
        */
        
   
 

    
