class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalID = null;
    }
    addClock(time, callback) {
        if (arguments.length < 2) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.includes(alarmTime)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall = true,
        });
    }
    removeClock(time) {
        let timeIndex;
        timeIndex = this.alarmCollection.indexOf(time);
        if (timeIndex > -1) {
            this.alarmCollection.splice(timeIndex, 1);
        }
    }
    getCurrentFormattedTime() {
        return Date.now();
    }
    start() {
        if (this.intervalID) {
            return;
        }
        this.alarmCollection.forEach(i)() = {
            if (i = Date.now() && canCall === true) {
                
            } 
        }
    }
}