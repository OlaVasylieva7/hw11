const userForm = document.querySelector(".user__form");

userForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const userLogin = userForm.elements.login.value;
    const userPassword = userForm.elements.password.value;

    if (e.submitter.id === "submit__btn") {
        const formData = {
            userLogin,
            userPassword,
        }

        localStorage.setItem("userData", JSON.stringify(formData));

        alert("the user is registered");
    }

    if (e.submitter.id === "login__btn") {
        const formData = {
            userLogin,
            userPassword,
        }

        const savedData = localStorage.getItem("userData");

        if (JSON.stringify(formData) === savedData) {
            alert("wellcome!");
        } else {
            alert("user not found");
        }
    }

    userForm.reset();
}