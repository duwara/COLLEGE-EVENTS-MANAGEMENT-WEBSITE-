function formValidation()
{
var uid = document.getElementById("userid");
var passid = document.getElementById("passid");
var vcour = document.getElementById("Course");
var ucou = document.getElementById("country");
var uzip = document.getElementById("zip");
var uemail = document.getElementById("email");
var uregister = document.getElementsByName("register");
if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(alphanumeric(vcour))
{
if(Courseselect(ucou))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validregister(uregister))
{
    setCookie();
} } } } } } }
}
function setCookie()
    {
        var info="Name="+ document.getElementById("userid").value+";"+"Email="+document.getElementById("email").value+";"+"Course="+document.getElementById("Course").value;
        document.cookie=info;
        document.write(document.cookie);
    }
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if(uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function alphanumeric(vcour)
{
var letters = /^[a-zA-Z]+$/;
if(vcour.value.match(letters))
{
return true;
}
else
{
alert('Please enter the course');
ucou.focus();
return false;
}
}
function Courseselect(ucou)
{
if(ucou.value == "Default")
{
alert('Select your country from the list');
ucou.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function validregister(uregister)
{
var isChecked = false;
for (var i = 0; i < uregister.length; i++) {
if (uregister[i].checked) {
isChecked = true; 
break;
}
}
if(isChecked==false)
{
alert("Select a registration type");
}
return isChecked;
}
function value()
{
    var v = document.getElementById("val");
    v.innerHTML=uid.value;
    var b = document.getElementById("cal");
    b.innerHTML=ucou.value;
    var m = document.getElementById("cal");
    m.innerHTML=uemail.value;
}
