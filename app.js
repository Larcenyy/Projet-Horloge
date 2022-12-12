// Ma fonction
clock();


function clock() {
    const myDate = new Date();


    // MA DATE ICI
    const hours = myDate.getHours() + 11 % 12 +1;
    const minutes = myDate.getMinutes()
    const second = myDate.getSeconds()

    const hour = hours * 30;
    const min =  minutes * 6;
    const seconds = second * 6;


        // $ = valeur de rotate
    // hours ma var

    document.querySelector(".heure").style.transform = `rotate(${hour}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${min}deg)`;
    document.querySelector(".seconde").style.transform = `rotate(${seconds}deg)`;

    setInterval(clock, 1000)
}