
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
    var addResult = Module.ccall(
        "addNums",
        "number",
        ["number", "number"],
        [numberA ,numberB]
    )
    
    if (paragraph.innerText == "works"){
        paragraph.innerText = String(oldText);
    }else{
        paragraph.innerText = "works";
    }

    if(numberA != "" && numberB != ""){
        solution.style.color =  "green";
        solution.innerText = "Your Solution is: " + addResult;
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
