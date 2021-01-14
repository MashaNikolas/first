let menu = document.getElementById('menu');

menu.onclick = function() {
    let myTopnav = document.getElementById('myTopnav');

    if (myTopnav.className === "topnav") {
        myTopnav.className += ' responsive'
    }
    console.log(myTopnav.className, " = myTopnav className");

}