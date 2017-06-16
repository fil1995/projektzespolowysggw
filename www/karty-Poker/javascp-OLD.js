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
var stanKonta = document.querySelector("#stanKonta");
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
var user = "test23";
var userPass = "testpass";
var userData = [];
var blockList = [0, 0 , 0, 0, 0]

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
    for (i = 0; i < 5; i = i + 1) {
        if(blockList[i] == 1){
            cards2.push(cards1[i]);
        }
    }
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
        sprawdz(bet, Scards, user, userPass);
        setTimeout(function () {
            document.getElementById("wynik_tekst").innerHTML = "Stan Twojego konta zmienił się o " + amount; 
            document.getElementById("wygrana").style.display = "inline-table";
            getUser(user, userPass);
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
	Scards = "";
    block1Btn.value = 0;
    block2Btn.value = 0;
    block3Btn.value = 0;
    block4Btn.value = 0;
    block5Btn.value = 0;
    block1Btn.innerHTML = "BLOKUJ";
    block2Btn.innerHTML = "BLOKUJ";
    block3Btn.innerHTML = "BLOKUJ";
    block4Btn.innerHTML = "BLOKUJ";
    block5Btn.innerHTML = "BLOKUJ";
    block1Btn.className = "blokuj";
    block2Btn.className = "blokuj";
    block3Btn.className = "blokuj";
    block4Btn.className = "blokuj";
    block5Btn.className = "blokuj";
    blockList = [0, 0, 0, 0, 0];
    document.getElementById("wygrana").style.display = "none";
    $('div.flip-card').remove();
    zakryj();
	pobierz();
    stanKonta.innerHTML=userData[2];
}, false);

function pobierz_grafike () {
    for (i = 0; i < ourTable.length; i = i + 1) {
        loading.id = ourTable[i];
    }
	pobierz();
    getUser(user, userPass);
    setTimeout(function () {stanKonta.innerHTML=userData[2]; }, 500);
}


//PRZYCISKI BLOKUJ
block1Btn.addEventListener("click", function () {
    "use strict";
    if(block1Btn.value == 0)
    {
        block1Btn.innerHTML = "ODBLOKUJ";
        il_zmian = il_zmian + 1;
        blockList[0] = 1;
        block1Btn.value = il_zmian;
        block1Btn.className = "odblokuj";
    }else{
        block1Btn.value = 0;
        il_zmian = il_zmian - 1;
        blockList[0] = 0;
        block1Btn.innerHTML = "BLOKUJ";
        block1Btn.className = "blokuj";
    }
    
}, false);
block2Btn.addEventListener("click", function () {
    "use strict";
    if(block2Btn.value == 0)
    {
        block2Btn.innerHTML = "ODBLOKUJ";
        il_zmian = il_zmian + 1;
        block2Btn.value = il_zmian;
        block2Btn.className = "odblokuj";
        blockList[1] = 1;
    }else{
        block2Btn.value = 0;
        il_zmian = il_zmian - 1;
        block2Btn.innerHTML = "BLOKUJ";
        block2Btn.className = "blokuj";
        blockList[1] = 0;
    }
}, false);
block3Btn.addEventListener("click", function () {
    "use strict";
    if(block3Btn.value == 0)
    {   
        block3Btn.innerHTML = "ODBLOKUJ";
        il_zmian = il_zmian + 1;
        block3Btn.value = il_zmian;
        block3Btn.className = "odblokuj";
        blockList[2] = 1;
    }else{
        block3Btn.value = 0;
        il_zmian = il_zmian - 1;
        block3Btn.innerHTML = "BLOKUJ";
        block3Btn.className = "blokuj";
        blockList[2] = 0;
    }
}, false);
block4Btn.addEventListener("click", function () {
    "use strict";
    if(block4Btn.value == 0)
    {    
        block4Btn.innerHTML = "ODBLOKUJ";
        il_zmian = il_zmian + 1;
        block4Btn.value = il_zmian;
        block4Btn.className = "odblokuj";
        blockList[3] = 1;
    }else{
        block4Btn.value = 0;
        il_zmian = il_zmian - 1;
        block4Btn.innerHTML = "BLOKUJ";
        block4Btn.className = "blokuj";
        blockList[3] = 0;
    }
}, false);
block5Btn.addEventListener("click", function () {
    "use strict";
    if(block5Btn.value == 0)
    {    
        block5Btn.innerHTML = "ODBLOKUJ";
        il_zmian = il_zmian + 1;
        block5Btn.value = il_zmian;
        block5Btn.className = "odblokuj";
        blockList[4] = 1;
    }else{
        block5Btn.value = 0;
        il_zmian = il_zmian - 1;
        block5Btn.innerHTML = "BLOKUJ";
        block5Btn.className = "blokuj";
        blockList[4] = 0;
    }
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

function sprawdz (bet, Scard, user, userPass) {
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