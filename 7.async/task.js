class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalID = null;
    }
    addClock(time, callback) {
        if (time == false || callback == false) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.some(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall: true,
        });
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
            });;
    }
    start() {
        if (this.intervalID) {
            return;
        }
        this.intervalID = setInterval(() => {
            this.alarmCollection.forEach(i)() = {
                if (i = Date.now() && canCall === true) {
                    this.alarmCollection.canCall = false;
                    return callback();
                } 
            }
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach((i) => i.canCall = true);
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}