document.addEventListener("DOMContentLoaded", function () {
  const emailform = document.getElementById("emailform");
  const emailInput = document.getElementById("emailInput");
  const message = document.getElementById("message");

  emailform.addEventListener("submit", function (e) {
    e.preventDefault(); // iska matlab samaj nhi aaya
    const newvalue = emailInput.value.trim();
    if (
      newvalue === "" ||
      !newvalue.includes("@") ||
      !newvalue.includes(".com")
    ) {
      message.textContent = "plz enter a valid email";
      message.style.color = "red";
    } else {
      message.textContent = "email entered successfully!";
      message.style.color = "green";
    }
  });
});
