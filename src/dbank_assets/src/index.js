import {dbank} from "../../declarations/dbank";

window.addEventListener("load", update());
document.querySelector("form").addEventListener("submit",async function(event){
  event.preventDefault();
  let button=document.querySelector("#submit-btn");
  let added =parseFloat(document.getElementById("input-amount").value);
  let withdrown = parseFloat(document.getElementById("withdrawal-amount").value);
  button.setAttribute("disabled","true");
  if(document.getElementById("input-amount").value.length != 0){
    await dbank.topUp(added);
  }
 if(document.getElementById("withdrawal-amount").value.length != 0){
  await dbank.withDraw(withdrown);
  
  
}
  await dbank.compoundInterest();
  button.removeAttribute("disabled");
  document.getElementById("input-amount").value="";
  document.getElementById("withdrawal-amount").value="";
  update();
})
async function update(){
  let balance = await dbank.readValue();
  balance =Math.round(balance*100)/100;
  document.querySelector("#value").textContent=balance;
}