#include <stdio.h>

int inputArray(int arr[]) {

    int i = 0, num, size;
    scanf("%d", &num);
    arr[0] = num;
    while (~scanf("%d", &num)) {
        i++;
        arr[i] = num;

    }
    size = i - 1;
    return size;
}

void printArray(int arr[], int size) {
    for (; size >= 0; size--) {
        printf("%d ", arr[size]);
    }
}

int main() {
    int a[100] = {0,};
    int size = inputArray(a);
    printArray(a, size);
}







