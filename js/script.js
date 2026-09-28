

function login()
{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const error=document.getElementById("error");

    if(email==="admin@1234" && password==="1234")
    {
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user",email);
        error.textContent="";
        location.href="index.html"; //redirect

    }
    else
    {
        error.textContent="Invalid username and password";
    }

}

function toggleLogin()
{
    const input=document.getElementById("password")

    if(input.type==="password")
    {
        input.type="text"
    }
    else
    {
        input.type="password"
    }
}

function toggleMenu()
{
    // menu contains ul
    const menu=document.getElementById("navMenu");
    const icon=document.getElementById("menuIcon");

    menu.classList.toggle("show")

    if(menu.classList.contains("show"))
    {
        icon.classList.add("fa-xmark");
        icon.classList.remove("fa-bars");
    }
    else
    {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    }


}


