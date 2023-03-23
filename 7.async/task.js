class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalID = null;
    }
    addClock(time, funCallBack) {
        if (arguments.length < 2) {
            throw new Error('Отсутствуют обязательные аргументы')
        }


        this.alarmCollection.push(newAlarm);
    }
}