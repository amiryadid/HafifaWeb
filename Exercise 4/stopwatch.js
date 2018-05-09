function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

const clockRunningFlag = {
    Running: false,
    StartTime: new Date(),
    IntervalHandler: null
}

ready(function() {
    let minute = ('0' + 0).slice(-2);
    let second = ('0' + 0).slice(-2);
    let miliseconds = ('00' + 0).slice(-3);
    document.getElementById("divTime").innerHTML = `${minute}:${second}:${miliseconds}`;
    document.getElementById("btnStop").disabled = true;
});

function Clock_Running() {
    return clockRunningFlag.Running;
}

function Clock_Start() {
    clockRunningFlag.Running = true;
    clockRunningFlag.StartTime = new Date();
    clockRunningFlag.IntervalHandler = setInterval(Clock_Update, 1);
    document.getElementById("btnStop").disabled = false;
    document.getElementById("btnStart").disabled = true;
}

function Clock_Stop() {
    clockRunningFlag.Running = false;
    clearInterval(clockRunningFlag.IntervalHandler);
    document.getElementById("btnStop").disabled = true;
    document.getElementById("btnStart").disabled = false;
}

function Clock_Update() {
    let now = new Date();
    let millisecDiff = now.getTime() - clockRunningFlag.StartTime.getTime();
    let diffDate = new Date(millisecDiff);
    let minute = ('0' + diffDate.getMinutes()).slice(-2);
    let second = ('0' + diffDate.getSeconds()).slice(-2);
    let miliseconds = ('00' + diffDate.getMilliseconds()).slice(-3);
    document.getElementById("divTime").innerHTML = `${minute}:${second}:${miliseconds}`;
}

