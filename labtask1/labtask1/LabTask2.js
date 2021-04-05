document.getElementById("sign_form").onsubmit = function() {


    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    age = document.getElementById('age').value;
    email = document.getElementById('email').value;
    password = document.getElementById('pwd').value;
    CNIC_no = document.getElementById('CNIC').value;
    phone_number = document.getElementById('phone_number').value;
    url = document.getElementById('url').value;
    var submit = true;





    var FirstNameCheck = CheckFirstName(fname);
    var LastNameCheck = CheckLastName(lname);
    var ageCheck = checkAge(age);
    var passwordCheck = checkPassword(password);
    var cnicCheck = checkCNIC(CNIC_no);
    var EmailCheck = checkEmail(email)
    var phoneCheck = checkPhone(phone_number);
    var urlCheck = checkUrl(url);

    if (fname == "" && lname == "" && email == "" && password == "" && age == "" && url == "") {
        alert("Kindly fill the Form");
        submit = false;

    } else if (fname == "" || lname == "" || email == "" || password == "" || age == "" || url == "" || phone_number == "") {
        alert("Kindly Complete the Form");
        submit = false;

    } else {
        if (FirstNameCheck == 0) {
            alert("Inavlid First Name");
            submit = false;
            return
        }
        if (LastNameCheck == 0) {
            alert("Inavlid Last name");
            submit = false;

            return
        }
        if (EmailCheck == 0) {

            alert("Invalid Email");
            submit = false;

            return
        }

        if (urlCheck == 0) {
            alert("Blog's URL is Incorrect");
            submit = false;
            return
        }
        if (phoneCheck == 0) {
            alert("Invalid phone number");
            submit = false;
            return
        }
        if (cnicCheck == 0) {
            alert("Invaid CNIC number");
            submit = false;
            return
        }

        if (ageCheck == 0) {
            alert("Age must be in between 15 and 70");
            submit = false;
            return
        }


    }

    function checkCNIC(CNIC_no) {

        var check = 0
        var regex = new RegExp('[0-9]{5}-[0-9]{7}-[0-9]{1}')
        if (regex.test(CNIC_no)) {
            return check = 1
        } else {
            return check = 0
        }


    }

    function checkPassword(password) {
        var check = 0
        var regex = new RegExp("(?=.[a-z]{2})(?=.[A-Z])(?=.[0-9]{2})(?=.[!@#$%^&*)(-_]{2})");
        if (regex.test(password)) {
            return check = 1
        } else {
            return check = 0
        }
    }

    function checkEmail(email) {
        var check = 1;
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        if (re.test(email)) {
            check = 1;
            console.log(check);

        } else { check = 0 }
        return check;
    }

    function checkUrl(url) {
        var check = 0;


        var pattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');

        if (pattern.test(url)) {
            check = 1;

        } else {
            check = 0;
        }
        return check;

    }

    function checkPhone(phone_number) {

        var check = 0
        var regex = new RegExp('[0-9]{4}-[0-9]{7}')
        if (regex.test(phone_number)) {
            return check = 1
        } else {
            return check = 0
        }


    }


    function checkAge(age) {

        var check = 0;
        if (age >= 15 && age <= 70) {
            check = 1
        } else {
            check = 0


        }
        console.log(check)
        return check;

    }


    function CheckFirstName(fname) {

        var check = 1;
        for (i = 0; i <= fname.length - 1; i++) {
            var n = fname.charCodeAt(i);
            if (!((n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n == 32)) {
                check = 0
            }
        }
        return check;
    }





    function CheckLastName(lname) {

        var check = 0
        var length = lname.length
        for (i = 0; i <= length - 1; i++) {
            var n = lname.charCodeAt(i);

            if ((n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n == 32) {
                check = 1
            } else {
                check = 0
                break;
            }
        }
        return check;
    }



    return submit;

}