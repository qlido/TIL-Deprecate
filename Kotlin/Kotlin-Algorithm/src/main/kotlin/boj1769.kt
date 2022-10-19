fun main(){
    var num = readLine()!!.map { it -> it.toInt() - 48 }
    var count = 0
    while(num.size != 1){
            count++
        num = num.sum().toString().map { it -> it.toInt() - 48 }
    }
    println(count)
    println(when(num[0]){
        3,6,9 -> "YES"
        else -> "NO"
    })

}

