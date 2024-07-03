let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

h = 0;
m = 0;
s = 0;

const changes = () => {

    let hv = JSON.parse(hour.value);
    let mv = JSON.parse(minute.value);
    let sv = JSON.parse(second.value);

    h = hv;
    m = mv;
    s = sv;

    hr.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    const  start = () => {
    
        console.log("Timer Started");
    
        const Interval = setInterval(() => {
    
            s++;
            if (s < 10) {
                sec.innerHTML = "0" + s;
            } else {
                sec.innerHTML = s;
            }
    
            if (s > 59) {
                m++;
                s = 0;
                if (m < 10) {
                    min.innerHTML = "0" + m;
                } else {
                    min.innerHTML = m;
                }
    
                if (m > 59) {
                    h++;
                    m = 0;
                    if (h < 10) {
                        hr.innerHTML = "0" + h;
                    } else {
                        hr.innerHTML = h;
                    }
                }
            }
    
        }, 1000); 
    }

    start();
}