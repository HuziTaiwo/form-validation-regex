const form = document.querySelector("#validation");
const inputs = document.querySelectorAll("#validation input");
const message = document.querySelector(".msg");

const messages = [
  "Username must be alphanumeric (-, _ are also allowed) and can contain 4 - 20 characters",
  "Email must be a valid email email address, e.g. me@forexample.com",
  "Password must be alpanumeric (@, -, _, are also allowed) and be 8 - 20 characrers",
  "Telephone must be a valid (NGN) telephone number (11 dgits)",
];

// console.log(message);
const patterns = {
  username: /^[a-z\d-_]{4,20}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  password: /^[\w@-_]{8,20}$/,
  telephone: /^\d{11}$/,
};

const validate = (input, pattern, parent, msg) => {
  if (pattern.test(input.value)) {
    parent.className = "active";
    message.textContent = "";
  } else {
    parent.className = "inactive";
    message.textContent = msg;
  }
};

inputs.forEach((input, i) => {
  input.addEventListener("keyup", (e) => {
    validate(
      e.target,
      patterns[e.target.attributes.name.value],
      e.target.parentElement,
      messages[i]
    );
  });
});
