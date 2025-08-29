function imgClick()
{
    window.location.href = "index.html";
}

const btn = document.getElementById('singUp');
const form = document.getElementById('form');
const singInBtn = document.getElementById('singInBtn');


singInBtn.addEventListener('click', () => {
    window.location.href = "index.html";
});

btn.addEventListener('click', (event) => {
    event.preventDefault();

    var fname = document.getElementById('fName').value;
    var lname = document.getElementById('lName').value;
    var number = document.getElementById('number').value;
    var mail = document.getElementById('mail').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var pin = document.getElementById('pin').value;
    var confirmPin = document.getElementById('Confirmpin').value;
    var genderMale = document.getElementById('male').checked;
    var genderFemale = document.getElementById('female').checked;
    var dob = document.getElementById('dob').value;
    var check = document.getElementById('check').checked;

    if (
        fname.trim() === '' ||
        lname.trim() === '' ||
        number.trim() === '' ||
        address.trim() === '' ||
        city.trim() === '' ||
        state.trim() === '' ||
        zip.trim() === '' ||
        pin.trim() === '' ||
        confirmPin.trim() === '' ||
        dob.trim() === '' ||
        (!genderMale && !genderFemale) ||
        !check)
    {
        alert('Please fill in all required fields.');
    } 
    else 
    {
        if((pin.length && confirmPin.length !==4))
        {
            alert("Oops.. Pin Should be Four Digits !..")
        }
        else
        {
            if (pin !== confirmPin) 
            {
            alert('Pin is not matching!!..');
            } 
            else 
            {
                var fullName = fname + ' ' + lname;
                var accNo = 0;
                const x = Math.floor(Math.random() * 10000) + 1;
                if (x > 999) 
                {
                    accNo = x;
                } 
                else 
                {
                    const x = Math.floor(Math.random() * 10000) + 1;
                    accNo = x;
                }
                alert('Your Name is -- ' + fullName + '\nYour Account Number is -- ' + accNo+"\nThank You for Choosing Us !!....");
                form.reset();
            }
        }
    }
});