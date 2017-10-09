function saveTask() {
    //Get input from Todo
    const task = document.getElementById('inputTodo').value;

    const newTaskObject = {
        task,
    };
    console.log(newTaskObject);

    newTaskParagraph = `
	task: ${newTaskObject.task}
  `;
    console.log(newTaskParagraph);

    //Create element list, so every we add task we create new list
    const listItem = document.createElement("li");
    var nodeTask = document.createTextNode(newTaskParagraph);
    listItem.appendChild(nodeTask);
    document.getElementById("taskResult").appendChild(listItem);

    // Put the object into storage
    const arrTask = [];
    arrTask.push(newTaskObject)

    localStorage.setItem('task',JSON.stringify(arrTask));
    // Retrieve the object from storage
    var retrievedObject = JSON.parse(localStorage.getItem('arrTask'));
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
    console.log(retrievedObject);
};