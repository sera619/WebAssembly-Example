#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int sum(int a, int b){
    return a + b;
};

EMSCRIPTEN_KEEPALIVE
int sub(int a, int b){
    return a - b;
};

EMSCRIPTEN_KEEPALIVE
int multi(int a, int b){
    return a * b;
};

EMSCRIPTEN_KEEPALIVE
int divi(int a, int b){
    return a / b;
};