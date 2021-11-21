function smartsub(num1,num2){
    if(num1>num2){
        return num1-num2;

    }
    else {
 return num2-num1;
    }
//   return num1>num2?num1-num2:num2-num1  

}
console.log(smartsub(20,40));
var smartSub=(num1,num2)=>num1>num2?num1-num2:num2-num1
console.log(smartSub(10,20));