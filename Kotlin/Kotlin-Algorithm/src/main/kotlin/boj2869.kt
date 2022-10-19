import java.io.BufferedReader
import java.io.InputStreamReader
import java.lang.Math.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    var a = br.readLine().split(" ").map { it -> it.toInt() }
    val c = abs(a[0] -  a[1])
    var cnt = (a[2]-a[0]) / c
    if((a[2]-a[0]) % (c) == 0 ) cnt +=1
    else cnt +=2
    println(cnt)
}
