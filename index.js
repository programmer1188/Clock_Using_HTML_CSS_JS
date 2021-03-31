setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    htime = updateTime(htime);
    mtime = updateTime(mtime);
    stime = updateTime(stime);
    document.getElementById("timeZone").innerText = htime + " : " + mtime + " : " + stime +" IST"; /* adding time to the div */

}, 1000);

function updateTime(k) {  //To get zero(0) before sigle digits 
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}