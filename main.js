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

/////////////////Division/////////////

let e = 10;
let f = 3;
let resD = e / f;

let selD = document.querySelectorAll("#divi em");
selD[0].insertAdjacentText("beforeend", e);
selD[1].insertAdjacentText("beforeend", f);
selD[2].insertAdjacentText("beforeend", resD);

// Significado
resD = e / f;
document.querySelector("#divi").insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado División</b>
    </div>
    <hr>
    <div>
        <em>resD = e / f;</em>
        <br>
        <mark>resD</mark> : <em>${resD}</em>
    </div>
`);

// Abreviado
e /= f;
document.querySelector("#divi").insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado División</b>
    </div>
    <hr>
    <div>
        <em>e /= f;</em>
        <br>
        <mark>e</mark> : <em>${e}</em>
    </div>
`);


/////////////////Asignación Resto/////////////

let g = 10;
let h = 3;
let resAR = g % h;

let selAR= document.querySelectorAll("#restoA em");
selAR[0].insertAdjacentText("beforeend", g);
selAR[1].insertAdjacentText("beforeend", h);
selAR[2].insertAdjacentText("beforeend", resAR);

// Significado
resAR = g % h;
document.querySelector("#restoA").insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado Asignación Resto</b>
    </div>
    <hr>
    <div>
        <em>resD = g % h;</em>
        <br>
        <mark>resAR</mark> : <em>${resAR}</em>
    </div>
`);

// Abreviado
g %= h;
document.querySelector("#restoA").insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado Asignación Resto</b>
    </div>
    <hr>
    <div>
        <em>g %= h;</em>
        <br>
        <mark>g</mark> : <em>${g}</em>
    </div>
`);
/////////////////Asignación Operador Exponencial/////////////

let i = 10;
let j = 3;
let resExp = i ** j;

let selExp= document.querySelectorAll("#restoExp em");
selExp[0].insertAdjacentText("beforeend", i);
selExp[1].insertAdjacentText("beforeend", j);
selExp[2].insertAdjacentText("beforeend", resExp);

// Significado
resExp = i ** j;
document.querySelector("#restoA").insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado Operador Exponencial</b>
    </div>
    <hr>
    <div>
        <em>resD = i ** j;</em>
        <br>
        <mark>resExp</mark> : <em>${resExp}</em>
    </div>
`);

// Abreviado
i **= j;
document.querySelector("#restoExp").insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado Operador Exponencial</b>
    </div>
    <hr>
    <div>
        <em>i **= j;</em>
        <br>
        <mark>i</mark> : <em>${i}</em>
    </div>
`);
