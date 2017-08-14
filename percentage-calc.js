var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("calculator");
var decimalPlace = document.getElementById("decimalPlace");


/* --- Testing if the link works --- */
//numField1.defaultValue="X"
//numField2.defaultValue="Y"
//resultField.innerText ="Result"
/* --------------------------------- */

//var whatIsYPercentageOfX = function(x,y) {
//    answer = y/100*x;
//    return answer.toFixed(2);
//};

/* ----- Calculator Functions ----- */

function whatIsXPercentageOfY(x,y) {
    return x/100*y;
}

function xIsYPercentageOfWhat(x,y) {
    return x/(0.01*y);
}


function whatPercentageOfXIsY(x,y) {
    return y/x * 100;
}

function XPercentageOfWhatIsY(x,y) {
    return y/(.01*x);
}

function XPercentageOfYIsWhat(x,y) {
    return y*.01*x;
}


/* ----- Calcuator Interaction ----- */

form.addEventListener('submit', function(event) {
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields.");
    } else {
        
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var roundTo = parseFloat(decimalPlace.value);
        var answer = 0;
        var text = "";
        debugger;
        event.preventDefault();
        
        var selectedValue = document.getElementById("dropdownMenu").value;
        
        switch (selectedValue) {
            case 'whatIsXPercentageOfY':
                text = 'What is ' + x + "% of " + y + "?";
                answer = whatIsXPercentageOfY(x,y);
                break;
                      
            case 'xIsYPercentageOfWhat':
                text = x + " is " + y + "% of what?";
                answer = xIsYPercentageOfWhat(x,y);
                break;
                
            case 'whatPercentageOfXIsY':
                text = "What % of " + x + " is " + y + "?";
                answer = whatPercentageOfXIsY(x,y);
                break;
                
            case 'XPercentageOfWhatIsY':
                text = x + "% of what is " + y + "?";
                answer = XPercentageOfWhatIsY(x,y);
                break;
                
            case 'XPercentageOfYIsWhat':
                text = x + "% of " + y + " is what?"
                answer = XPercentageOfYIsWhat(x,y);
                break;        
        }
        document.getElementById("resultField1").innerText = "Qn: " + text;
        document.getElementById("resultField2").innerText = "Ans: " + answer.toFixed(roundTo);
    }
    
       
});