
const paragraph = document.getElementById("triggertext");
var oldText = paragraph.innerText;

function run_wasm(){
    var result = Module.ccall(
        "main",
        "number",
        null,
        null
    );
    console.log(result);
    if (paragraph.innerText == "works"){
        paragraph.innerText = String(oldText);
    }else{
        paragraph.innerText = "works";
    }
}