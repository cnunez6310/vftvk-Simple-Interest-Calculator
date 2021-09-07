function Computeint()
{
  //Principal validation
        if(amt.value == "")
         {
          alert("Amount can't be 0, please enter an amount");
          amt.focus();
          return false;
         }
         if(amt.value < -1)
         {
         alert("Amount can't be less than 0, please enter an positve amount");
          amt.focus();
          return false; 
         }
//grabing today's year and adding amount of years
         {
           year3 = (years * 1);
           var d = new Date();
           var n = d.getFullYear();
           var n1 = parseInt(years);
           var year2 =  (years*1)+n1;
         }
    amt = document.getElementById("amt").value;
    years = document.getElementById("years").value;
    rate = document.getElementById("rate").value;
    x1 = document.getElementById("x1");
    cantidad=document.getElementById("cantidad");
    total = document.getElementById("total");
    porcentaje = document.getElementById("porcentaje");
    cantidad.innerHTML="If you deposit " +amt;
    porcentaje.innerHTML="at an interest rate of " +rate +"%";
    total.innerHTML="You will receive an amount of   " + (amt*years*rate/100);
    x1.innerHTML="in the year " +year3;
}
        
