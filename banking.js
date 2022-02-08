// banking html
document.getElementById('deposit-submit').addEventListener('click', function(){
    const dAmount =document.getElementById('deposit-amount').value;
    const depositTotal=document.getElementById('d-money');
    // deposit money string to float convert
    const pAmount = parseFloat(depositTotal.innerText)
    //input deposit money string to float convert
     depositTotal.innerText= pAmount + parseFloat(dAmount);
//clear deposit input filed

document.getElementById('deposit-amount').value ="";
// deposit money add in main Balance
const banlance=document.getElementById('total-money');
//main Balance string to float convert
 const Bamount= parseFloat(banlance.innerText);
 banlance.innerText = Bamount + parseFloat(dAmount);


    });

 //handle withdrow amount 
  document.getElementById('withdraw-submit').addEventListener('click', function(){
     const wAmount =parseFloat(document.getElementById('withdraw-amount').value ) ;
     const WTotalAmount =parseFloat(document.getElementById('withdraw-money').innerText)
     document.getElementById('withdraw-money').innerText=wAmount + WTotalAmount;
     // withdraw  money minus form main Balance
     const banlance=document.getElementById('total-money');
//main Balance string to float convert
 const Bamount= parseFloat(banlance.innerText);
 banlance.innerText = Bamount -wAmount;

 //clear withdraw input filed

document.getElementById('withdraw-amount').value ="";

  })
    
  //test