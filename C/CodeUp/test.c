
#include<stdio.h>


int main() {
    char a;

    while (~scanf("%c", &a)) {
        if (a >= 97 && a <= 122) {
            if (a + 3 < 123) {
                printf("%c", a + 3);
            }
            else if (a + 3 >= 123) {
                printf("%c", a - 23);
            }
        }
        if (a == ' ') {
            printf(" ");
        }

    }


    return 0;
}