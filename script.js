let first = {
    startedAt : new Date("2021-01-10:12:00"),
    finishedAt: new Date("2021-01-10:18:30"),
    totalTime: 0 ,
    tasksGiven: 15,
    tasksFinished: 8,
    tasksFinishedPrecent: 0,
    topic: "JavaScript"
};

let allObj =[first];


for (let i = 0; i < allObj.length; i++) {
    allObj[i].tasksFinishedPrecent = (Math.floor((allObj[i].tasksFinished / allObj[i].tasksGiven) *100 ));
  //  console.log(tasksFinishedPrecent);
    let total = 0;
    let hours = 0;
    let minutes = 0;
    hours = allObj[i].finishedAt.getHours() - allObj[i].startedAt.getHours();
  //  console.log(hours);
    minutes = allObj[i].finishedAt.getMinutes() - allObj[i].startedAt.getMinutes();
   // console.log(minutes);
    minutes = minutes / 60;
  //  console.log(minutes);
    total = minutes + hours;
  //  console.log(total);
    allObj[i].totalTime = total;
  //  console.log(allObj[i].totalTime);

}


for( let x of allObj) {
    
}