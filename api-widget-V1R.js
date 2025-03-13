// Nothing added yet
function displayForm() {
    const formContainer = document.getElementById("formContainer");
    
    // Create the form element
    const form = document.createElement("form");
    form.setAttribute("id", "userForm");

    // Create input fields for the form
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name: ";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("required", "true");

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email: ";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("required", "true");

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

    // Append label and inputs to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br")); // Add line break for clarity
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton);

    // Clear any previous content in formContainer and append the new form
    formContainer.innerHTML = '';
    formContainer.appendChild(form);

    // Optional: Handle form submission
    form.onsubmit = function(event) {
      event.preventDefault(); // Prevent actual form submission for demo purposes
      alert("Form submitted with Name: " + nameInput.value + " and Email: " + emailInput.value);
    }
  }