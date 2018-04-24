
///////////////////////////////////////////// ZAD 3
var daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

var d = new Date();

var day = daysOfWeek[d.getDay()];
var month = months[d.getMonth()];
var dateOfBirth = new Date(1996, 12, 21, 15, 15, 38); // ustawiamy datę z przeszłości w formacie: YYYY, MM, DD, HH, MM, SS
var difference = d.getTime() - dateOfBirth.getTime(); // wynik jest w milisekundach
var age = Math.round(difference / 31556900000); // dzielone całkowicie przez liczbę milisekund w roku (przy założeniu, że to nie jest rok przestępny)
var date = d.toDateString();

var el = document.getElementById('paragraph-three');
el.innerHTML = 'Dzisiaj jest: ' + day + '.' + '<br />' + 'Aktualny miesiąc: ' + month + '.' + '<br />' + 'Mój wiek w latach to: ' + age + '.' + '<br />' + 'Data wyświetlona w momencie wywołania metody: ' + date + '.';

///////////////////////////////////////////// ZAD 4

var sentence = "Home sweet home";
var len = sentence.length;
var upper = sentence.toUpperCase();
var tenth = sentence.charAt(9);
var ee = sentence.indexOf('ee');
var last_e = sentence.lastIndexOf('e');
var eighttofourteen = sentence.substring(8, 15);
var nospace = sentence;
for (var i = 0; i < nospace.length; i++)
{
    if (nospace[i] == ' ')
    {
        var nospace = nospace.replace(' ','');
    }
}

var replace = sentence;
for (var i = 0; i < replace.length; i++)
{
    var replace = replace.replace('me','w');
}


var el2 = document.getElementById("paragraph-one");
el2.innerHTML = 'Nasz ciąg ma długość: ' + len + '. <br /> Jeśli zmienimy wszystkie znaki na wielkie ciąg będzie wyglądać tak: '
+ upper + '. <br />Na 10. pozycji znajduje się znak: ' + tenth + ". <br />Ciąg 'ee' znajduje się na miejscu: " + ee
+ ". <br />Ostatni indeks znaku 'e' to: " + last_e + '.<br />Znaki od 8 do 14 to: ' + eighttofourteen
+ '.<br />Po usunięciu niepotrzebnych spacji nasz ciąg wygląda tak: ' + nospace + ".<br /> Po zmianie 'me' na 'w' nasz ciąg wygląda tak: " + replace + ".";
