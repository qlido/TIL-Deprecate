#include <stdio.h>
int n;
int sum(int k) {
    if (k==n) return k;
    return k + sum(k+1);
}

int main(){
    scanf("%d", &n);
    printf("%d", sum(1));
    return 0;
}