

function run_wasm(){
    // instance the WASM file
    WebAssembly.instantiateStreaming(
        // get local WASM file
        fetch("streaming.wasm"), {}
    ).then(results => {
        var a = document.querySelector("#a").value;
        var textField = document.querySelector("#mainText");
        // use the functions deffinied in the WASM file
        var sum = results.instance.exports.sumOfNInts(a);

        console.log(sum);
        
        textField.innerText = `Summary ${a} => ` + String(sum);
        document.querySelector("#a").value = null;
    });
}