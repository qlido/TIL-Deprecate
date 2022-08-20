#include <stdio.h>

int i,j,x,y,n,m;
int arr[100][100]={1};
int dy[4]={0,1,0,-1},dx[4]={1,0,-1,0};

int safe (int a, int b){return (0<=a && a<n)&&(0<=b && b<n);}
int main() {
    int ny, nx, cnt = 1;
    scanf("%d", &n);
    int s = n * n;
    while (s>cnt){
        ny = y+dy[i%4], nx=x+dx[i%4];
        if(safe(ny,nx) && !arr[ny][nx]){
            arr[ny][nx]=++cnt;
            y=ny,x=nx;
        } else i++;
    }
    for (i = 0 ; i<n;i++) {
        for (j = 0; j < n; j++)
            printf("%d ", arr[i][j]);
        printf("\n");
    }
    return 0;
}

