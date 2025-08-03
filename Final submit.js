/** Problem -01 ( Divide the Asset ) */
var area=800;
//write your code here
var shareForBoth=area/2;

console.log(shareForBoth);

/** Problem -02 ( Cycle or Laptop ) */
var money=10000;
//write your code here
if(money>=25000){
    console.log("Laptop");
}
else if(money>=10000 && money<25000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay=11;
//write your code here
for(i=1;i<=lastDay;i++){
    if(i%3==0){
        console.log(i+" "+"- medicine");
    }
    else{
        console.log(i+" "+"- rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.startsWith("#")){
    console.log("Store");
}
else if(fileName.endsWith(".pdf")){
    console.log("Store");
}
else if(fileName.endsWith(".docx")){
    console.log("Store");
}
else{
    console.log("Delete");
}