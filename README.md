# Webassembly Practice Projects #

> Just a little Repository for try out some Webassembly methods.
> To use this make sure you have installed the EMSDK:
>
> ```CMD
>   git clone https://github.com/emscripten-core/emsdk.git
>```
>
>Dont forget to add the directory to your PATH variables!
>After this install the latest version (be sure youre in the EMSDK folder that you cloned before)
>
>```CMD
>   emsdk install latest
>```
>
>First off you have to activate the Env. with:
>
>```CMD
>   emsdk activate latest
>```
>
>Use the follow command to compile with Assembler:
>
>```CMD
>    emcc .\<NameOfCFile>.c -o <NameOfOutputFile>.js -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=ccall,cwrap
>```
