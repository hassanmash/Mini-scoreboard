function adminlogin() {
    if (document.getElementById("loginbtn").textContent == "Login") {
    var person = prompt("Username:","admin");
    if (person != null) {
        var password = prompt("Password:","adminpass");
    }
    if (person == "admin" && password == "adminpass") {
        var x = document.getElementById("adminonly");
        x.style.opacity = "1";
        var y = document.getElementById("loginbtn");
        y.innerHTML = "Logout";
    }
    } else {
        var x = document.getElementById("adminonly");
        x.style.opacity = "0";
        var y = document.getElementById("loginbtn");
        y.innerHTML = "Login";
    }
}

function submitfunc() {
    var rowlength = document.getElementById("t01").rows.length;
    for (var i = 0; i < rowlength; i++) {
        if (document.getElementById("t01").rows[i].cells[0].textContent == document.getElementById("addname").value) {
            x = parseInt(document.getElementById("t01").rows[i].cells[1].textContent);
            console.log(document.getElementById("t01").rows[i].cells[1].textContent);
            y = parseInt(document.getElementById("addvalue").value);
            console.log(document.getElementById("addvalue").value);
            var z = x + y;
            document.getElementById("t01").rows[i].cells[1].innerHTML = z;
            break;
        }
        if (i == (rowlength-1)) {
            alert("Name not found!")
        }
    }
    document.getElementById("addname").value = "";
    document.getElementById("addvalue").value = "";
}