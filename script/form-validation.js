let user = JSON.parse(sessionStorage.getItem("userdata"));
document.getElementById("user-name").value = user.name;
document.getElementById("user-email").value = user.email;
document.getElementById("user-age").value = user.age;
document.getElementById("user-phone").value = user.phone;
document.getElementById("first-find-us").value = user.find;

//function for form validation
function validateForm() {
  user = {
    name: document.forms["contact-form"]["user-name"].value,
    email: document.forms["contact-form"]["user-email"].value,
    age: document.forms["contact-form"]["user-age"].value,
    phone: document.forms["contact-form"]["user-phone"].value,
    find: document.forms["contact-form"]["first-find-us"].value,
  };

  sessionStorage.setItem("userdata", JSON.stringify(user));

  if (
    //checking if the mandatory fields are empty
    user.name === "" ||
    user.email === "" ||
    user.age === "" ||
    user.phone === "" ||
    user.find === "Please choose one."
  ) {
    alert("Empty fields. Please fill up all the mandatory fields");
  } else if (
    //validating email
    !user.email.includes("@") ||
    !user.email.includes(".")
  ) {
    alert("Invalid email. Emails must contain a @ and .");
  } else if (
    //validating phone number
    user.phone.length !== 10 ||
    user.phone[0] !== "9" ||
    user.phone[1] !== "8"
  ) {
    alert(
      "Invalid phone number. Phone number must be 10 characters long and start with 98--"
    );
  } else {
    //appropriate message is displayed when all conditions are satisfied
    alert(`Thank you for contacting us, ${user.name}`);
  }
}
