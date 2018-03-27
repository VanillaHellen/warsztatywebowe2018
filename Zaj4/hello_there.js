console.log("Hello World!");

/*
---------------
FUNKCJE
---------------
function kot(){
	console.log("miaou");
};

function daj_glos(fnc) {
	fnc();
};

daj_glos(kot);

 MOZNA TEZ ZROBIC TAK:
function daj_glos(fnc) {
	fnc();
};

daj_glos(function kot(){
	console.log("miaou");
});

var x = 100;
function daj_glos2() {
	function licz_kot() {
		console.log(x);
	}
	licz_kot();
	var y = 200;
	console.log(x);
	console.log(y); //nie ma problemu z dostepem do zmiennych w funkcji, wiec wypisze i x, i y.
};

daj_glos2();
*/

/*
---------------
TABLICA
---------------
var psy = ["Burek"];
psy.push("Azor");
psy.push("Stefan");

console.log(psy);
console.log(psy.length);
console.log(psy[1]);

for(var i = 0; i< psy.length; i++) {
	console.log(psy.join(""));
}
*/

/*
---------------
OBIEKT
---------------
JSON - standard do przesyłania danych, JavaScript Object Notation


var psy = { pies_1: "Burek" };
psy.pies_2 = "Stefan";
psy["pies_3"] = "Azor";

// console.log(psy);


for (pies in psy) {
	console.log(psy[pies]);
}
*/

//---------ZAD X.1
/*
var kotki = [
	{ imie: "Rufus", poziom_slodkosci: 5, obraz: { url: "https://i.ytimg.com/vi/FHH6hIc2GyE/0.jpg" , rozmiar: "M"  }},
	{ imie: "Maciuś", poziom_slodkosci: 4, obraz: { url: "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782" , rozmiar: "M"  }},
	{ imie: "Ruzia", poziom_slodkosci: 8, obraz: { url: "https://i.pinimg.com/originals/5b/73/82/5b7382c685073fcebdac0e522af3883a.jpg" , rozmiar: "L"  }},
	{ imie: "Sebastian", poziom_slodkosci: 9, obraz: { url: "https://vallaura.files.wordpress.com/2015/12/sweet-cat-prayering-image.jpg" , rozmiar: "L"  }},
	{ imie: "Kajetan", poziom_slodkosci: 10, obraz: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomCRsvcTur_mvHS_aQbnITpo_4O4W_0kFpkNsRj_HuIEJFcLu" , rozmiar: "M"  }},
	{ imie: "Isia", poziom_slodkosci: 9, obraz: { url: "http://wlpapers.com/images/closeup-sweet-cat-photo-1.jpg" , rozmiar: "M"  }}
  ]

function wypisz_kotki(n) {
	if (n > kotki.length) {
		console.log('Podane n jest zbyt duże!');
	}
	else {
		for(var i = 0; i < n; i++) {
			kotek = kotki[i];
			console.log(kotek.imie + " - " + kotek.poziom_slodkosci + "\n" + kotek.obraz.url);
		}
	}
}
wypisz_kotki(5);
wypisz_kotki(0);
wypisz_kotki(12);
*/

//-------------ZAD X.2
var kotki = {
	kot_1:	{ imie: "Rufus", poziom_slodkosci: 5, obrazy: [{ url: "https://i.ytimg.com/vi/FHH6hIc2GyE/0.jpg" , rozmiar: "M"  }]},
	kot_2:	{ imie: "Maciuś", poziom_slodkosci: 4, obrazy: [{ url: "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782" , rozmiar: "M"  }]},
	kot_3:	{ imie: "Ruzia", poziom_slodkosci: 8, obrazy: [{ url: "https://i.pinimg.com/originals/5b/73/82/5b7382c685073fcebdac0e522af3883a.jpg" , rozmiar: "L"  }]},
	kot_4:	{ imie: "Sebastian", poziom_slodkosci: 9, obrazy: [{ url: "https://vallaura.files.wordpress.com/2015/12/sweet-cat-prayering-image.jpg" , rozmiar: "L"  }]},
	kot_5:	{ imie: "Kajetan", poziom_slodkosci: 10, obrazy: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomCRsvcTur_mvHS_aQbnITpo_4O4W_0kFpkNsRj_HuIEJFcLu" , rozmiar: "M"  }]},
	kot_6:	{ imie: "Isia", poziom_slodkosci: 9, obrazy: [{ url: "http://wlpapers.com/images/closeup-sweet-cat-photo-1.jpg" , rozmiar: "M"  }]}
}
  
function wypisz_kotki(n) {
	if (n > kotki.length) {
		console.log('Podane n jest zbyt duże!');
	}
	else {
		for(var i = 0; i < n; i++) {
			kotek = kotki[i];
			console.log(kotek.imie + " - " + kotek.poziom_slodkosci + "\n" + kotek.obraz.url);
		}
	}
}

//stagol@st.amu.edu.pl ~ EMAIL jednego z ziomków, tam piszemy wszelkie pytania itd