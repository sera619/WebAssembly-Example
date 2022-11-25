const paragraph = document.getElementById("triggertext");
var oldText = paragraph.innerText;
// store c functions for multiple usage
var addCFunc = Module.cwrap("addNums", "number", ["number", "number"]);
var subCFunc = Module.cwrap("subtractNums", "number", ["number", "number"]);

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
    // directly call the c function
    var addResult = Module.ccall(
        "addNums",
        "number",
        ["number", "number"],
        [numberA ,numberB]
    )
    
    if(numberA != "" && numberB != ""){
        solution.style.color =  "green";
        paragraph.innerText = "Works!";
        solution.innerText = "Your addition Solution is: " 
        + String(addCFunc(numberA, numberB)) + "\nYour substact Solution is: " + String(subCFunc(numberA, numberB));        
    }else if ( numberA == "" || numberB == ""){
        paragraph.innerText = String(oldText);
        solution.style.color =  "darkred";
        if (numberA == ""){
            solution.innerText = "No Number A selected."
        }
        if (numberB == ""){
            solution.innerText = "No Number B selected."
        }
    }else{
        paragraph.innerText = String(oldText);
        solution.innerText = "No numbers selected!";
    }
    
}
