<style>
  code {
    color: #050 !important;
  }
</style>

# Klausur Web-Applikationen WS 2022/2023

<br/>

Name:

<br/>

Matrikelnummer:

<br/><br/><br/>

| Aufgabe  | -1- | -2- | -3- | -4- | -5- | -6- | -7- |
| -------- | --- | --- | --- | --- | --- | --- | --- |
| Punkte   | 23  | 11  | 8   | 23  | 4   | 5   | 16  |
| erreicht |     |     |     |     |     |     |     |

Summe (max. 90 Punkte):

Note:

<br/><br/><br/>

Zeit: 90 Minuten

Erlaubte Hilfsmittel: **ein** DIN-A4-Blatt mit eigenen Notizen (beidseitig)

**Viel Erfolg!**

<div class="page"/>

## Aufgabe 1 (HTML & JavaScript) (23 Punkte)

Skizzieren Sie den zum HTML zugehörigen DOM-Tree (ohne Text-Knoten). Denken Sie daran, dass die Reihenfolge der Knoten eine Rolle spielt. **(5 Punkte)**

```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Wordle | Login</title>
    <script defer src="main.js"></script>
    <style>#secret { visibility: hidden; }</style>
  </head>
  <body>
    <header><h1>You need to login first</h1></header>
    <main>
      <form id="loginForm" action="https://wordle.de">
        <fieldset>
          <legend>Login</legend>
          <label for="username">Username</label>
          <input type="text" name="username" id="user" />
          <label for="password">Password</label>
          <input type="password" name="password" id="key" />
        </fieldset>
        <input type="submit" id="login" value="Login" />
      </form>
    </main>
    <footer>
      <p id="license">licensed under MIT</p>
      <p id="secret">Your password is 123456</p>
    </footer>
  </body>
</html>
```

DOM-Tree:

<div class="page"/>

Sie wollen am Ende des Formulars, d.h. direkt vor `</form>`, dynamisch via DOM-Manipulation (JavaScript) einen Reset-Button (`<input type="reset"/>`) hinzufügen. Auf dem Button soll der Text "Clear" stehen. Was schreiben Sie dazu in die Datei `main.js`?

Tipp: Nutzen Sie `createElement()`, `appendChild()`, sowie die Attribute `type` und `value`. **(6 Punkte)**

`main.js`:

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

Das `<script>`-Tag hat das Attribut `defer`. Kreuzen Sie alle korrekten Aussagen an. **(2 Punkte)**

[ ] Das Skript wird asynchron geladen.

[ ] Das Skript wird nur auf dem Server ausgeführt.

[ ] Das Skript wird erst ausgeführt, wenn das HTML-Dokument vollständig geparst wurde.

<br/>

Unten stehend finden Sie einen anderen Code-Ausschnitt aus `main.js`. Was geschieht bei Aufruf dieses Codes, wenn `defer` auf `false` gesetzt wird (bzw. fehlt)? **(2 Punkte)**

```
// main.js
alert(document.getElementById("license").firstChild.nodeValue);
```

<br/><br/><br/><br/><br/><br/><br/>

In das Formular wird als Username `Maria` und als Passwort `123456` eingegeben. Welche URL (inklusive Query-String) wird beim Klicken auf `Login` aufgerufen? **(2 Punkte)**

<div class="page"/>

Sie wollen nachfolgende Tabelle in ein HTML-Dokument übertragen. Schreiben Sie das hierfür notwendige HTML innerhalb des `<table>`-Tags. Verwenden Sie dabei auch die HTML-Elemente `thead` und `tbody`. Styling und Umrahmung können Sie außer Acht lassen. **(6 Punkte)**

| Nachricht             | Art          | Statuscode |
| --------------------- | ------------ | ---------- |
| OK                    | Success      | 200        |
| Unauthorized          | Client Error | 401        |
| Internal Server Error | Server Error | 500        |

`<table>`
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
`</table>`

<div class="page"/>

## Aufgabe 2 (HTTP & WWW) (11 Punkte)

`GET` ist ein Beispiel für eine HTTP-Anfragemethode (HTTP-Verb). Nennen Sie **zwei** weitere und beschreiben Sie diese in je einem Satz. **(4 Punkte)**

<br/><br/><br/><br/><br/>

Ein sogenannter URL-Shortener kürzt URLs. Beispiel: bei Eingabe der URL `https://3.ly/amXxi` erfolgt eine Weiterleitung auf die URL `https://de.wikipedia.org/wiki/Breaking_Bad#Episodenliste`.

1. Nennen Sie einen Grund, weshalb jemand eine URL kürzen möchte. **(1 Punkt)**

<br/><br/><br/>

2. Welcher HTTP-Statuscode (außer 200) kommt im Beispiel wahrscheinlich zum Einsatz? Begründen Sie Ihre Antwort in einem Satz. **(2 Punkte)**

<br/><br/><br/>

2. Skizzieren Sie ein Diagramm, dass die wesentlichen HTTP-Verbindungen ab Eingabe der kurzen URL bis zur Ansicht der Wikipedia-Seite in einem Client-Server-Modell veranschaulicht. Beachten Sie, dass hierbei mind. 2 Server involviert sind. **(4 Punkte)**

<div class="page"/>

## Aufgabe 3 (JSON) (8 Punkte)

Geben Sie ein Beispiel für einen Unterschied zwischen der JSON Syntax und der JavaScript Objekt Syntax. **(2 Punkte)**

<br/><br/><br/><br/>

Das folgende JSON ist nicht valide. Markieren Sie die vier fehlerhaften Stellen und beschreiben Sie stichwortartig, welche Änderung jeweils getätigt werden muss. **(6 Punkte)**

<br/><br/><br/><br/>

```
{
  "name": "Hochschule Fulda",
  "street": "Leipziger Straße",
  "houseNumber": "123",
  "postalCode": 36037,
  "city": "Fulda",
  "employees": (
    {
      "firstName": "D.",
      "lastName": "Biezā",
      "number": 3050,
      "areas": ["AI-Support", "Betreuung Software-Labore", undefined]
    },
    {
      "firstName": "C.",
      "lastName": "Pape",
      "number": 379,
      "areas": ["Betreuung WI-Labor", "Virtualisierung", null]
    }
  ),
  hasLibrary: true,
  "students": 9300,
}
```

<div class="page"/>

## Aufgabe 4 (CSS) (23 Punkte)

Nennen und beschreiben Sie **zwei** CSS Eigenschaften (CSS properties). **(3 Punkte)**

<br/><br/><br/><br/><br/><br/><br/><br/><br/>

Nennen Sie **eine** CSS-Eigenschaft, die an ein Kindelement vererbt wird. **(1 Punkt)**

<br/><br/>

Ein über `<link>` verlinktes externes Stylesheet ist meist die beste Wahl, um CSS einzubinden. Beschreiben Sie zwei weitere Möglichkeiten. **(4 Punkte)**

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

Nennen Sie jeweils ein Blockelement und ein Inline-Element (Hinweis: relevant für die CSS-Eigenschaft `display`). Was ist ein wesentlicher Unterschied zwischen diesen beiden HTML-Elementtypen? **(3 Punkte)**

<div class="page"/>

Diese Code-Ausschnitte sind für die nächsten zwei Teilaufgaben.

```
<body>
  <header><h1>Food</h1></header>
  <main>
    <article class="fruits">
      <h2 class="header">Fruits</h2>
      <p id="raspberry" class="berry">Raspberry</p>
      <p id="grape" class="berry">Grape</p>
      <p id="orange" class="citrus">Orange</p>
    </article>
    <article class="legumes">
      <h2 class="header">Legumes</h2>
      <p id="black" class="pea">Black Eyed Peas</p>
      <p id="green" class="pea">Green Peas</p>
    </article>
  </main>
</body>
```

CSS:

```
body {
  color: black;
}

.fruits {
  color: red;
}

.berry {
  color: green;
}

#orange {
  color: orange;
}

.pea {
  color: purple;
}

.pea:first-child {
  color: yellow;
}

#grape {
  border-color: pink;
}
```

<div class="page"/>

Betrachten Sie den `<body>` eines HTML-Dokuments auf der vorherigen Seite. In welcher Farbe **(Englisch)** erscheinen die Wörter auf der Webseite, wenn das Stylesheet angewandt wird? <br/>
**(9 Punkte)**

| Wort            | Farbe |
| --------------- | ----- |
| Fruits          |       |
| Raspberry       |       |
| Grape           |       |
| Orange          |       |
| Legumes         |       |
| Black Eyed Peas |       |

<br/>

Nennen Sie **drei** CSS-Selektoren, um in dem HTML-Dokument **nur** das Element mit dem Text "Green Peas" zu selektieren. **(3 Punkte)**

<div class="page"/>

## Aufgabe 5 (Reguläre Ausdrücke) (4 Punkte)

Nennen Sie **vier** Strings mit einem Match zu folgendem regulären Ausdruck (JavaScript). **(4 Punkte)** <br/>`^[Ll]e[he]re?n?$`<br/>
<br/><br/><br/><br/><br/><br/><br/>

## Aufgabe 6 (Ajax) (5 Punkte)

Beschreiben Sie anhand eines selbst gewählten Beispiels den Begriff "AJAX" (Asynchronous JavaScript and XML)? **(5 Punkte)**

<div class="page"/>

## Aufgabe 7 (Objektorientierung) (16 Punkte)

Der folgende Code-Ausschnitt ist für die verbleibenden drei Teilaufgaben.

```
const Shape = function (color) {
  this.type = "generic shape";
  this.color = color;
};
Shape.prototype.area = function () {
  return "unknown";
};
Shape.prototype.describe = function () {
  console.log(`A ${this.color} ${this.type} with ${this.area()} px².`);
};

class Rectangle extends Shape {
  type = "rectangle";

  constructor(color, width, height) {
    console.log("Rectangle constructor called.");
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    console.log("area() called.");
    return this.width * this.height;
  }
}

class Circle extends Shape {
  type = "circle";

  constructor(color, radius) {
    super(color);
    this.radius = radius;
    console.log("Circle constructor finished.");
  }

  area() {
    return "TODO";
  }
}
```

<div class="page"/>

Inspizieren Sie den objektorientierten Entwurf von Formen auf der vorherigen Seite. Schreiben Sie die **fünf** Zeilen auf, die bei Ausführung des folgenden Codes per `console.log()` auf die Konsole geloggt werden. **(5 Punkte)**

```
const rectangle = new Rectangle("red", 5, 4);
const circle = new Circle("green", 2);
console.log(circle.type);
rectangle.describe();
```

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

Ändern Sie die Funktion `area()` der Klasse `Circle`, sodass sie den Flächeninhalt zurück gibt. Verwenden Sie für $\pi$ die Konstante `Math.PI` bei der Berechnung. **(2 Punkte)**

Hinweis: Die Formel für den Flächeninhalt eines Kreises ist $A=\pi r^2$

`area() {`
<br/><br/><br/><br/><br/><br/><br/>
`}`

<div class="page"/>

Entwerfen Sie eine weitere Klasse `Triangle` (Dreieck), die von `Shape` erbt. Setzen Sie dabei folgende Anforderungen um:

- Jedes Objekt der Klasse `Triangle` hat als `type` den Wert "triangle"
- `Triangle`-Objekte haben außerdem die Eigenschaften `color`, sowie `sideA`, `sideB` und `sideC` für die Länge der Seiten.
- `Triangle` hat eine spezielle funktion `semiperimeter()`, welche als Rückgabewert den halben Umfang des Dreiecks hat,also $s = \frac{sideA + sideB + sideC}{2}$
- `Triangle` implementiert die Funktion `area()` nach Satz des Herons zur Berechnung des Flächeninhalts eines Dreiecks:
  - $A=\sqrt{s(s-a)(s-b)(s-c)}$, wobei $s$ für den halben Umfang (`semiperimeter`) und $a$, $b$, $c$ für die Seitenlängen stehen.
  - Hinweis: `Math.sqrt(x)` gibt die Wurzel aus `x` zurück.

Sie können ES5 oder ES6 Schreibweise verwenden. **(9 Punkte)**

<div class="page"/>

## Zusatzblatt

<!-- code below is to correctly render Math formulas in generated PDF -->
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ tex2jax: {inlineMath: [['$', '$']]}, messageStyle: "none" });
</script>
