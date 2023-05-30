# Lexware Web Developer Challenge

## Allgemeine Hinweise

Gegeben ist eine kleine Webanwendung für die Verwaltung von Abwesenheitsanträgen (Requests). Diese soll um weitere Funktionalitäten erweitert werden.

- Die Anwendung basiert auf dem [Angular 12 Framework](https://angular.io/).
- Es werden Komponenten des [Angular Material Frameworks](https://material.angular.io/components/categories) eingesetzt.
- Die Anwendung arbeitet mit einer Mock API (siehe `mock-api.service.ts`)
- Gehe schrittweise vor, so weit, wie du in der gegebenen Zeit kommst. Es ist nicht schlimm, wenn du nicht alle Schritte schaffst.
- Setze nicht spezifizierte Details so um, wie du es für am sinnvollsten erachtest.
- Bei jeder gespeicherten Code-Änderung kompiliert die Anwendung automatisch neu und die Daten in der Mock API werden auf den Ursprungszustand zurückgesetzt.
- Du musst keine weiteren Dependencies installieren, um die Challenge lösen zu können.

🏁 Und jetzt geht's los 🏁

## Schritt 1

Schaue dir die bestehende Anwendung an und versuche zu verstehen und nachzuvollziehen, was sie schon kann und wie sie funktioniert.

## Schritt 2

Nach einem ausgeführten Create/Update/Delete eines Requests soll der User über den Erfolg oder Misserfolg dieser Operation informiert werden. Verwende die [Angular Material Snackbar](https://material.angular.io/components/snack-bar/overview), um passende Erfolgs- und Fehlermeldungen anzuzeigen (Das Code-Beispiel "Basic snack-bar" kann hilfreich sein. Den Code kannst du durch Klick auf das "<>" Icon einsehen). Bereits bestehende `alert` Aufrufe können anschließend entfernt werden.

## Schritt 3

Vielleicht ist dir schon aufgefallen, dass nach dem Löschen eines Requests in der `request-list` Komponente der entsprechende Tabelleneintrag weiterhin angezeigt wird. Aktualisiere die `dataSource` Property nach erfolgreichem Löschen so, dass der soeben gelöschte Request aus der Tabelle verschwindet.

**Hinweis**: Das UI wird nur aktualisiert, wernn der `dataSource` Property ein neues Array zugewiesen wird.

## Schritt 4

Vor dem Löschen eines Requests soll in der Methode `checkStatus` im `MockApiService` geprüft werden, ob der Request einen gültigen Status hat. Die Methode ist noch nicht richtig implementiert. Vervollständige sie so, dass nur noch Requests mit dem Status 'canceled' oder 'rejected' gelöscht werden können.

**Hinweis**: Optional kannst du die Datei `mock-api.service.spec.ts` für die Implementierung von Unit Tests verwenden, um deine Validierung zu überprüfen. Um die Tests auszuführen, müssen folgende Schritte ausgeführt werden:

1. Alle deine Anpassungen speichern.
2. In der Datei `angular.json` die Zeile 18 `"main": "src/main.ts"` in `"main": "src/main-testing.ts"` ändern und speichern.
3. Mit F5 den Browser reloaden.

Um wieder zur normalen App-Ansicht zu kommen, führe die gleichen Schritte aus und ändere in Schritt 2 den Eintrag zurück auf `main.ts`.

## Schritt 5

Im `MockApiService` gibt es eine weitere Validierungsmethode, die im Fall von Create und Update aufgerufen wird: `getOverlappingRequestIds`. Auch diese Methode ist noch nicht richtig implementiert. Vervollständige sie so, dass keine Requests erstellt oder upgedatet werden können, bei denen es zu einer zeitlichen Überschneidung mit bereits bestehenden Requests kommen würde. In dem Fall soll die Methode ein Array aller Request-Ids zurückgeben, mit denen es zu Überschneidungen kommen würde.

## Schritt 6

In der `request-list` Komponente siehst du unter der Tabelle zwei Buttons: "Rotate Down" und "Rotate Up". Klickt man darauf, werden die beiden Handler-Methoden `rotateUp()`und `rotateDown()` ausgeführt, die aktuell nur einen alert ausgeben. Implementiere diese Methoden so, dass...

1. ...bei Klick auf "Rotate Down" die letzte Tabellenzeile in die erste rutscht und alle anderen Zeilen jeweils um eine Position nach unten.
2. ...bei Klick auf "Rotate Up" die erste Tabellenzeile in die letzte rutscht und alle anderen Zeilen jeweils um eine Position nach oben.

Viel Spaß und Erfolg beim Bearbeiten dieser Challenge 💪🥳

## Fußnoten

[Stackblitz-Link ⚡️](https://stackblitz.com/edit/web-developer-challenge-lex?file=README.md)
