# Attrecto frontend próbafeladat - Webflix App

## Alkalmazás indítása
### Terminálbam be kell lépni az angular app könyvtárába 
```
cd webflix
```
### Szükséges függőségek telepítése
```
npm install
```
### App futtatása localhoston
```
ng s
```

## Technológiák
- Angular (13)
- PrimeNG
- SCSS


## App működése
Az alkalmazás reszponzív. Betöltéskor a kiinduló állapotot, azaz a `no results found` képernyő elemeket látjuk.

A `Search` input mezőbe gépelve tudunk filmekre, sorozatokra szűrni, cím alapján.
A **bevitelimező validálva van, legalább 3 karaktert kell beírni**, hogy megtörténjen az adatok lekérdezése.
Maga a lekérdezés billentyű "felengedéskor" (keyup event) fut le. 

A lekérdezés eredményét azonnal látja a felhasználó. A **filmek / sorozatok, kártyákon jelennek meg**, rájuk **kattintva pedig egy felugró ablakban** a részletes leírás látható.
A találatok száma a bal felső sarokban jelenik meg, mobilon pedig a képernyő tetején.

Találatok számától függően, a **keresési eredmény lapozható**. Egy oldalon 20 kártya jelenik meg, az oldal alján levő `paginator` 
-on pedig az elérhető oldalak száma.

Ha a keresési kritériumnak egy adat sem felelt meg, akkor szintén a `no results found` képernyő elemek lesznek láthatóak.

