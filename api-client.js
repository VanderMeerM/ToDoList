 
 const apiUrl = `https://wincacademydatabase.firebaseio.com/marcel/tasks.json`;

 const getToDoList = async function () { 
<<<<<<< HEAD
       
=======
   
>>>>>>> 66ebcbdd750a6c4eac056cf058335c8977f00956
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
<<<<<<< HEAD
                      location.reload(true);
=======
                       console.log('Task removed succesfully'); 
                    location.reload(true);
>>>>>>> 66ebcbdd750a6c4eac056cf058335c8977f00956
                       }
                   catch (error) {
                   console.log(error)}  
       
               };
<<<<<<< HEAD

              
            document.getElementById('items');
            const checkBox = document.createElement('input');
            const newP = document.createElement('p');
            checkBox.type = "checkbox"; 
            checkBox.id = "checkbox"; 
            let label = document.createElement('label'); 
            label.htmlFor = "id";
            label.appendChild(document.createTextNode(`${task.description}`)); 
            items.appendChild(checkBox); 
            items.appendChild(label); 
            
            const trashBin = document.createElement("img");
            trashBin.src = 'trash-delete-icon.png';
            trashBin.addEventListener ("click", removeTask)
            items.appendChild(trashBin);
            items.appendChild(newP); 
             })
                     
            }
        catch (error) {
            console.log(error)}   
                   
=======
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
          
           
>>>>>>> 66ebcbdd750a6c4eac056cf058335c8977f00956
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
<<<<<<< HEAD
           location.reload(true);
=======
            console.log (`Task added succesfully.`);
              location.reload(true);
>>>>>>> 66ebcbdd750a6c4eac056cf058335c8977f00956
        }
        catch (error) {
            console.log(error)}   
                                
                }
        
        let newTask= document.getElementById('button');
        button.addEventListener("click", addTask);
       
             
                
<<<<<<< HEAD
              
=======
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
        
   
>>>>>>> 66ebcbdd750a6c4eac056cf058335c8977f00956
 

    
