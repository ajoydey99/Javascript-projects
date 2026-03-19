// validation script here
//let reg = /[a-z]/gi;

const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{10}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
};

//validation function
const validate = function (field, regex) {
  //test field value against regex pattern
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
};

//catch each input field
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
