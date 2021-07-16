let form = document.getElementById('signup')
        form.addEventListener('submit',(event) => {
            event.preventDefault()
            let inputFirstname = form.Firstname
            let inputLastname = form.Lastname
            let inputUsername = form.Username
            let inputPassword = form.password
            let inputEmail = form.email
            if (inputFirstname.value == ''){
                alert("Please insert your First name")
            }else if(inputLastname.value == ''){
                alert("Please insert your Last name")
            }else if(inputUsername.value == ''){
                alert('Please insert Username')
            }else if(inputEmail.value  == ''){
                alert("Please insert your email address ")
            }else if(inputPassword.value == ''){
                alert('Please insert your password')
               
            }else{
                alert('Success')
                document.getElementById('1').innerHTML = inputFirstname.value
                document.getElementById('2').innerHTML = inputLastname.value
                document.getElementById('3').innerHTML = inputUsername.value
                document.getElementById('4').innerHTML = inputPassword.value
                document.getElementById('5').innerHTML = inputEmail.value
            }
            
        })