// let regex1 = /[a-c]/
//ose
// let regex2 = new RegExp('[a-c]')

// let emri = "gerta"
// console.log(regex1.exec(emri))

// let text = "Gilan, Prishtine, Ferizaj";
// let result = text.match("an");
// console.log(result);

// let texti = "Genta";
// let resulti = texti.replace("n", "r");
// console.log(resulti)

// nese don me replace edhe naj shkronje tjt e bon replace all
// split per me nda ni fjale


function checkEmail() {
    let result = document.getElementById("result");
    let emailInput = document.getElementById("email").value;
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/.test(emailInput)) {
        result.innerHTML = "Email is valid";
        result.style.color = 'green';
    }
    else {
        result.innerHTML = "Email is invalid";
        result.style.color = 'red';
    }
}
