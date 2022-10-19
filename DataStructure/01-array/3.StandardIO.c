#include <stdio.h>

char a[5];

int main() {

    int i;
    for (i = 0; i < 5; i++) {
        scanf(" %c", &a[i]); //5번입력
    }
    for (i = 4; i >= 0; i--) {
        printf("%c", a[i]);// 4 -> 0 으로 반대로 출력
    }
    return 0;
}
