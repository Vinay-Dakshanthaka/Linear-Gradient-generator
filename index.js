

function changeColor() {
    // to get random direction for linear gradient 
    //dir --> Directiion
    const dir = [" to right", "to left " , "to bottom right ","to bottom left" ,"180deg"," 90deg"," 360deg","270deg","30deg","60deg","120deg","150deg"]

   let drandom = dir[Math.floor(Math.random() * dir.length)]
    console.log(drandom)

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, "9", "A", "B", "C", "D", "E", "F"];

    random = hex[Math.floor(Math.random() * hex.length)]


    let hexColor = "#"
    for (let i = 1; i <= 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length)
    }

    //another hex combination
    const ahex = [0, 1, 2, 3, 4, 5, 6, 7, 8, "9", "A", "B", "C", "D", "E", "F"];

    random = ahex[Math.floor(Math.random() * ahex.length)]


    let ahexColor = "#"
    for (let i = 1; i <= 6; i++) {
        ahexColor += ahex[agetRandomNumber()]
    }

    function agetRandomNumber() {
        return Math.floor(Math.random() * ahex.length)
    }

    // document.write(hexColor + " " + " " + ahexColor)


    //document background changer
     let direction 
    let liG =  "linear-gradient(" + drandom + ", " + hexColor + ", " + ahexColor + ")" ;

    //Sets the backgroun style
    document.body.style.background = liG
     
    document.querySelector('.background').style.backgroundRepeat = "no-repeat";


    document.getElementById("colorName").innerHTML = "linear-gradient("+ drandom +", " + hexColor + ", " + ahexColor +")" ;
}

