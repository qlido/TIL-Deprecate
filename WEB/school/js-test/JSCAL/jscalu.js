var num1 = parseInt(myform.txt1.value);
var num2 = parseInt(myform.txt2.value);
var ans = 0;
var str;

function calShow() {
    //공백체크
    if (myform.txt1.value === "") {
        alert("첫번째 숫자를 입력하세요.");
        myform.txt1.focus();
        return ;
    }
    // 두번째 숫자 입력 체크
    if (myform.txt2.value === "") {
        alert("첫번째 숫자를 입력하세요.");
        myform.txt2.focus();
        return ;
    }



    // 연산자 입력 체크

    if (myform.r_op.value === "") {
        alert("연산자를 입력하세요.");
        myform.txt2.focus();
        return ;
    }




    //변수 선언


    //결과 계산 - switch 문(myform.r_op.value)
    switch (myform.r_op.value){
        case "+" : ans = num1 + num2 ; break;
        case "-" : ans = num1 - num2 ; break;
        case "x" : ans = num1 * num2 ; break;//
        case "/" : ans = num1 / num2 ; break;//
    }

    //수식 포함 여부 체크되었을 때(myform.ck_eval.checked == true)
    if (myform.ck_eval.checked === true)
        str =  num1 +" "+ myform.r_op.value +" "+ num2 + " = " + ans; // 1 + 2 = 3 출력
    else
        str = ans ;

    document.getElementById("msg").innerHTML = str;
}

function clearShow() {
    myform.reset(); //myform.reset()
    document.getElementById("msg").innerHTML = "";
}
