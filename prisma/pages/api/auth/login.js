loginForm.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const response =
            await fetch(
                "/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        email:
                            email.value,

                        password:
                            password.value

                    })

                }
            );

        if (response.ok) {

            const user =
                await response.json();

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );

            window.location.href =
                "profile.html";

        }


    });
