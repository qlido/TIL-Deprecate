#include <stdio.h>
#include <math.h>

int i, x, y, n;
//int arr[100][100]={1};
int dy[4] = {0, 1, 0, -1}, dx[4] = {1, 0, -1, 0};
int VX1, VX2, VY1, VY2, RX, RY;

int safe(int a, int b) { return (0 <= a && a < n) && (0 <= b && b < n); }

int main() {
    int ny, nx, cnt = 1, what, s, first, second;
    scanf("%d", &what);
    while (what) {
        int arr[300][300] = {1};
        scanf("%d %d %d", &n, &first, &second);
        s = n * n;
        cnt = 1, y = 0, x = 0, VX2 = 0;
        VX1 = 0, VY1 = 0;
        VY2 = 0;
        while (s > cnt) {

            ny = y + dy[i % 4], nx = x + dx[i % 4];
            if (safe(ny, nx) && !arr[ny][nx]) {
                arr[ny][nx] = ++cnt;
                y = ny, x = nx;
                if (cnt == first) {
                    VX1 = x;
                    VY1 = y;
                } else if (cnt == second) {
                    VX2 = x;
                    VY2 = y;
                }
            } else i++;
        }
        what--;
        RX = abs(VX1 - VX2);
        RY = abs(VY1 - VY2);
        if (RX == RY) {
            printf("YES\n");
        } else {
            printf("NO\n");
        }

    }

    return 0;
}

