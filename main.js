// handles the details on how the LED looks
const LED = {
    color : [0,255,0], // RGB
    size : 5,
    margin: 1,

    drawLED: function (x,y) {
        fill(...this.color);
        rect(x,y,this.size,this.size);
    }
}

function setup() {
    createCanvas(2500,600);
}

// updates every frame
function draw() {
    let date = new Date(); // gets date object 
    let strYear = date.getFullYear().toString();
    let strMonth = date.getMonth();
    switch (strMonth) {
        case 0:
            strMonth = "JANUARY";
            break;
        case 1:
            strMonth = "FEBRUARY";
            break;
        case 2:
            strMonth = "MARCH";
            break;
        case 3:
            strMonth = "APRIL";
            break;
        case 4:
            strMonth = "MAY";
            break;
        case 5:
            strMonth = "JUNE";
            break;
        case 6:
            strMonth = "JULY";
            break;
        case 7:
            strMonth = "AUGUST";
            break;
        case 8:
            strMonth = "SEPTEMBER";
            break;
        case 9:
            strMonth = "OCTOBER";
            break;
        case 10:
            strMonth = "NOVEMBER";
            break;
        case 11:
            strMonth = "DECEMBER";
            break;
        default:
            strMonth = "ERROR";
            break;
    }
    let strDate = (date.getDate() < 10 ? "0" : "") + date.getDate().toString();
    let strDay = date.getDay();
    switch (strDay) {
        case 0:
            strDay = "SUNDAY";
            break;
        case 1:
            strDay = "MONDAY";
            break;
        case 2:
            strDay = "TUESDAY";
            break;
        case 3:
            strDay = "WEDNESDAY";
            break;
        case 4:
            strDay = "THURSDAY";
            break;
        case 5:
            strDay = "FRIDAY";
            break;
        case 6:
            strDay = "SATURDAY";
            break;
        default:
            strDay = "ERROR";
            break;
    }
    let strHours = (date.getHours() % 12 < 10 ? "0" : "") + (date.getHours() % 12).toString();
    let strPeriod = date.getHours() < 12 ? "AM" : "PM" ;
    let strMinutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes().toString();
    let strSeconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds().toString();
    background(0);
    
    drawLEDString( `${strMonth} ${strDate},${strYear}     ${strDay}` ,
    200,
    70);

    // Drawing the time
    drawLEDString(
    `${strHours}${date.getMilliseconds() < 500 ? ":" : " "}${strMinutes}${date.getMilliseconds() < 500 ? ":" : " "}${strSeconds} ${strPeriod}`,
    500,
    200);
}

// Draws a LED style string on the canvas
// If function encounters an unsupported character, it regards it as a space
function drawLEDString(message, anchorX, anchorY) {
    let x = anchorX; // the X coordinate where the character is going to be printed
    let y = anchorY; // the Y coordinate where the character is going to be printed

    fill(255,255,255)
    for (let i = 0; i < message.length; i++) {
        switch (message[i].toUpperCase()) {
            // LED Characters are coded manually
            // LED draw order is top-down starting from the leftmost vertical line to the rightmost vertical line
            case "A":
                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * (2+j)));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 4));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y);
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 4));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 4));

                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * (2+j)));
                }  
                //LED.drawLED(x,y);
                //LED.drawLED(x,y);
                break;
            case "B":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                break;
            case "C":
                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * (1+j)));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                break;
            case "D":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * (1+j)));
                }
                break;
            case "E":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 6));
                break;
            case "F":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 0));
                break;
            case "G":
                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * (1+j)));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 5));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                for (let j = 0; j < 4; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * (3+j)));   
                }
                break;
            case "H":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));

                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * j));
                }
                break;
            case "I":
                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 2)  , y + ((LED.size + LED.margin) * j));
                }

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));
                break;
            case "J":
                LED.drawLED(x , y + ((LED.size + LED.margin) * 5));
            
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 6; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * j));
                }
                break;
            case "K":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 4));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 6));
                break;
            case "L":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 6));
                break;
            case "M":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 1));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 1));

                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * j));
                }
                break;
            case "N":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 1));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 2));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));

                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * j));
                }
                break;
            case "O":
                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * (1+j)));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * (1+j)));
                }
                break;
            case "P":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 2));
                break;
            case "Q":
                for (let j = 0; j < 4; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * (1+j)));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 5));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 5));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 5));

                for (let j = 0; j < 4; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * (1+j)));
                }
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 6));
                break;
                break;
            case "R":
                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 6));
                break;
            case "S":
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 5));
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                break;
            case "T":
                LED.drawLED(x , y + ((LED.size + LED.margin) * 0));

                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 0));

                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 2)  , y + ((LED.size + LED.margin) * j));
                }

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 0));
                break;
            case "U":
                for (let j = 0; j < 6; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 6; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * j));
                }
                break;
            case "V":
                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 5));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 5));

                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * j));
                }
                break;
            case "W":
                for (let j = 0; j < 6; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * j));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 5));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 6; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * j));
                }
                break;
            case "X":
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 5));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 4));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 4));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 6));
                break;
            case "Y":
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 2));

                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 5));
                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 2));
                break;
            case "Z":
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 5));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 3), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 3), y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x  + ((LED.size + LED.margin) * 3), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 4), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 4), y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  + ((LED.size + LED.margin) * 4), y + ((LED.size + LED.margin) * 6));
                break;
            case "1":
                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 2)  , y + ((LED.size + LED.margin) * j));
                }

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));
                break;
            case "2":
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 5));
                LED.drawLED(x  + ((LED.size + LED.margin) * 0), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 3), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 3), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 3), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x  + ((LED.size + LED.margin) * 4), y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  + ((LED.size + LED.margin) * 4), y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x  + ((LED.size + LED.margin) * 4), y + ((LED.size + LED.margin) * 6));
                break;
            case "3":
                LED.drawLED(x, y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x, y + ((LED.size + LED.margin) * 5));
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                break;
            case "4":
                LED.drawLED(x , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x , y + ((LED.size + LED.margin) * 4));

                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 4));
                
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 4));

                for (let j = 0; j < 7; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 3)  , y + ((LED.size + LED.margin) * j));
                }

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 4));
                break;
            case "5":
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 5));
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                break;
            case "6":
                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * (1+j)));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                break;
            case "7":
                LED.drawLED(x , y + ((LED.size + LED.margin) * 0));

                LED.drawLED(x + ((LED.size + LED.margin) * 1) , y + ((LED.size + LED.margin) * 0));

                LED.drawLED(x + ((LED.size + LED.margin) * 2)  , y + ((LED.size + LED.margin) * 0));
                for (let j = 0; j < 4; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 2)  , y + ((LED.size + LED.margin) * (3+j)));
                }

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 2));
                
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                break;
            case "8":
                LED.drawLED(x, y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x, y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x, y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x, y + ((LED.size + LED.margin) * 5));
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * 5));
                break;
            case "9":
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x  , y + ((LED.size + LED.margin) * 5));
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * (1+j)));
                }
                break;
            case "0":
                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x  , y + ((LED.size + LED.margin) * (1+j)));
                }
                
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 4));
                LED.drawLED(x  + ((LED.size + LED.margin) * 1), y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 3));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));

                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 0));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 2));
                LED.drawLED(x + ((LED.size + LED.margin) * 3) , y + ((LED.size + LED.margin) * 6));

                for (let j = 0; j < 5; j++) {
                    LED.drawLED(x + ((LED.size + LED.margin) * 4) , y + ((LED.size + LED.margin) * (1+j)));
                }
                break;
            case ":":
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 1));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 5));
                break;
            case ".":
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 5));
                break;
            case ",":
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 5));
                LED.drawLED(x + ((LED.size + LED.margin) * 2) , y + ((LED.size + LED.margin) * 6));
            // Further characters may or may not be added
            default:
                break;
        }
        x += ((LED.size + LED.margin) * 6); // updates the x coordinate after each character
    }
}