#include <stdio.h>

int ps(int n){
    if(n<=2) return 1;
    else {
        return ps(n-1) + ps(n-2);

    }

}
int main(){
    int k;
    scanf("%d", &k);
    printf("%d", ps(k));
}
