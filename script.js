let allObj = [{
    startedAt : new Date("2021-01-10:12:00"),
    finishedAt: new Date("2021-01-10:18:30"),
    totalTime: 0 ,
    tasksGiven: 15,
    tasksFinished: 8,
    tasksFinishedPercents: 0,
    topic: "JavaScript"
}, {
    startedAt : new Date("2021-01-11:14:30"),
    finishedAt: new Date("2021-01-11:17:30"),
    totalTime: 0 ,
    tasksGiven: 22,
    tasksFinished: 18,
    tasksFinishedPercents: 0,
    topic: "HTML"
}, {
    startedAt : new Date("2021-01-12:10:00"),
    finishedAt: new Date("2021-01-12:20:30"),
    totalTime: 0 ,
    tasksGiven: 16,
    tasksFinished: 7,
    tasksFinishedPercents: 0,
    topic: "CSS"
}, {
    startedAt : new Date("2021-01-13:14:00"),
    finishedAt: new Date("2021-01-13:15:30"),
    totalTime: 0 ,
    tasksGiven: 17,
    tasksFinished: 17,
    tasksFinishedPercents: 0,
    topic: "GitHub"
}, {
    startedAt : new Date("2021-01-14:11:00"),
    finishedAt: new Date("2021-01-14:20:00"),
    totalTime: 14 ,
    tasksGiven: 10,
    tasksFinished: 8,
    tasksFinishedPercents: 0,
    topic: "More HTML"
}, {
    startedAt : new Date("2021-01-15:12:00"),
    finishedAt: new Date("2021-01-15:17:30"),
    totalTime: 0 ,
    tasksGiven: 25,
    tasksFinished: 24,
    tasksFinishedPercents: 0,
    topic: "Loops"
}, {
    startedAt : new Date("2021-01-16:09:00"),
    finishedAt: new Date("2021-01-16:13:30"),
    totalTime: 0 ,
    tasksGiven: 24,
    tasksFinished: 12,
    tasksFinishedPercents: 0,
    topic: "Conditions"
}, {
    startedAt : new Date("2021-01-17:12:00"),
    finishedAt: new Date("2021-01-17:17:00"),
    totalTime: 0 ,
    tasksGiven: 15,
    tasksFinished: 13,
    tasksFinishedPercents: 0,
    topic: "Arrays"
}, {
    startedAt : new Date("2021-01-18:10:30"),
    finishedAt: new Date("2021-01-18:17:30"),
    totalTime: 0 ,
    tasksGiven: 16,
    tasksFinished: 9,
    tasksFinishedPercents: 0,
    topic: "Objects"
},
];


for (let i = 0; i < allObj.length; i++) {
    //calculate tasksFinishedPercents
    allObj[i].tasksFinishedPercents = (Math.floor((allObj[i].tasksFinished / allObj[i].tasksGiven) *100 ));
    //console.log(tasksFinishedPercents);
    let total = 0;
    let hours = 0;
    let minutes = 0;

    //calculate totalTime
    hours = allObj[i].finishedAt.getHours() - allObj[i].startedAt.getHours();
    //console.log(hours);
    minutes = allObj[i].finishedAt.getMinutes() - allObj[i].startedAt.getMinutes();
    //console.log(minutes);
    minutes = minutes / 60;
    //console.log(minutes);
    total = minutes + hours;
    //console.log(total);
    allObj[i].totalTime = total;
    //console.log(allObj[i].totalTime);

    
    allObj[i].startedAt = (allObj[i].startedAt.getHours() + ":" +allObj[i].startedAt.getMinutes());
    allObj[i].finishedAt = (allObj[i].finishedAt.getHours() + ":" +allObj[i].finishedAt.getMinutes());
 
}

document.write('<table>');
function tableHead (table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(allObj[0]);
tableHead(table, data);
generateTable(table, allObj);
document.write('</table>');
