
window.onload = function () {
    var createAccountButton = document.getElementById('createAccount')
    var createAccountForm = document.getElementById('cardCreateAccount')
    var createAccountCheck = document.getElementById('policyCheck')
    var createButton = document.getElementById('create')

    createAccountButton.addEventListener('click', () => {
        createAccountForm.classList.toggle('d-none')
    })

    createAccountCheck.addEventListener('change', () => {
        console.log("createButton", createButton)

        var hasDisable = createButton.hasAttribute('disabled')

        if (hasDisable) {
            createButton.removeAttribute('disabled')
        } else {
            createButton.setAttribute('disabled', 'true')
        }

    })
};