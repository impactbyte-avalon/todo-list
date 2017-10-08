const lists = [];

function addList(hour, activity) {
  lists.push({
    hour: hour,
    activity: activity
  });
}

console.log(lists);

addList(3, "Makan");

console.log(lists);

function removeList(index) {
  lists.splice(lists[index], 1);
}

console.log(lists);

addList(4, "belajar");

console.log(lists);

removeList(0);

console.log("final result", lists);
