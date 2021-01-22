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



for (let obj of allObj) {
    //calculate tasksFinishedPercents
    obj.tasksFinishedPercents = (Math.floor((obj.tasksFinished / obj.tasksGiven) *100 ));
    let total = 0;
    let hours = 0;
    let minutes = 0;

    //calculate totalTime
    hours = obj.finishedAt.getHours() - obj.startedAt.getHours();
    minutes = obj.finishedAt.getMinutes() - obj.startedAt.getMinutes();
    minutes = minutes / 60;
    total = minutes + hours;
    obj.totalTime = total;

    let hourStart = obj.startedAt.getHours();
    hourStart = hourStart.toString();

    let hourFinish = obj.finishedAt.getHours();
    hourFinish = hourFinish.toString();

    let minuteStart = obj.startedAt.getMinutes();
    minuteStart = minuteStart.toString();

    let minuteFinish = obj.finishedAt.getMinutes();
    minuteFinish = minuteFinish.toString();

    if (minuteStart < 10 ) {
        minuteStart = `${minuteStart}0`;
    }
    if (minuteFinish < 10) {
        minuteFinish = `${minuteFinish}0`;

    }
    if (hourStart < 10 ) {
        hourStart = `0${hourStart}` ;

    }
    if (hourFinish < 10) {
        hourFinish = `0${hourFinish}`;
    }

    obj.startedAt = hourStart + ":" + minuteStart;
    obj.finishedAt = hourFinish + ":" + minuteFinish;

}



//create table
document.write("<table>"); //style = 'background-color: blue'
document.write("<tr>");
document.write("<th>startedAt</th>");
document.write("<th>finishedAt</th>");
document.write("<th>totalTime</th>");
document.write("<th>tasksGiven</th>");
document.write("<th>tasksFinished</th>");
document.write("<th>tasksFinishedPercents</th>");
document.write("<th>topic</th>");
document.write("</tr>");
for (let sub of allObj) {
    document.write("<tr>");
    document.write(`<td>${sub.startedAt}</td>`);
    document.write(`<td>${sub.finishedAt}</td>`);
    let timeTo = changeColorTotal(sub.totalTime);
    document.write(`<td style = "background-color:${timeTo}">${sub.totalTime}</td>`);
    document.write(`<td>${sub.tasksGiven}</td>`);
    document.write(`<td>${sub.tasksFinished}</td>`);
    let percentsFin = changeColorFinishedPercents(sub.tasksFinishedPercents);
    document.write(`<td style = "background-color:${percentsFin}">${sub.tasksFinishedPercents}</td>`);
    document.write(`<td>${sub.topic}</td>`);
    document.write("</tr>");
}
document.write("</table>");
