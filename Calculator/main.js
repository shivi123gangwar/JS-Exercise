var viewer = document.getElementById("viewer");
console.log("++++", viewer.value);
    var num = document.querySelectorAll(".num");
   for(let i=0; i<num.length; i++){
       num[i].addEventListener("click",concat);
   }
var operator = document.querySelectorAll(".ops");
for(let j=0; j<operator.length; j++){
  operator[j].addEventListener("click", operatingEvent); 
}
 document.getElementById("equals").addEventListener("click", computeResult);
var firstNum, currentNum, secondNum;
viewer.value= 0;
function operatingEvent(event){  
currentNum = event.srcElement.innerHTML;
   
 viewer.value += currentNum ; 
    console.log("**********", viewer.value);
    
}
function concat(event){
currentNum = event.srcElement.innerHTML;
        if(viewer.value ==0 ){
        firstNum = currentNum;
        console.log("first number is" + " " +firstNum, "***"+" " + viewer.value);
    }
    else{
          firstNum += currentNum;
          console.log("**++++*"+" " + viewer.value);  
         console.log(firstNum);
    }
    
//    secondNum += currentNum;  
//         console.log("second number is" + " " + secondNum);
//    console.log(firstNum);
     
    if(!parseInt(viewer.value)){
        viewer.value = currentNum;
    }
    else{
       viewer.value += currentNum;  
    }
    
 
    
}

function computeResult(){
  secondNum =  currentNum;
    console.log("second number is" + " " + secondNum);
   var result = calcOperations.add(firstNum,secondNum);
	viewer.value = result;

  
}
 










////window.addEventListener("load",bindEvents);
////function bindEvents(){
//	var numButtons = document.getElementsByClassName("num");
//	for(let i = 0; i<numButtons.length; i++){
//		numButtons[i].addEventListener("click",concat);
//	}
//	var oprButtons = document.getElementsByClassName("ops");
//	for(let i = 0 ; i<oprButtons.length; i++){
//		oprButtons[i].addEventListener("click",operation);
//	}
//	document.getElementById("equals").addEventListener("click",computeResult);
////}
//	var txt = document.getElementById("viewer");
//var currentOperation ='';
//var firstNumber;
////var txtBlank = false;
//
//
//function concat(event){
//
////	if(txtBlank){
//		firstNumber = txt.value;
//		txt.value = '';
////		txtBlank = false;
////	}
//	var currentNumber = event.srcElement.innerHTML;
//	
//	if(!parseInt(txt.value)){
//		txt.value = currentNumber;
//	}
//	else{
//		txt.value = txt.value + currentNumber;
//	}
//	//console.log("Concat Call....");
//}
//function operation(event){
//	 currentOperation = event.srcElement.innerHTML;
////	txtBlank = true;
//	
//	
//}
//
//function computeResult(){
//	
//	var secondNumber = txt.value;
//	var result = calcOperations.add(firstNumber,secondNumber);
//	txt.value = result;
//}
