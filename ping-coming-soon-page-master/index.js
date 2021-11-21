const form = document.getElementById('user');
const email = document.getElementById('email');

function showError(){
     document.querySelector('.error-msg').style.display= "block";
}

form.addEventListener("submit" , function(e) {
      e.preventDefault();


if(email.validity.valueMissing || !email.validity.valid) {
      showError();
}else {
     this.Submit();
}
});
