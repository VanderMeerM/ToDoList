
const apiUrl = `https://wincacademydatabase.firebaseio.com/marcel/tasks.json`;

const getToDoList = async function () {

    try {
        const res = await fetch(apiUrl, { method: 'GET' });
        const data = await res.json();
        let tasks = Object.keys(data).map(key => ({
            id: key,
            description: data[key].description,
            done: data[key].done
        }));
       
        tasks.forEach(task => {
            const removeTask = async function () {
                try {
                    const apiRemUrl = `https://wincacademydatabase.firebaseio.com/marcel/tasks/${task.id}.json`;
                    await fetch(apiRemUrl, {
                        method: 'DELETE',

                    })

                    location.reload(true);
                }
                catch (error) {
                    console.log(error)
                } 
            }
                const changeBoolean = async function () {
                    try {
                       const apiRemUrl = `https://wincacademydatabase.firebaseio.com/marcel/tasks/${task.id}.json`;
                        await fetch(apiRemUrl, {
                            method: 'PUT',
                            body: JSON.stringify({
                                description: task.description,
                                done: !task.done
                            })
                        })
                        location.reload(true);
                    }
                    catch (error) {
                        console.log(error)
                    }
            };
          
                document.getElementById("items");
                const checkBox = document.createElement('input');
                const newP = document.createElement('p');
                checkBox.type = "checkbox";
                checkBox.id = "checkbox";
                checkBox.addEventListener("click", changeBoolean)

                let label = document.createElement('label');
              
                if (task.done) {
                    label.style.textDecoration = "line-through";
                    label.style.fontStyle = "italic";
                }

                label.appendChild(document.createTextNode(`${task.description}`));
                items.appendChild(checkBox);
                items.appendChild(label);

                const trashBin = document.createElement("img");
                trashBin.src = 'trash-delete-icon.png';
                trashBin.addEventListener("click", removeTask)
                items.appendChild(trashBin);
                items.appendChild(newP);
                 
}); 

    }
    catch (error) {
        console.log(error)
    }

}


getToDoList();


const addTask = async function () {
    const task = document.getElementById("inputfield").value;

    try {
        await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({
                description: task,
                done: false
            })
        })
        location.reload(true);
    }
    catch (error) {
        console.log(error)
    }

}

let newTask = document.getElementById('button');
button.addEventListener("click", addTask);


