class Schedule {
    constructor(time) {
        this.startTime = (time.getHours() * 60 + time.getMinutes()) - 10;
        this.endTime = (time.getHours() * 60 + time.getMinutes()) + 10;
    }

    static getScheduleKey(time) {
        return 1;
    }
}

module.exports = Schedule;