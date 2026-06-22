registerForm.addEventListener(
    "submit",
    async (e) => {


        e.preventDefault();

        const response =
            await fetch(
                "/api/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        nickname:
                            nickname.value,

                        email:
                            email.value,

                        password:
                            password.value

                    })
                }
            );

        if (response.ok) {

            alert(
                "Аккаунт создан"
            );

            window.location.href =
                "login.html";

        }


    });
