<style>
    #ex4 {
        border: 1px solid black;
        padding: 1em;
    }
</style>

# Klausur SS 2020

Ein paar Lösungsvorschläge zur Klausur vom 20.02.2020 (unvollständig)

## Aufgabe 1

### c)

Der obige HTML-Code enthält ein `<script>`-Element mit einem TODO. Implementieren Sie stattdessen folgendes:

Navigieren Sie dazu zunächst per JavaScript mittels DOM-Scripting zum `<span>`-Element und ändern mit dessen Hilfe den umgebenden Satz ab in "You are not allowed to use this service." Den Fettdruck erzielen Sie durch programmatisches Ändern des Styles!

Fügen Sie sodann dem übergeordneten `<p>`-Element einen Link hinzu. Die URL des Links sei "secretArea.php", der Link-Text soll lauten: "Attention, access classified".

[Lösungsvorschlag](./aufgabe-01.html)

## Aufgabe 2

Schreiben Sie eine JavaScript-Funktion `vor9()`, die für ein als Parameter übergebenes Eingabefeld mit Zahlen ein neues Array zurückliefert, welches alle Werte aus dem Feld enthält, die **vor** der ersten **9** stehen, also z.B.:

`vor9([1, 2, 9, 1])` &rarr; `[1, 2]`

`vor9([3, 1, 8, 9])` &rarr; `[3, 1, 8]`

`vor9([1, 9, 9])` &rarr; `[1]`

`vor9([1, 7, 9823])` &rarr; `[1, 7, 9823]` // Zahl 9 muss alleine stehen

[(mehrere) Lösungsvorschläge](./aufgabe-02.js)

## Aufgabe 4

Stellen Sie die folgende Tabelle im JSON-Format dar!

<div id="ex4">

Hochschule Fulda

Leipziger Straße 123

36037 Fulda

Mitarbeiter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Durchwahl &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Zuständigkeit

D. Biezā &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3050 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AI-Support, Betreuung Software-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Labore, Lehre

C. Pape &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 379 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Betreuung WI-Labor, Virtualisierung
<br/>
<br/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dekanin: B. Bomsdorf

</div>
<br/>

[Lösungsvorschlag](./aufgabe-04.json)

## Aufgabe 6

Schreiben Sie eine Klasse `Rechteck`, die von `Form` erbt (letztere bitte auch schreiben). Jede Form hat ein Attribut `farbe` sowie die Methode `info()`. Rechtecke haben zusätzlich die Methode `flaeche()` und nehmen im Konstruktor Werte für `farbe`, `hoehe`, `breite`, `positionX` und `positionY` entgegen. Die Methode `flaeche()` gibt den errechneten
Flächeninhalt des Rechtecks zurück und die Methode `info()` schreibt die Art der Form, den Flächeninhalt und die Farbe in die Konsole.

Instanziieren Sie anschließend ein grünes Rechteck an Position (50, 100) mit der Breite 40 und der Höhe 30. Lassen Sie zudem noch den Flächeninhalt und die Farbe auf der Konsole ausgeben.

Hinweise: Es muss nichts auf ein Canvas gezeichnet werden und der Benutzer übergibt alle Variablen im korrekten Format – es ist also ausnahmsweise kein Error-Handling notwendig.

[Lösungsvorschlag](aufgabe-06.js)

## Aufgabe 7

Eine Website soll um ein Formular erweitert werden, mit dem man sich für eine LAN-Party anmelden kann. Zur Visualisierung ist unten der Screenshot eines ersten Prototyps gezeigt.

Implementieren Sie mit Ajax und Node.js eine Webanwendung, welche im Query-Parameter den Wert des Eingabefelds namens `name` (mit dem Namen des/der Angemeldeten) sowie den Wert des Eingabefelds namens `team` (mit dem Team, falls vorhanden) entgegennimmt und beides durch Semikolon getrennt an das Ende einer Datei `anmeldungen.txt` abspeicher (pro Anmeldung eine Zeile). Falls die Datei noch nicht existiert, soll sie erzeugt werden.

Nach dem Speichern soll auf der Website unterhalb der Buttons (ohne Neuladen der HTML-Seite) eine Nachricht erscheinen, dass man erfolgreich zur LAN-Party angemeldet wurde. Dabei muss diese Nachricht natürlich vom Server kommen.

Setzen Sie zunächst den _clientseitigen_ Teil um, wobei Sie lediglich den JavaScript-Code mit dem Ajax-Request (d.h. `XMLHttpRequest` oder `fetch()`) sowie die für die Programmierung nur absolut notwendigen HTML-Elemente aufzuschreiben brauchen.

[Lösungsvorschlag (clientseitig)](./aufgabe-07.html)

Ergänzen Sie für den serverseitigen Teil nun noch den folgenden JavaScript-Code.

Zur Erinnerung hier die Funktionen zum asynchronen Lesen und Schreiben von Dateien:

- `fs.readFile(file, callback)`
- `fs.appendFile(file, content, callback)`
- `fs.writeFile(file, content, callback)`

```javascript
const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer();
server.on("request", function (req, res) {
  // TODO
});
server.listen(8080);
```

[Lösungsvorschlag (Server)](./aufgabe-07-server.js)
