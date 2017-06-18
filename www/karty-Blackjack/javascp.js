//ZMIENNE
var styleElem = document.head.appendChild(document.createElement("style"));
var wynik = document.getElementById("wynik");
var wynikSpan = document.getElementById("wynikSpan");
var stawka = document.getElementById("zaklad");
var hitBtn = document.querySelector("#hitBTN");
var dDBtn = document.querySelector("#DDBTN");
var standBtn = document.querySelector("#standBTN");
var gramBtn = document.querySelector("#gramBTN");
var startBtn = document.querySelector("#startBTN");
var poczatektxt = document.getElementById("poczatekTekst");
var wygrana = document.getElementById("wynik");
var poczatek = document.getElementById("poczatek");
var stanKonta = document.querySelector("#stanKonta");
var betamount = document.querySelector("#betamount");
var ourTable = ['treflA', 'trefl2', 'trefl3', 'trefl4', 'trefl5', 'trefl6', 'trefl7', 'trefl8', 'trefl9', 'trefl10', 'treflJ', 'treflQ', 'treflK', 'pikA', 'pik2', 'pik3', 'pik4', 'pik5', 'pik6', 'pik7', 'pik8', 'pik9', 'pik10', 'pikJ', 'pikQ', 'pikK', 'kierA', 'kier2', 'kier3', 'kier4', 'kier5', 'kier6', 'kier7', 'kier8', 'kier9', 'kier10', 'kierJ', 'kierQ', 'kierK', 'karoA', 'karo2', 'karo3', 'karo4', 'karo5', 'karo6', 'karo7', 'karo8', 'karo9', 'karo10', 'karoJ', 'karoQ', 'karoK'];
//var cards = [1, 2, 35, 23, 42, 21, 34, 15, 12, 20];
var bank = [0];
var bankCards = [0]; 
var playerCards1 = []; //KARTY W PULI
var playerCards2 = [0, 0]; //[0] - ilość pobranych kart, [1] - suma wartości //KARTY NA STOLE
var repeatTable = new Array(53);
var i = 0;
var karta;
var zaklad = 0;
var div;
var wsk = 0;
var pcarda;
var pcardb;
var bcard;
var user = "test23";
var userpass = "testpass";
var splayer = "";
var sbank = "";
var amount = 0;

//FUNKCJE
//Funkcja odkryj() - odkrywa karty
function odkryj(id) {
    "use strict";
    styleElem.innerHTML += "#" + id + "::after {transform: rotateY(180deg);}\n#" + id + "::before {transform: rotateY(360deg);}\n";
}

//Funkcja zakryj() - zakrywa karty
function zakryj() {
    "use strict";
    styleElem.innerHTML = "";
}

function createStyle(idOrg, id) {
    "use strict";
    styleElem.innerHTML += "#" + id + "::before{\n background: url(images/" + idOrg + ".png);\n background-size: contain;\n background-repeat: no-repeat;\n }";
}

function przegrales() {
    "use strict";
    wynikSpan.innerHTML = "Przegrałeś " + zaklad + "$";
    wygrana.style.display = "block";
    stawka.disabled = true;
    hitBtn.disabled = true;
    dDBtn.disabled = true;
    standBtn.disabled = true;
}

function wygrales(kwota) {
    "use strict";
    wynikSpan.innerHTML = "Wygrałeś " + kwota + "$";
    wygrana.style.display = "block";
    plusBtn.disabled = true;
    stawka.disabled = true;
    minusBtn.disabled = true;
    hitBtn.disabled = true;
    dDBtn.disabled = true;
    standBtn.disabled = true;
}


function stand() {
    "use strict";
    hitBtn.disabled = true;
    dDBtn.disabled = true;
    standBtn.disabled = true;
    setTimeout(function () { odkryj(bcard);}, 300);
    div = document.querySelector("#bank");
    for (i = bankCards[0] + 1; i < bank.length + 1; i = i + 1) {
        (function(index) {
            setTimeout(function () {
                karta = document.createElement("div");
                repeatTable[bank[index-1]] = repeatTable[bank[index-1]] + 1;
                karta.id = ourTable[bank[index-1] - 1];
                bankCards[index] = bank[index-1];
                if (repeatTable[bank[index-1]] > 1) {
                    karta.id = karta.id + repeatTable[bank[index-1]];
                    createStyle(ourTable[bankCards[index] - 1], karta.id);
                }
                karta.className = "flip-card";
                div.appendChild(karta);
                (function(karta) {
                    setTimeout(function () {
                        odkryj(karta.id);
                    }, 500);
                })(karta);    
            },(i-2) * 700);
        })(i);
    }
    for(i = 0; i < bank.length ; i = i + 1){
        sbank += bank[i];
        if (i < bank.length - 1) { sbank += ", "; }
    }
    for(i = 0; i < playerCards2.length ; i = i + 1){
        splayer += playerCards2[i];
        if (i < playerCards2.length - 1) { splayer += ", "; }
    }
    sprawdz(zaklad, splayer, sbank, user, userpass); 
}


    
function hit() {
    "use strict";
    div = document.querySelector("#player");
    karta = document.createElement("div");
    wsk = playerCards2[0];
    playerCards2[0] = playerCards2[0] + 1;
    playerCards2[1] = playerCards2[1] + (playerCards1[wsk] % 13);
    playerCards2[wsk + 2] = playerCards1[wsk];
    repeatTable[playerCards1[wsk]] = repeatTable[playerCards1[wsk]] + 1;
    karta.id = ourTable[playerCards2[wsk + 2] - 1];
    if (repeatTable[playerCards1[wsk]] > 1) {
        karta.id = karta.id + repeatTable[playerCards1[wsk]];
        createStyle(ourTable[playerCards2[wsk + 2] - 1], karta.id);
    }
    karta.className = "flip-card";
    div.appendChild(karta);
    setTimeout(function () {
        odkryj(karta.id);
    }, 500);
    if (playerCards2[0] >= 8) {
        hitBtn.disabled = true;
        dDBtn.disabled = true;
    }
    if (playerCards2[1] > 21) {
        przegrales();
        for(i = 0; i < bank.length ; i = i + 1){
            sbank += bank[i];
            if (i < bank.length - 1) { sbank += ", "; }
        }
        for(i = 0; i < playerCards2.length ; i = i + 1){
            splayer += playerCards2[i];
            if (i < playerCards2.length - 1) { splayer += ", "; }
        }
        przegrana(zaklad, splayer, sbank, user, userpass); 
    }
}

hitBtn.addEventListener("click", function () {
    "use strict";
    hit();
}, false);

standBtn.addEventListener("click", function () {
    "use strict";
    stand();
}, false);


dDBtn.addEventListener("click", function () {
    "use strict";
    zaklad = zaklad * 2;
    hit();
    stawka.innerHTML = zaklad;
    stanKonta.innerHTML = Number(userData[2]) - zaklad;
    stand();
}, false);

startBtn.addEventListener("click", function () {
    "use strict";
    zaklad = betamount.value;
    if(zaklad > 0 && zaklad < Number(userData[2])){
        stawka.innerHTML = zaklad;
        stanKonta.innerHTML = Number(userData[2]) - zaklad;
        poczatektxt.style.color = 'white';
        poczatek.style.display = 'none';
        poczatektxt.innerHTML = "WPISZ STAWKĘ"
        START();
        hitBtn.disabled = false;
        dDBtn.disabled = false;
        standBtn.disabled = false;
    }else{
        poczatektxt.innerHTML = "BŁĄD! SPRÓBUJ PONOWNIE";
        poczatektxt.style.color = 'red';
    }
    
    
}, false);

gramBtn.addEventListener("click", function () {
    "use strict";
    i = 0;
    bank = []
    bank = [0];
    bankCards = []
    bankCards = [0]; 
    playerCards1 = []; //KARTY W PULI
    playerCards2 = [];
    playerCards2 = [0, 0]; //[0] - ilość pobranych kart, [1] - suma wartości //KARTY NA STOLE
    repeatTable = new Array(53);
    wsk = 0;
    splayer = "";
    sbank = "";
    amount = 0;
    wygrana.style.display = "none";
    $('div.flip-card').remove();
    zakryj();
    pobierz();
    hitBtn.disabled = false;
    dDBtn.disabled = false;
    standBtn.disabled = false;
}, false);


//JSON
function pobierz() {
    "use strict";
    $.ajax({
        // adres URL żądania
        url : 'http://kasynobackend-wygoda.rhcloud.com/backend/game',
  
        // dane, które mają zostać wysłane
        // (zostaną przekształcone na łańcuch zapytania)
        data : {
            password : "OstryZBaraninaNaC13nk1m!",
            function : "blackjack"
        },
  
        // określamy typ żądania — POST lub GET
        type : 'POST',
  
        // typ danych, jaki chcemy otrzymać
        dataType : 'json',
  
        //kod, który ma zostać wykonany jeśli żądanie się powiedzie;
        // odpowiedź jest przekazywana do funkcji
        success : function (data) {
            bank = data.bank;
            playerCards1 = data.player;
            getUser(user, userpass);
            poczatek.style.display = 'block';
            stawka.innerHTML = 0;
        },
  
        // kod, który ma zostać wykonany jeśli żądanie się nie powiedzie;
        // nieprzetworzone żądanie oraz kody stanu są
        // przekazywane do funkcji
        error : function (xhr, status) {
            alert('Przepraszamy, wystąpił problem! Prosimy odśwież stronę.');
        },
  
        // kod, który ma zostać wykonany bez względu na to, czy żądanie zostało zakończone powodzeniem, czy nie
        complete : function (xhr, status) {
            //alert('Żądanie wykonane!');
        }
    });
}

function sprawdz (bet, SPlayerCards, SBankCards, user, userPass) {
    $.ajax({
    // adres URL żądania
    url : 'http://kasynobackend-wygoda.rhcloud.com/backend/check',
  
    // dane, które mają zostać wysłane
    // (zostaną przekształcone na łańcuch zapytania)
    data : {
        //password : "OstryZBaraninaNaC13nk1m!",
        function : "blackjack",
        betamount: bet,
        bank: SBankCards,
        player: SPlayerCards,
        username: user,
        userPassword: userPass
    },
  
    // określamy typ żądania — POST lub GET
    type : 'POST',
  
    // typ danych, jaki chcemy otrzymać
    dataType : 'json',
  
    //kod, który ma zostać wykonany jeśli żądanie się powiedzie;
    // odpowiedź jest przekazywana do funkcji
    success : function(data) {
        amount = data.amount;
        if (amount > 0) {
            wygrales(amount);
        }else{
            przegrales();
        }
        getUser(user, userPass);
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

function przegrana (bet, SPlayerCards, SBankCards, user, userPass) {
    $.ajax({
    // adres URL żądania
    url : 'http://kasynobackend-wygoda.rhcloud.com/backend/check',
  
    // dane, które mają zostać wysłane
    // (zostaną przekształcone na łańcuch zapytania)
    data : {
        //password : "OstryZBaraninaNaC13nk1m!",
        function : "blackjack",
        betamount: bet,
        bank: SBankCards,
        player: SPlayerCards,
        username: user,
        userPassword: userPass
    },
  
    // określamy typ żądania — POST lub GET
    type : 'POST',
  
    // typ danych, jaki chcemy otrzymać
    dataType : 'json',
  
    //kod, który ma zostać wykonany jeśli żądanie się powiedzie;
    // odpowiedź jest przekazywana do funkcji
    success : function(data) {
        getUser(user, userPass);
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

function getUser (user, userPass) {
    $.ajax({
    // adres URL żądania
    url : 'http://kasynobackend-wygoda.rhcloud.com/backend/user',
  
    // dane, które mają zostać wysłane
    // (zostaną przekształcone na łańcuch zapytania)
    data : {
        //password : "OstryZBaraninaNaC13nk1m!",
        function : "getUser",
        username: user,
        userPassword: userPass
    },
  
    // określamy typ żądania — POST lub GET
    type : 'POST',
  
    // typ danych, jaki chcemy otrzymać
    dataType : 'json',
  
    //kod, który ma zostać wykonany jeśli żądanie się powiedzie;
    // odpowiedź jest przekazywana do funkcji
    success : function(data) {
        userData = data.user.split(", ");
	    stanKonta.innerHTML=Number(userData[2]);
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


function START() {
    "use strict";
    do
	{
		setTimeout(function () {console.log("WAIT!"); }, 1000);
	} while (bank[0] == -1)
        
    for (i = 0; i < 53; i = i + 1) {
        repeatTable[i] = 0;
    }
        div = document.querySelector("#bank");
        for (i = 0; i < 2; i = i + 1) {
            karta = document.createElement("div");
            bankCards[0] = bankCards[0] + 1;
            bankCards[i + 1] = bank[i];
            repeatTable[bank[i]] = repeatTable[bank[i]] + 1;
            karta.id = ourTable[bankCards[i + 1] - 1];
            if (repeatTable[bank[i]] > 1) {
                karta.id = karta.id + repeatTable[bank[i]];
                createStyle(ourTable[bankCards[i + 1] - 1], karta.id);
            }
            karta.className = "flip-card";
            div.appendChild(karta);
            if (i == 1) { bcard = karta.id; }
        }
        div = document.querySelector("#player");
        for (i = 0; i < 2; i = i + 1) {
            karta = document.createElement("div");
            playerCards2[0] = playerCards2[0] + 1;
            playerCards2[1] = playerCards2[1] + (playerCards1[i] % 13);
            playerCards2[i + 2] = playerCards1[i];
            repeatTable[playerCards1[i]] = repeatTable[playerCards1[i]] + 1;
            karta.id = ourTable[playerCards2[i + 2] - 1];
            if (repeatTable[playerCards1[i]] > 1) {
                karta.id = karta.id + repeatTable[playerCards1[i]];
                createStyle(ourTable[playerCards2[i + 2] - 1], karta.id);
            }
            karta.className = "flip-card";
            div.appendChild(karta);
            if (i == 0) { pcarda = karta.id; } else { pcardb = karta.id; }
        }
    setTimeout(function () {
        odkryj(pcarda);
        odkryj(pcardb);
        odkryj(ourTable[Number(bankCards[1]) - 1]);
    }, 1000);
}
