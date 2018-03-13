<!doctype html>
<html>
    <head>
        
    </head>
    
    <body>
        <form action="/sendmailform.php" method="post">
        <fieldset style="width: 400px">
            <legend>Myform</legend>
            <label>Imię:</label><br/>
            <input type="text" name="firstname" placeholder="Imię"><br/>
            <label>Nazwisko:</label><br/>
            <input type="text" name="lastname" placeholder="Nazwisko"><br/>
            <label>Email:</label><br/>
            <input type="email" name="email" placeholder="Email"><br/>
            <label>Płeć:</label><br/>
            <label><input type="radio" name="plec">Mężczyzna</label><br/>
            <label><input type="radio" name="plec">Kobieta</label><br/>
            <label>Wiadomość:</label><br/>
            <textarea name="message" placeholder="Twoja wiadomość"></textarea><br/>
            <label><input type="checkbox">Chcę się zapisać do newslettera</label><br/>
            <input type="submit" value="Wyslij">
        </fieldset>  
        </form>
    </body>
</html>