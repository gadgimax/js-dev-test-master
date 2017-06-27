const Schedule = require('./schedule');


class Scheduler {

    constructor() {
        this.scheduleTable = [];
    }

    // returns true if there’s room to schedule at ‘time’
    couldScheduleAt(time) {
        let requestedSchedule = new Schedule(time);
        let couldSchedule = true;
        this.scheduleTable.every((element) => {
            if (requestedSchedule.startTime >= element.startTime && requestedSchedule.startTime <= element.endTime) {
                couldSchedule = false;
                return false;
            }
            else if (requestedSchedule.endTime >= element.startTime && requestedSchedule.endTime <= element.endTime) {
                couldSchedule = false;
                return false;
            }
        });

        return couldSchedule;
    }
    // returns true if we successfully scheduled
    scheduleAt(time) {
        // let back = this.scheduleTable.find((x) => { x.endTime > requestedSchedule.statTime });
        // let front = this.scheduleTable.find((x) => { x.startTime <= requestedSchedule.endTime });
        if (this.couldScheduleAt(time)) {
            let requestedSchedule = new Schedule(time);
            this.scheduleTable.push(requestedSchedule);
            return true;
        }
        return false;
    }
    // Choose an available time to schedule at, and return that time
    schedule() {

    }
    // returns true if we successfully unscheduled something
    unScheduleAt(time) {

    }

}

module.exports = Scheduler;