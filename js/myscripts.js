let myHeading = document.querySelector('h1');
let btnChangeUser = document.getElementById("change-user");
let txtName = document.getElementById("txtName");

btnChangeUser.onclick = function(){
    let thename = txtName.value;
    myHeading.textContent = "Welcome to Jumia - " + thename;
    txtName.value = "";
}