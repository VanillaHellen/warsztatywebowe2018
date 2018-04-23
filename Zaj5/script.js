/*
function save_inputs(){
    var txt1 = document.getElementById("input_1").value
    var txt2 = document.getElementById("input_2").value

    var list = document.getElementsByTagName("ul")[0]
    var new_li = document.createElement("li")
    new_li.innerText = txt1 + " - " + txt2
    list.appendChild(new_li) 
}

function clicked_div(e) {
    var txt = "YOU TOUCHED THIS"
    var div = document.getElementById("clickable")
    var color = random_rgba()
    div.style.background = color
    div.innerHTML = "<center><h3>" + txt + "</h3></center>"
}

function change_clr(el) {
    el.style.background = random_rgba()
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var mdiv = document.getElementById("clickable")
mdiv.addEventListener("click", clicked_div)


var all_divs = document.getElementsByClassName("zad51")
for (var i = 0; i < all_divs.length; i++)
{
    all_divs[i].addEventListener("mouseover", change_clr(all_divs[i]))
}*/




//////////////////ZAD DOM
var kotki = [
    { imie: "Rufus", poziom_slodkosci: 5, obraz: { url: "https://i.ytimg.com/vi/FHH6hIc2GyE/0.jpg" , rozmiar: "M"  }},
    { imie: "Maciuś", poziom_slodkosci: 4, obraz: { url: "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782" , rozmiar: "M"  }},
    { imie: "Ruzia", poziom_slodkosci: 8, obraz: { url: "https://i.pinimg.com/originals/5b/73/82/5b7382c685073fcebdac0e522af3883a.jpg" , rozmiar: "L"  }},
    { imie: "Sebastian", poziom_slodkosci: 9, obraz: { url: "https://vallaura.files.wordpress.com/2015/12/sweet-cat-prayering-image.jpg" , rozmiar: "L"  }},
    { imie: "Kajetan", poziom_slodkosci: 10, obraz: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomCRsvcTur_mvHS_aQbnITpo_4O4W_0kFpkNsRj_HuIEJFcLu" , rozmiar: "M"  }},
    { imie: "Isia", poziom_slodkosci: 9, obraz: { url: "http://wlpapers.com/images/closeup-sweet-cat-photo-1.jpg" , rozmiar: "M"  }}
  ]

function showStats()
{
    var num = this.getAttribute("id");
    alert("Imię: " + kotki[num].imie + ", poziom słodkości: " + kotki[num].poziom_slodkosci + ".");
}

for (var i = 0; i < kotki.length; i++)
{
    var box = document.createElement("div");
    box.setAttribute("class", "kotek");
    box.setAttribute("id", i);
    var img = document.createElement("img");
    img.src = kotki[i].obraz.url;
    img.width = 500;
    box.appendChild(img);
    document.body.appendChild(box);
}

var kitties = document.getElementsByClassName("kotek");

for (var i =0; i < kitties.length; i++)
{
    kitties[i].addEventListener("click",showStats)
}