<!doctype html>
<html>
    <head>
        <title>SEALCODE Warsztaty Webowe VanillaHellen</title>
		<meta charset="utf8_encode"/>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<link rel="stylesheet" type="text/css" href="style.css">
    </head>
    
    <body>
		<div class="row">
			<div class="column">
				<center><h2>Zaj1 - formularz</h2></center>
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
			</div>
			<div class="column">
			<center><h2>Zaj2 - loader</h2></center>
			<fieldset style="width: 400px; padding: 20px;">
			<legend>Loader</legend>
			<center><div class="loader"></center>
			</fieldset>
			</div>
		</div>
    </body>
</html>