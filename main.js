let x = 10;
let y = 3;
let res = x + y;

let selS = document.querySelectorAll("#suma em");
selS[0].insertAdjacentText("beforeend", x);
selS[1].insertAdjacentText("beforeend", y);
selS[2].insertAdjacentText("beforeend", res);

// Significado
res = x + y;
document.querySelector("#suma").insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado Suma</b>
    </div>
    <hr>
    <div>
        <em>res = x + y;</em>
        <br>
        <mark>res</mark> : <em>${res}</em>
    </div>
`);

// Abreviado
x += y;
document.querySelector("#suma").insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado Suma</b>
    </div>
    <hr>
    <div>
        <em>x += y;</em>
        <br>
        <mark>x</mark> : <em>${x}</em>
    </div>
`);
/////////////////Resta/////////////

let a = 10;
let b = 3;
let resR = a - b;

let selR = document.querySelectorAll("#resta em");
selR[0].insertAdjacentText("beforeend", a);
selR[1].insertAdjacentText("beforeend", b);
selR[2].insertAdjacentText("beforeend", resR);

// Significado
resR = a - b;
document.querySelector("#resta").insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado Resta</b>
    </div>
    <hr>
    <div>
        <em>res = a - b;</em>
        <br>
        <mark>resR</mark> : <em>${resR}</em>
    </div>
`);

// Abreviado
a -= b;
document.querySelector("#resta").insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado Resta</b>
    </div>
    <hr>
    <div>
        <em>a -= b;</em>
        <br>
        <mark>a</mark> : <em>${a}</em>
    </div>
`);
/////////////////Multiplicación/////////////

let c = 10;
let d = 3;
let resM = c * d;

let selM = document.querySelectorAll("#multi em");
selM[0].insertAdjacentText("beforeend", c);
selM[1].insertAdjacentText("beforeend", d);
selM[2].insertAdjacentText("beforeend", resM);

// Significado
resM = c * d;
document.querySelector("#multi").insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado Multiplicación</b>
    </div>
    <hr>
    <div>
        <em>resM = c * d;</em>
        <br>
        <mark>resM</mark> : <em>${resM}</em>
    </div>
`);

// Abreviado
c *= d;
document.querySelector("#multi").insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado Multiplicación</b>
    </div>
    <hr>
    <div>
        <em>c *= d;</em>
        <br>
        <mark>c</mark> : <em>${c}</em>
    </div>
`);