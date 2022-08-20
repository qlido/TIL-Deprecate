#include <stdio.h>

void pr(int n) {
    if (n != 1) {
        printf("*");
        pr(n-1);
    }
    else printf("*");

}
int main(){
    int n;
    scanf("%d", &n);
    pr(n);

    return 0;
}