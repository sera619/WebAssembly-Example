
const paragraph = document.getElementById("triggertext");
var oldText = paragraph.innerText;


function run_wasm(){
    const solution = document.getElementById("solution");
    var result = Module.ccall(
        "main",
        "number",
        null,
        null
    );
    var numberA = document.querySelector("#numA").value;
    var numberB = document.querySelector("#numB").value;
    
    console.log(result);
    
    if (paragraph.innerText == "works"){
        paragraph.innerText = String(oldText);
    }else{
        paragraph.innerText = "works";
    }

    if(numberA != "" && numberB != ""){
        solution.style.color =  "green";
        solution.innerText = "Your Solution is: " + String(Number(numberA) + Number(numberB));
    }else if ( numberA == "" || numberB == ""){
        solution.style.color =  "darkred";
        if (numberA == ""){
            solution.innerText = "No Number A selected."
        }
        if (numberB == ""){
            solution.innerText = "No Number B selected."
        }
    }else{
        solution.innerText = "No numbers selected!";
    }
    
}
