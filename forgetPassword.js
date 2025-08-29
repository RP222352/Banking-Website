function imgClick()
{
    window.location.href = "index.html";
}

const btn = document.getElementById('submit');

btn.addEventListener('click', function () {
    var fname = document.getElementById('Fname').value;
    var lname = document.getElementById('Lname').value;
    var acc = document.getElementById('accNo').value;
    var fullName = fname + " " + lname;
    
    if(acc.trim()==="" || fname.trim()==="")
    {
        alert("Enter Your Credentials First ")
    }
    else
    {
        alert("Your Name is -- "+fullName);
    }
});