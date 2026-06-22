const registerForm =
document.getElementById(
"registerForm"
);

registerForm.addEventListener(
"submit",
(e)=>{

```
e.preventDefault();

const user = {

  nickname:
  document.getElementById(
    "nickname"
  ).value,

  email:
  document.getElementById(
    "email"
  ).value,

  password:
  document.getElementById(
    "password"
  ).value

};

localStorage.setItem(
  "ibch_user",
  JSON.stringify(user)
);

alert(
  "Регистрация успешна!"
);

window.location.href =
  "login.html";
```

});
