#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int addNums(int a, int b){
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int subtractNums(int a, int b){
    return a - b;
}

EMSCRIPTEN_KEEPALIVE
int main() {
    printf("This is Web-Assembly!\n");
    return 0;
}