#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int sumOfNInts(int n){
    return n * (n + 1) / 2;
}

int main(){
    sumOfNInts(3);
    return 0;
}