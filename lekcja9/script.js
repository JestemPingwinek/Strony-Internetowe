"use strict";

// TODO: utwórz zmienną przechowującą stan licznika
    let licznik = 0;
    let items = ["Wojownik","Mag","Łucznik","Złodziej"];
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
function addPoint() {
    licznik += 1;
    document.getElementById("counter-display").textContent = licznik;
}
function reset() {
    licznik =0;
    document.getElementById("counter-display").textContent = licznik;
}

// TODO: utwórz tablicę z elementami do losowania
function kasyno() {
    let index = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[index];
}
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
