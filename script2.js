var input =document.getElementById('input');
var output =document.getElementById('output');
var btn =document.getElementById('button');

var from = document.getElementById("from");
var to = document.getElementById("to");

var p =document.getElementById('p');
var solution;
var footer=document.getElementById('footer');
var first=document.getElementById('first');
var rest=document.getElementById('rest');

first.addEventListener('click',function(e){
    first.innerHTML="Thank you for clicking";
    rest.style.display="inline";
})


btn.addEventListener('click',convert);

function convert(e){
   
    if(input.value==''){
    alert("Please enter a value");

}
   else{


if(from.options[from.selectedIndex].value==to.options[to.selectedIndex].value && from.options[from.selectedIndex].value!=0)
alert("Please pick 2 different Currency!");

   if(from.options[from.selectedIndex].value==0 || from.options[from.selectedIndex].value==0)
   {
       alert("No selection was Done..")
   }

  //1st
 if(from.options[from.selectedIndex].value==1 &&to.options[to.selectedIndex].value==2)
     solution=input.value*0.89+" Euro";
 
 if(from.options[from.selectedIndex].value==1 &&to.options[to.selectedIndex].value==3)
solution=input.value*111.51+" Japanese yen";

if(from.options[from.selectedIndex].value==1 &&to.options[to.selectedIndex].value==4)
solution=input.value*0.77+" Pound sterling";

if(from.options[from.selectedIndex].value==1 &&to.options[to.selectedIndex].value==5){
solution=input.value*1500+" Lebanese Pound";
console.log("im working");
}
//2nd
if(from.options[from.selectedIndex].value==2 &&to.options[to.selectedIndex].value==1)
solution=input.value*1.12+" US Dollar";

if(from.options[from.selectedIndex].value==2 &&to.options[to.selectedIndex].value==3)
solution=input.value*125.08+" Japanese yen";

if(from.options[from.selectedIndex].value==2 &&to.options[to.selectedIndex].value==4)
solution=input.value*0.86+" Pound sterling";

if(from.options[from.selectedIndex].value==2 &&to.options[to.selectedIndex].value==5)
solution=input.value*1693.36+" Lebanese Pound";
//3rd
if(from.options[from.selectedIndex].value==3 &&to.options[to.selectedIndex].value==1)
solution=input.value*0.0090+" US Dollar";

if(from.options[from.selectedIndex].value==3 &&to.options[to.selectedIndex].value==2)
solution=input.value*0.0080+" Euro";

if(from.options[from.selectedIndex].value==3 &&to.options[to.selectedIndex].value==4)
solution=input.value*0.0069+" Pound sterling";

if(from.options[from.selectedIndex].value==3 &&to.options[to.selectedIndex].value==5)
solution=input.value*13.54+" Lebanese Pound";
//4th
if(from.options[from.selectedIndex].value==4 &&to.options[to.selectedIndex].value==1)
solution=input.value*1.30+" US Dollar";

if(from.options[from.selectedIndex].value==4 &&to.options[to.selectedIndex].value==2)
solution=input.value*1.16+" Euro";

if(from.options[from.selectedIndex].value==4 &&to.options[to.selectedIndex].value==3)
solution=input.value*145.49+" Japanese yen" ;

if(from.options[from.selectedIndex].value==4 &&to.options[to.selectedIndex].value==5)
solution=input.value*1969.22+" Lebanese Pound";

//5th 

if(from.options[from.selectedIndex].value==5 &&to.options[to.selectedIndex].value==1)
solution=input.value*0.00066+" US Dollar";

if(from.options[from.selectedIndex].value==5 &&to.options[to.selectedIndex].value==2)
solution=input.value*0.00059+" Euro";

if(from.options[from.selectedIndex].value==5 &&to.options[to.selectedIndex].value==3)
solution=input.value*0.074+" Japanese yen";

if(from.options[from.selectedIndex].value==5 &&to.options[to.selectedIndex].value==4)
solution=input.value*0.00051+" Pound sterling";

if(solution !=undefined){
    output.style.display="block";
    p.style.display="block";
    output.removeAttribute("placeholder");
    output.value=solution;
    footer.style.marginTop="20px"

}
}


}