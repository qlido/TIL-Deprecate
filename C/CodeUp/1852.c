#include <stdio.h>
int n;
void f(int k) {
    printf("%d ",k);
    if(n!=k){
        f(k+1);
    }
}

int main(){
    scanf("%d", &n);
    f(1);

    return 0;
}