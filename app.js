function number(digit){
    var result=document.getElementById("result")
   result.value += digit;
}
function clearResult(){
    var clear=document.getElementById("result")
    result.value=""
}
function getResult(){
    var final=document.getElementById("result")
    result.value=eval(result.value)
}
function backSpace(){
    var str=document.getElementById("result").value;
    str=str.substr(0,str.length-1);
    document.getElementById("result").value=str;
    

}
