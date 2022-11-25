# Webassembly Practice Projects #

> Just a little Repository for try out some Webassembly methods.
> To use this make sure you have installed the EMSDK:
>
> ```CMD
>   git clone https://github.com/emscripten-core/emsdk.git
>```
>
>Dont forget to add the directory to your PATH variables!
>
>Use the follow command to compile with Assembler:
>
>```CMD
>    emcc .\<NameOfCFile>.c -o <NameOfOutputFile>.js -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=ccall,cwrap
>```
