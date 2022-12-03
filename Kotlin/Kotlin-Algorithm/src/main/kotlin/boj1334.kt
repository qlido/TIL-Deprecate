import java.math.BigInteger


fun main() {
    val num = readLine()
    val result:String
    if(num!!.length == 1) result = one(num)
    else if(num.length %2 == 1) result = hol(num)
    else result = zzak(num)

    println(result)
}

fun hol(num:String):String{
    val result: String
    val front = num.slice(0 until num.length / 2)
    val end = num.slice(num.length/2+1 until num.length)
    var mid = num[num.length/2].toString()
    if(front.toBigInteger() > end.toBigInteger()){
        result = front + mid + front.reversed()
    }
    else {
        mid = (mid.toBigInteger().inc()).toString()
        result =  front + mid + front.reversed()
    }
    return result
}
fun zzak(num:String):String {
    val result:String
    var front = num.slice(0 until num.length / 2)
    val end = num.slice(num.length/2 until num.length)

    if(front.toBigInteger() > end.toBigInteger()){
        result = front + front.reversed()
    } else{
        val prelen = front.length
        front = (front.toBigInteger().inc()).toString()
        if(prelen != front.length)
            result = rehol(front+end)
        else
            result = front + front.reversed()

    }

    return result
}
fun rehol(num:String):String {
    val front = num.slice(0 until num.length / 2)
    val mid = num[num.length/2]

    return front+mid+front.reversed()
}
fun one(num: String):String {
    return (num.toInt() +1).toString()
}

