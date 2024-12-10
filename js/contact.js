function Kontakt(event){
event.preventDefault()
let emri = document.getElementById("emri").value;
let mbiemri = document.getElementById("mbiemri").value;
let email = document.getElementById("email").value;
let koment = document.getElementById("koment").value;
let sms = document.getElementById("sms");

if(emri == "" || mbiemri == "" || email == "" || koment == ""){
sms.textContent = "*Fill all the fields"
sms.style.color = "red"
sms.style.fontFamily = "sun-serif"
}else{
    sms.textContent = "Thank you" +" " + emri + " " +mbiemri+ "!";
}
}