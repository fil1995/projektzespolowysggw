//ZMIENNE
var addBtn = document.querySelector("#przycisk");
var chc3Btn = document.querySelector("#przycisk4");
var block1Btn = document.querySelector("#blokuj1");
var block2Btn = document.querySelector("#blokuj2");
var block3Btn = document.querySelector("#blokuj3");
var block4Btn = document.querySelector("#blokuj4");
var block5Btn = document.querySelector("#blokuj5");
var plusBtn = document.querySelector("#plus");
var minusBtn = document.querySelector("#minus");
var gramBtn = document.querySelector("#gramBTN");
var loading = document.querySelector("#loading");
var ourTable = ['treflA', 'trefl2', 'trefl3', 'trefl4', 'trefl5', 'trefl6', 'trefl7', 'trefl8', 'trefl9', 'trefl10', 'treflJ', 'treflQ', 'treflK', 'pikA', 'pik2', 'pik3', 'pik4', 'pik5', 'pik6', 'pik7', 'pik8', 'pik9', 'pik10', 'pikJ', 'pikQ', 'pikK', 'kierA', 'kier2', 'kier3', 'kier4', 'kier5', 'kier6', 'kier7', 'kier8', 'kier9', 'kier10', 'kierJ', 'kierQ', 'kierK', 'karoA', 'karo2', 'karo3', 'karo4', 'karo5', 'karo6', 'karo7', 'karo8', 'karo9', 'karo10', 'karoJ', 'karoQ', 'karoK'];
//var cards = [1, 2, 35, 23, 42, 21, 34, 15, 12, 20];
var cards = [];  //karty z API
var cards1 = []; //Pierwsze rozdanie
var cards2 = []; //Drugie rozdanie
var il_zmian = 0;
var styleElem = document.head.appendChild(document.createElement("style"));
var i = 0;
var karta;
var amount=0;
var bet;
var Scards="";

//FUNKCJE
//Funkcja odkryj() - odkrywa karty
function odkryj() {
    "use strict";
    styleElem.innerHTML = ".flip-card::after {transform: rotateY(180deg);} .flip-card::before {transform: rotateY(360deg);}";
}

//Funkcja zakryj() - zakrywa karty
function zakryj() {
    "use strict";
    styleElem.innerHTML = "";
}

//funkcja anonimowa obługująca przycisk "WYMIEŃ" o id="przycisk4" - zakrywa, zamienia karty i odkrywa
chc3Btn.addEventListener("click", function () {
    "use strict";
    chc3Btn.disabled = 'true';
    block1Btn.disabled = 'true';
    block2Btn.disabled = 'true';
    block3Btn.disabled = 'true';
    block4Btn.disabled = 'true';
    block5Btn.disabled = 'true';
    zakryj();
    setTimeout(function () {
        for (i = 0; i < 5; i = i + 1) {
            if (i >= il_zmian) { cards2[i] = cards.shift(); }
            document.getElementById(ourTable[cards1[i] - 1]).id = ourTable[cards2[i] - 1];
            Scards += cards2[i];
            if (i < 4) { Scards += ", "; }
        }
    }, 500);
    setTimeout(function () {odkryj(); }, 1000);
    setTimeout(function () {
        //sprawdzam wygraną za pomocą JSON
        sprawdz(bet, Scards);
        console.log(Scards);
        console.log(cards2);
        setTimeout(function () {
            document.getElementById("wynik_tekst").innerHTML = "Stan Twojego konta zmienił się o " + amount; 
            document.getElementById("wygrana").style.display = "inline";
        }, 500);
    }, 2000);  
}, false);

//funkcja anonimowa obługująca przycisk "ROZDAJ" o id="przycisk1" - pobiera i wyświetla 5 kart z talii
addBtn.addEventListener("click", function () {
    "use strict";
   // pobierz();
	do
	{
		setTimeout(function () {console.log("czekaj"); }, 1000);
	} while (cards[9] <= 0)
    //setTimeout(function () {
        block1Btn.disabled = false;
        block2Btn.disabled = false;
        block3Btn.disabled = false;
        block4Btn.disabled = false;
        block5Btn.disabled = false;
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        addBtn.disabled = true;
        chc3Btn.disabled = false;
        bet = Number(stawka.innerHTML);

        var div = document.querySelector("#TRESC");
        for (i = 0; i < 5; i = i + 1) {
            karta = document.createElement("div");
            cards1[i] = cards.shift();
            karta.id = ourTable[cards1[i] - 1];
            karta.className = "flip-card";
            div.appendChild(karta);
        }
        setTimeout(function () {odkryj(); }, 500); 
   // }, 300);
}, false);

plusBtn.addEventListener("click", function () {
    "use strict";
    minusBtn.disabled = false;
    var stawka = document.getElementById("stawka");
    stawka.innerHTML = Number(stawka.innerHTML) + 1;
    if (Number(stawka.innerHTML) >= 10) {plusBtn.disabled = 'true'; }
}, false);

minusBtn.addEventListener("click", function () {
    "use strict";
    plusBtn.disabled = false;
    var stawka = document.getElementById("stawka");
    stawka.innerHTML = Number(stawka.innerHTML) - 1;
    if (Number(stawka.innerHTML) <= 1) {minusBtn.disabled = 'true'; }
}, false);

gramBtn.addEventListener("click", function () {
    "use strict";
    addBtn.disabled = false;
    if (Number(stawka.innerHTML) < 10) {plusBtn.disabled = false; }
    if (Number(stawka.innerHTML) > 1) {minusBtn.disabled = false; }
    cards = [];
    cards1 = [];
    cards2 = [];
    il_zmian = 0;
    i = 0;
    document.getElementById("wygrana").style.display = "none";
    $('div.flip-card').remove();
    zakryj();
	pobierz();
}, false);

function pobierz_grafike () {
    for (i = 0; i < ourTable.length; i = i + 1) {
        loading.id = ourTable[i];
    }
	pobierz();
}


//TEST
var wyp = document.getElementById("wypisz2");
wyp.addEventListener("click", function () {
    "use strict";
    cards2.forEach(function (el, i) {
        document.getElementById("wypisz").innerHTML += ('Miejsce numer ' + i + ': ' + el + "\n");
    });
}, false);
//TEST

//PRZYCISKI BLOKUJ
block1Btn.addEventListener("click", function () {
    "use strict";
    cards2.push(cards1[0]);
    block1Btn.disabled = "true";
    il_zmian = il_zmian + 1;
}, false);
block2Btn.addEventListener("click", function () {
    "use strict";
    cards2.push(cards1[1]);
    block2Btn.disabled = "true";
    il_zmian = il_zmian + 1;
}, false);
block3Btn.addEventListener("click", function () {
    "use strict";
    cards2.push(cards1[2]);
    block3Btn.disabled = "true";
    il_zmian = il_zmian + 1;
}, false);
block4Btn.addEventListener("click", function () {
    "use strict";
    cards2.push(cards1[3]);
    block4Btn.disabled = "true";
    il_zmian = il_zmian + 1;
}, false);
block5Btn.addEventListener("click", function () {
    "use strict";
    cards2.push(cards1[4]);
    block5Btn.disabled = "true";
    il_zmian = il_zmian + 1;
}, false);


function pobierz () {
    $.ajax({
    // adres URL żądania
    url : 'http://kasynobackend-wygoda.rhcloud.com/backend/game',
  
    // dane, które mają zostać wysłane
    // (zostaną przekształcone na łańcuch zapytania)
    data : {
        password : "OstryZBaraninaNaC13nk1m!",
        function : "poker"
    },
  
    // określamy typ żądania — POST lub GET
    type : 'POST',
  
    // typ danych, jaki chcemy otrzymać
    dataType : 'json',
  
    //kod, który ma zostać wykonany jeśli żądanie się powiedzie;
    // odpowiedź jest przekazywana do funkcji
    success : function(data) {
        jQuery.each(data, function(i, ob) {
            console.log(i, ob); });
        cards = data.cards;
    },
  
    // kod, który ma zostać wykonany jeśli żądanie się nie powiedzie;
    // nieprzetworzone żądanie oraz kody stanu są
    // przekazywane do funkcji
    error : function(xhr, status) {
        "use strict";
       //alert('Przepraszamy, wystąpił problem!');
    },
  
    // kod, który ma zostać wykonany bez względu na to, czy żądanie zostało zakończone powodzeniem, czy nie
    complete : function(xhr, status) {
        "use strict";
        //alert('Żądanie wykonane!');
    }
    });
}

function sprawdz (bet, Scard) {
    $.ajax({
    // adres URL żądania
    url : 'http://kasynobackend-wygoda.rhcloud.com/backend/check',
  
    // dane, które mają zostać wysłane
    // (zostaną przekształcone na łańcuch zapytania)
    data : {
        //password : "OstryZBaraninaNaC13nk1m!",
        function : "poker",
        betamount: bet,
        counter: "1",
        cards: Scard,
        username: "test23",
        userPassword: "testpass"
    },
  
    // określamy typ żądania — POST lub GET
    type : 'POST',
  
    // typ danych, jaki chcemy otrzymać
    dataType : 'json',
  
    //kod, który ma zostać wykonany jeśli żądanie się powiedzie;
    // odpowiedź jest przekazywana do funkcji
    success : function(data) {
        jQuery.each(data, function(i, ob) {
            console.log(i, ob); });
        amount = data.amount;
    },
  
    // kod, który ma zostać wykonany jeśli żądanie się nie powiedzie;
    // nieprzetworzone żądanie oraz kody stanu są
    // przekazywane do funkcji
    error : function(xhr, status) {
        "use strict";
       alert('Przepraszamy, wystąpił problem!');
    },
  
    // kod, który ma zostać wykonany bez względu na to, czy żądanie zostało zakończone powodzeniem, czy nie
    complete : function(xhr, status) {
        "use strict";
        //alert('Żądanie wykonane!');
    }
    });
}