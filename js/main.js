'use strict';

// Удаление всех символов из строки str кроме чисел
const getNumbers = (str) => str.replace(/\D+/g,"");

let name, sName, age, tel, email;

function nameOnChange(val) {
    console.log(val);
    name = val;

    
}

function sNameOnChange(val) {
    console.log(val);
    sName = val;

    
}

function ageOnChange(val) {
    console.log(val);
    age = val;

    
}

function telOnChange(val) {
    console.log(val);
    tel = val;

    
}

function emailOnChange(val) {
    console.log(val);
    email = val;

    
}

function btnOnClick() {
    console.log('name', name);
    console.log('sName', sName);
    console.log('age', age);
    console.log('tel', tel);
    console.log('email', email);

    console.log('type', typeof name );
        if (name === undefined ||  name.length < 2) {
            alert("n!!!");
            return;
        }

    console.log('type', typeof name );
        if (email === undefined ||  email.length < 2) {
            alert("@!!!");
            return;
        }

    console.log('type', typeof name );
        if (tel === undefined ||  tel.length < 2) {
            alert("t!!!");
            return;
        }
    console.log('type', typeof name );
        if (age === undefined ||  age.length < 2) {
            alert("a!!!");
            return;
        }

    console.log('type', typeof sName );
        if (sName === undefined ||  sName.length < 2) {
            alert("sn!!!");
            return;
        }
        
}