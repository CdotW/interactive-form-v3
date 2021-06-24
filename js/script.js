const username = document.getElementById('name');
const activities = document.getElementById('activities');
const jobRole = document.querySelector('#title');
const otherJobRole = document.getElementById('other-job-role');
const color = document.getElementById('color');
const design = document.getElementById('design');
const total = document.getElementById('activities-cost');
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const email = document.getElementById('email');
const cardNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

username.focus();
//      "Job Role" section      \\
jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.visibility = 'visible';
    } else {
        otherJobRole.style.visibility = 'hidden';
    };
});
//      "T-Shirt Info" section      \\
color.disabled = true;
design.addEventListener('change', (e) => {
    color.disabled = false;
    for (let i = 1; i < color.children.length; i++) {
        const val = e.target.value;
        const dataTheme = color.children[i].getAttribute('data-theme');
        if (val === dataTheme) {
            color.children[i].hidden = false;
            color.children[i].setAttribute('selected', 'true');
        } else {
            color.children[i].removeAttribute('selected');
            color.children[i].hidden = true;
        };
    };
});
//      Total cost      \\
let totalCost = 0;
activities.addEventListener('change', (e) => {
    let dataCost = Number(e.target.getAttribute('data-cost'));
    if (e.target.checked) {
        totalCost += dataCost;
    } else {
        totalCost -= dataCost;
    }
    total.innerHTML= `Total: $${totalCost}`;
})
//      Payment Info        \\
paypal.hidden = true;
bitcoin.hidden = true;
payment.children[1].setAttribute('selected', 'true');
payment.addEventListener('change', (e) => {
    creditCard.hidden = true;
    paypal.hidden = true;
    bitcoin.hidden = true;
    document.getElementById(e.target.value).hidden = false;
});
const actInput = document.getElementsByTagName('input');
for (let i = 0; i < actInput.length; i++) {
    const inputCheck = actInput[i];
    // if (inputCheck.type === 'checkbox') {
        inputCheck.addEventListener('focus', (e) => {
        inputCheck.parentElement.classList.add('focus');
        });
        inputCheck.addEventListener('blur', (e) => {
        inputCheck.parentElement.classList.remove('focus');
        });
    // };
    
};
//      Form Validation     \\
form.addEventListener('submit', (e) => {
    // name not empty
    let name = username.value;
    let nameReg = /^[a-zA-Z]+$/;
    if (nameReg.test(name) === false) {
        username.parentElement.classList.add('not-valid');
        username.parentElement.classList.remove('valid');
        username.parentElement.lastElementChild.style.display = 'block';
        username.focus();
        e.preventDefault();
    } else {
        username.parentElement.classList.add('valid');
        username.parentElement.classList.remove('not-valid');
        username.parentElement.lastElementChild.style.display = 'none';
    }
    // email @ .com .net .org
    let em = email.value;
    let eReg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (eReg.test(em) === false) {
        email.parentElement.classList.add('not-valid');
        email.parentElement.classList.remove('valid');
        email.parentElement.lastElementChild.style.display = 'block';
        email.focus();
        e.preventDefault();
    } else {
        email.parentElement.classList.add('valid');
        email.parentElement.classList.remove('not-valid');
        email.parentElement.lastElementChild.style.display = 'none';
    }
    // activity at least one
    if (totalCost <= 0) {
        activities.classList.add('not-valid');
        activities.classList.remove('valid');
        activities.lastElementChild.style.display = 'block';
        e.preventDefault(); 
    } else {
        activities.classList.add('valid');
        activities.classList.remove('not-valid');
        activities.lastElementChild.style.display = 'none';
    }
    // Credit Card if and only if selected
    if (payment.value === 'credit-card') {
        let cardVal = cardNum.value;
        let cardReg = /^\d{13,16}$/;
        if (cardReg.test(cardVal) === false) {
        cardNum.parentElement.classList.add('not-valid');
        cardNum.parentElement.classList.remove('valid');
        cardNum.parentElement.lastElementChild.style.display = 'block';
        e.preventDefault(); 
        } else {
        cardNum.parentElement.classList.add('valid');
        cardNum.parentElement.classList.remove('not-valid');
        cardNum.parentElement.lastElementChild.style.display = 'none';
        }
    };
    //  Zip 5 digits
    let zipNum = zip.value;
    let zipReg = /^\d{5}$/;
    if (zipReg.test(zipNum) === false) {
        zip.parentElement.classList.add('not-valid');
        zip.parentElement.classList.remove('valid');
        zip.parentElement.lastElementChild.style.display = 'block';
        zip.focus();
        e.preventDefault();
    } else {
        zip.parentElement.classList.add('valid');
        zip.parentElement.classList.remove('not-valid');
        zip.parentElement.lastElementChild.style.display = 'none';
    }

    // CVV 3 didits
    let cvvNum = cvv.value;
    let cvvReg = /^\d{3}$/;
    if (cvvReg.test(cvvNum) === false) {
        cvv.parentElement.classList.add('not-valid');
        cvv.parentElement.classList.remove('valid');
        cvv.parentElement.lastElementChild.style.display = 'block';
        cvv.focus();
        e.preventDefault();
    } else {
        cvv.parentElement.classList.add('valid');
        cvv.parentElement.classList.remove('not-valid');
        cvv.parentElement.lastElementChild.style.display = 'none';
    }
});