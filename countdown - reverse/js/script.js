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
    const start = () => {
    
        console.log("Timer Started");
    
        const Interval = setInterval(() => {
    
            s--;
            if (s < 10) {
                sec.innerHTML = "0" + s;
            } else {
                sec.innerHTML = s;
            }
    
            if (s <= 0) {
                m--;
                s = 59;
                if (m < 10) {
                    min.innerHTML = "0" + m;
                } else {
                    min.innerHTML = m;
                }
    
                if (m <= 0) {
                    if(h==0 && m==0){
                        clearInterval(Interval);
                    }else{
                        h--;
                        m = 59;
                        if (h < 10) {
                            hr.innerHTML = "0" + h;
                        } else {
                            hr.innerHTML = h;
                        }
                    }
                }
            }
    
        }, 10);
    }

    start();
}