# Webanwendungen – Projekt

## Projektziel
Ziel dieses Projekts ist der Aufbau einer einfachen Webanwendung im Rahmen des Moduls
„Webanwendungen“. Der Fokus liegt auf einer sauberen Projektstruktur und der Nutzung
von GitHub zur Versionsverwaltung. 

## Initiale Einrichtung (10.01.2026)
Zu Beginn wurde eine grundlegende Projektstruktur bestehen aus HTML-, CSS- und JavaScript-Dateien angelegt. 
Dadruch wurde eine klare Trennung zwischen Struktur, Gestaltung und Funktionalität sichergestellt. 
Als Vorbild dienen einfach aufgebaute Websites von Kleinverlagen, die kriterienlos gesichtet wurden.
- Lokalen Projektordner `webanwendungen` erstellt
- Grundstruktur angelegt:
  - index.html: Was ist auf der Seite? Grundgerüst der Website für: Überschriften, Texte, Buttons, Formulare, Bilder 
  - style.css: WIe sieht es aus? CSS legt fest, wie die Inhalte aussehen. Für Farben, Schriftarten, ABstände, Positionen
  - script.js: Was passiert, wenn der Nutzer etwas tut? JavaSript sorgt dafür, dass die Seite reagiert. Klicks auswerten, Inhalte ändern, Formulare prüfen, Daten laden
  Jede Datei hat eine eigene Aufgabe, wodurch Änderungen leicher sind, die Wartbarkeit erhöht sich 
- Projekt als Git-Repository initialisiert
- Erstes Commit mit der Nachricht „Projektstruktur angelegt“
- Repository auf GitHub veröffentlicht (öffentlich)

## Aktueller Stand
- Projektstruktur vorhanden
- Dateien aktuell noch ohne Inhalt

- ## Einrichtung und Versionsverwaltung (11.01.2026)

- Repository zur Versionsverwaltung mit Git initialisiert, dadruch können Änderungen gespeichert, frühere Versionen abgerufen werden
- Remote-Repository auf GitHub genutzt, wodurch das Projekt gesichert ist und von überall erreichbar wurde
- Repository lokal geklont, um Konsistenz zwischen lokalem und remote Stand sicherzustellen, dadurch arbeiten sowoh die Online als auch die lokale Version synchron.
- HTML-Grundstruktur lokal implementiert und getestet: erstes Grundgerüst wurde auf Funktzion getestet.

## Einbindnung des Frameworks Bootstrap
Warum Bootstrap?
- Responsives Design: 12 SPalten-System ermöglicht, Websiten für verschiedene Bildschirmgrößen anzupassen
- Schnellere Entwicklung: Vorgefertigte HTML-, CSS- und JavaScript-Komponenten
- Einfache Handhabung: Ich bin erste seit 3 Tagen Webentwickler... 
- Einbindung des Bootstraps durch Verweis im HTML Bereich
  (<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">)
  Folge: Für den Kopfbereich der Seite wird kein separates Css mehr benötigt, weil die CSS-Klassen von Bootstrap abgedeckt werden. (Vgl S.66)

## Aktueller Stand
- Die Website besitzt einen Übergangstitel, aber noch kein Logo
- Sie verfügt über einen Header mit einem globalen Menü (Start, Über mich, Kontakt)
  --> Erinnerung: 
- Sie verfügt über einen Footer mit Immpressum und Datenschutz, die aber zu nichts führen.
- Kann auf unterschiedlichen Endgeräten ohne Einbußen gelesen werden.

## Lokales Menü bauen (12.01.2026)

Umsetzung Menü zur Navigation innerhalb einer einzelnen Seite.
Ziel war es, längere Inhalte übersichtlicher zu strukturieren und eine direkte Navigation zu einzelnen Textabschnitten zu ermöglichen.

- Implementierung eines lokalen Menüs innerhalb des Hauptinhaltsbereichs
- Nutzung des Bootstrap-Grid-Systems zur Aufteilung in zwei Bereiche:
  - lokales Menü (`aside`)
  - Hauptinhalt (`main`)
- Einsatz von Sprunglinks (`href="#id"`) im lokalen Menü
- Verknüpfung der Menüeinträge mit Inhaltsabschnitten über `id`-Attribute in `section`-Elementen
- Semantische Strukturierung durch Verwendung von `aside`, `nav`, `main` und `section`
- Umsetzung eines Sticky-Verhaltens für das lokale Menü, sodass dieses beim Scrollen sichtbar bleibt
- Responsives Verhalten:
  - auf kleinen Bildschirmen wird das Menü oberhalb des Inhalts angezeigt
  - auf größeren Bildschirmen wird das Menü neben dem Inhalt dargestellt

Durch diese Umsetzung wurde die Benutzerführung verbessert und die Grundlage für weitere Layoutanpassungen (z. B. LTR-/RTL-Unterstützung) geschaffen.

## RTL/LTR Anpassung
Was wird verlangt? In der Aufgabe steht, dass das Menü je nach Schriftkultur rechts oder links angegeben werden soll. 
Dann wäre das CSS gefragt. Aber dann müsste ich eine Bedingung aufstellen wann sich das Layout ändert. Das bedeutet zwei verlinkte Seiten mit der Wahl zwischen Rtl und IRL.
Aber eigentlich müsste sich doch die ganze Seite anpassen. Dann müsste lediglich die direction geändert werden. 
Wir ändern die direction und wenn noch Zeit am Ende bleibt überlegen wir uns nur das Menü anzupassen.
OK, ufgepasst: 

- Zur Demonstration unterschiedlicher Schriftkulturen wurden zwei HTML-Seiten angelegt.
- LTR: Für Schreib bzw. Lesrichtung von links nach rechts
- RTL: Für Lesrichtung bzw Schreibrichtung von rechts nach links
- Diese beiden Seiten wurden mittels
  <li class="nav-item"><a class="nav-link" href="index.html">ITR</a></li>
    <li class="nav-item"><a class="nav-link" href="index-ar.html">RTL</a></li>
  verlinkt. Damit kann die Lese- bzw. Schreibrichtung jederzeit geändert werden. 

## Aktueller Stand
- Lokales Menü eingerichtet zu dem gezielt zu den einzelnen Texten navigiert werden kann
- RTL/IRL Anpassung möglich durch zwei unterschiedliche HTML-Seiten, die miteinander verlinkt wurden
  (Umgehe ich damit das CSS oder erfüllt es die Aufgabe?) 







