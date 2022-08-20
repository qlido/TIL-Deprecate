#include <stdio.h>

int arr[51][51],n,m,max,temp2,temp;
void input(){
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            scanf("%d",&arr[i][j]);
}
int safe (int a, int b){return (0<=a && a<n)&&(0<=b && b<n);}
int main(){
    scanf("%d %d",&n,&m);
    input();
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++) {
            temp = 0;
            temp += arr[i][j];
            temp2 = 0;
            temp2 += arr[i][j];
            for (int k = 1; k <= m; k++) {
                if (safe(i - k, j)) temp += arr[i - k][j];
                if (safe(i + k, j)) temp += arr[i + k][j];
                if (safe(i, j - k)) temp += arr[i][j - k];
                if (safe(i, j + k)) temp += arr[i][j + k];

                if (safe(i - k, j - k)) temp2 += arr[i - k][j - k];
                if (safe(i + k, j - k)) temp2 += arr[i + k][j - k];
                if (safe(i + k, j + k)) temp2 += arr[i + k][j + k];
                if (safe(i - k, j + k)) temp2 += arr[i - k][j + k];
            }
            max = max > ((temp > temp2) ? temp : temp2) ? max: (temp > temp2) ? temp : temp2;
        }
    }

    printf("%d",max);

    return 0;
}
/*
#include <stdio.h>

int main()
{
    int n, m, a[100][100], sum=0, cnt=0, result=0;

    scanf("%d %d", &n, &m);

    for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
            scanf("%d", &a[i][j]);
        }
    }

    for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
            for(int k=1; k<=m; k++){
                sum+=a[i][k];
                sum+=a[k][i];
            }
            for(int k=m; k>=1; k--){
                sum+=a[i][j-k];
                sum+=a[i-k][i];
            }

            for(int k=1; k<=m; k++){
                cnt+=a[i+1][j+k];
                cnt+=a[i+1][j-k];
            }
            for(int k=m; k>=1; k--){
                cnt+=a[i-1][j-k];
                cnt+=a[i-1][j+k];
            }
            if(sum>cnt){
                result = sum;
            } else {
                result = cnt;
            }
            sum=0, cnt=0;
        }
    }

    printf("%d", result);

}
*/