let outputScren = document.getElementById("output-screen");
function display(num){
    outputScren.value +=num;
}
function Calculate(){
                                   
try{
    outputScren.value = eval(outputScren.value);
}
catch(err)
{
 alert(Invalid)
}
 }
                            
function Clear(){
                                   
  outputScren.value = "";
       }
   function del(){
  outputScren.value =outputScren.value.slice(0,-1);
}
                    