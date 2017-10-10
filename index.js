var task1{
    todo:"tidur",
    dueDate:"Besok"
}

var task2{
    todo:"molor",
    dueDate:"Hari ini"
}

var task = [task1, task2];

function printTask(task){
  console.log(task.todo + " " + task.dueDate);
}

function list() {
   var taskLength = task.length;
   for (i = 0; i < taskLength; i++) {
     printPerson(task[i])
   }
}

function add(todo,dueDate){
  task[task.length] = {
    todo: todo,
    dueDate: dueDate
  }
}
add("Main Codewars", "Sekarang");
