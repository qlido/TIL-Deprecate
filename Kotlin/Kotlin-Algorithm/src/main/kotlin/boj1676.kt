import java.util.Scanner

fun main(){
    val sc = Scanner(System.`in`)
    val num = sc.nextInt()
    var cnt = 0;
    for(i in 1..num){
        var j = i
        while (j%5==0){
            cnt++
            j/=5
        }

    }
    println(cnt)


}