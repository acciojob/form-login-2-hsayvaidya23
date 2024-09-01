//your JS code here. If required.
function  submitForm()  {
const fName = document.getElementById('fName').value;
const lName = document.getElementById('LName').value;
const mobile = document.getElementById('mobile').value;
const email = document.getElementById('emailID').value;
console.log(fName)

const alertMsg = `First Name: ${fName} Last Name: ${lName} Phone Number: ${mobile} Email ID: ${email}`;


	 alert(alertMsg);
}