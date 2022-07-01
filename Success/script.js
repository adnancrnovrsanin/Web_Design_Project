window.onload = () => {
    var sec = 4;
    setInterval(function () {
        document.getElementById("timer").innerHTML = sec;
        sec--;
        if (sec == -1) {
            window.location.pathname = "/Web_Design_Project/index.html";
        }
    }, 1000);
}