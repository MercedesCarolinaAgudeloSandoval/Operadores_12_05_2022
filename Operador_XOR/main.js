let A = Number(prompt("Ingrese el valor de la variable A\n 0 = false\n 1 = true"));

document.querySelector("#operadorXOR").insertAdjacentHTML("beforeend", `
    <tr class="resultado">
        <td>${A}</td>
        <td>${!A}</td>
    </tr>
`);