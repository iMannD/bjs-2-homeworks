class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalID = null;
    }
    addClock(alarmTime, funCallBack) {
        if (arguments.length < 2) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.includes(alarmTime) = false) {
            this.alarmCollection.push(alarmTime);
        } else {
            console.warn('Уже присутствует звонок на это же время');
        }
    }
}