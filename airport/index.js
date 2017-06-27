const Scheduler = require('./lib/scheduler');

let scheduleHandler = new Scheduler();


var result = scheduleHandler.couldScheduleAt(new Date(99, 5, 24, 11, 30, 0));   //TRUE

console.log('Se puede programar 11:30  ' + result);

result = scheduleHandler.scheduleAt(new Date(99, 5, 24, 11, 30, 0));   //TRUE

console.log('Se programa 11:30  ' + result);

result = scheduleHandler.couldScheduleAt(new Date(99, 5, 24, 11, 30, 0)); //FALSE

console.log('Se puede programar 11:30 ' + result);

result = scheduleHandler.couldScheduleAt(new Date(99, 5, 24, 11, 20, 0)); //FALSE

console.log('Se puede programar 11:20 ' + result);

result = scheduleHandler.couldScheduleAt(new Date(99, 5, 24, 11, 35, 0)); //FALSE

console.log('Se puede programar 11:35 ' + result);

result = scheduleHandler.couldScheduleAt(new Date(99, 5, 24, 11, 40, 0)); //FASLE

console.log('Se puede programar 11:40 ' + result);

result = scheduleHandler.couldScheduleAt(new Date(99, 5, 24, 11, 51, 0)); //TRUE

console.log('Se puede programar 11:51 ' + result);




