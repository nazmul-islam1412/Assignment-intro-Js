/** Problem 04 - (Delete / Store) */
//write your code here
var fileName= "pdfData.jpg";

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