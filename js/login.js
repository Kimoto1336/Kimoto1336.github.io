const loginForm =
document.getElementById(
"loginForm"
);

loginForm.addEventListener(
"submit",
(e)=>{

```
e.preventDefault();

const email =
document.getElementById(
  "email"
).value;

const password =
document.getElementById(
  "password"
).value;

const user =
JSON.parse(
  localStorage.getItem(
    "ibch_user"
  )
);

if(
  user &&
  user.email === email &&
  user.password === password
){

  alert(
    "Добро пожаловать!"
  );

  window.location.href =
    "profile.html";

}else{

  alert(
    "Неверный логин или пароль"
  );

}
```

});
