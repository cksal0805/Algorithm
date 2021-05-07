const timeToMin = (time) => {
    const hour = Number(time[0] + time[1]) * 60;
    const min = Number(time[3]+time[4]);
    return hour + min;
}

function solution(n, t, m, timetable) {
    let time = timeToMin("09:00");
    const people = timetable.map((v) => timeToMin(v)).sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        const goKrew = people.filter((v) => v <= time).length;
        if (i === n - 1) {
            if (goKrew >= m) time = people[m-1] - 1;
        } else {
            people.splice(0, goKrew > m ? m : goKrew);
            time += t;
        }
    }
    return String(Math.floor(time/60)).padStart(2, "0") + ":" + String(time%60).padStart(2, "0");
}
