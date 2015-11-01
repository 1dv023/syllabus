##Examinationsuppgift 1
I denna uppgift är det tänkt att du ska ska skriva en enklare webbagent som skrapar och analyserar information 
på några, för uppgiften konstruerade, webbplatser. Tanken är att du ska försöka skriva en agent/skrapa/script som ska
anpassas efter ett färdigt senario.

Till uppgiften kommer du få en node-applikation där tre stycken webbplatser finns. Webbplatserna är direktframtagna för denna laboration och 
således skrivna efter detta, dvs utseende m.m. kan se lite enkelt ut. Du ska dock inte koncentrera dig på deras konstruktion eller utseende utan mer på vad för
information de spottar ut. Webbapplikationerna kommer delvis vara skrivna i node.js. För att kunna köra igång dessa applikationer utan att behöva installera massa mjukvara och webbservrar på er egna dator kommer vi använda en virtualliseringsmodell med applikationen Vagrant. Läs mer om detta på kursens webbplats under [rubriken "Virtualizations"](https://coursepress.lnu.se/kurs/webbteknik-ii/virtualization/), titta på [filmen](http://orion.lnu.se/pub/education/course/1DV449/ht15/1DV449-vagrant-server.mp4) som visar hur du kommer igång samt läs den [readme som finns i reprot](https://github.com/thajo/weekend-booking-web-site/blob/master/README.md).


###Senario för uppgiften
Vännerna Peter, Paul och Mary brukar försöka ses någon gång varje månad för att se en film på stadens biograf och sedan äta på favoritresturangen. Problemet är dock att det är svårt att planera denna händelse. Detta beror dels på att vännerna måste hitta en tid som alla kan, kontrollera om det finns någon film, som inte är fullbokad, som går och se vid aktuell tid och om man kan få bord på favoritrestaurangen. Då allt finns på webben nu förtiden borde man kanske kunna automatisera detta lite och på så sätt spara lite tid.

####Webbplatserna
Du kommer få en färdig node.js-applikation som driftar de olika webbplatserna. Det kommer finnas en index.sida (nås via http://localhost:8080 när du startat din vagrant-maskin) som innehåller tre länkar. En till varje mindre webbplats. Det är alltså tänkt att din applikation ska börja med denna URL och via skrapningstekniker ta sig vidare till de tre olika webbplatserna och utifrån dessa få tillräkligt med information. Se film hur resultatet kan se ut.


####Vännernas kalendrar (/calendar)
Första webbplatsen är ett ställe där vännernas kalendrar presenteras och där man kan analysera vilka tider som är lediga för alla tre. Webbplatsen består av en index-sida med tre länkar till varje persons "kalender". Dessa är uppbyggda av enkla HTML-tabeller och där man kan skrapa fram information kring vilka dagar som vännerna är upptagna respektive lediga. De lediga dagarna visas genom att personen där angett ordet "ok". På något sätt bör du där hitta en eller flera dagar där de tre vännerna kan ses. För att med denna information sedan låta din applikation gå vidare och föreslå när de kan äta och vilken film de ska se när.
Vännerna har bara möjlighet att ses på helgerna därför är bara fredag, lördag och söndag aktuella och fler dagar kommer inte läggas till i denna kalender.  

####Biosalongen (/cinema)
Den andra webbplatsen simulerar en enklare sida för att se stadens biografs aktuella föreställningar. Informationen som man kan få där är vilken dag och vilken tid en viss film går och hur vida den är fullbokad eller inte. Informationen om detta får man genom att analysera trafiken mellan klient och server och i vilket format applikationen skickar informationen däremellan.

####Restaurangen (/dinner)
Den tredje webbplatsen visar favoritresturangens tillgänglighet. Sidan är gjord av en HTML-sparad wordfil. Här kan man förutom se tillgängligheten även göra en bokning av bord (extrauppgift)

##Genomförande
Tanken är att du ska skriva en applikation/webbagent som automatiskt kan analysera de tre webbplatserna och ge förslag på tider då personerna kan dels äta och dels kan se en film. Applikationene ska **inte kodas med hårdkodade absoluta URL:er mer än till ingångssiden som länkar till de tre olika tjänsterna.** Man ska vid examinationen enkelt kunna byta denna URL då det kommer finnas en identisk instans av webbplatserna publicerad på en av oss tillhandahållen server. Din färdiga applikation ska publiceras så att exminatorn vid redovisningstillfället kan komma åt den via en publik URL.

Se följande film för genomgång hur applikationen är tänkt att fungera.

Din applikation ska således utifrån en given URL:

1. Analysera vilken dag som alla vännerna är lediga
2. Analysera vilka filmer som går den dagen och visa upp de förslag som finns. Låt användaren välja en filmvisning.
3. Utifrån informationen i punkt 1 och 2, ge förslahg på filmvisningar som skulle kunna passa sällskapet.
4. (EXTRA!) Använd de lilla formulär som finns för att göra en bordsbokning på resturangen.


##Mål
* Få praktisk kännedom om hur man skriver webbskrapor/web agents
* Få praktisk kännedom om hur HTTP fungerar
* Kunna analysera hur en webbplats fungerar och hur HTTP-trafikens flöde ser ut mellan klient och server
* Självständigt lösa ett tillhandhållet problem


###Val av teknik
Du är fri att välja programmeringsspråk utefter dina förkunskaper eller nyfikenhet. Du ansvarar dock själv för din egen utvecklingsmiljö och publicering av applikation inför examinationen.


###Krav
* Applikationens källkod ska vara publicerad på ett GitHub-repositorie som är delat med användaren "1DV449".
* Examinatorn ska kunna köra din applikation via en vanlig webbläsare, dvs du ska publisera din applikation på en publik webbserver.
* Man ska på något sätt kunna ange en start-URL som applikationen använder sig av. Vid examinationen kommer vi köra mot en instans av servern som vi har och då ska vi kunna ange URL:en till den.
* Det ska inte finnas några hårdkodade absoluta URL:er i applikationen utan anger man en viss start-URL ska applikationen klara att bygga ihop sökvägarna den behöver utifrån denna. 
* Applikationen ska vara skriven på ett så generellt sätt som möjligt. 
* Att boka bord via sin applikation är inget krav utan ses som en extrauppgift som dock visar på ytterligare förståelse av uppgiften/kursens mål
* Du ska vid examinationen kunna besvara på nedanstående reflektionsfrågor förslagsvis genom att skriva dem i ditt repositories README-fil.


###Reflektionsfrågor
* Finns det några etiska aspekter vid webbskrapning. Kan du hitta något rättsfall?
* Finns det några riktlinjer för utvecklare att tänka på om man vill vara "en god skrapare"?
* Begränsningar i din lösning- vad är generellt och vad är inte generellt i din kod?

##Examination
Uppgiften bedöms under en muntlig redovisning tillsammans med teori ifrån de peer-instructions som genomförts. Examinatorn ska då kunna köra din applikation endast genom att skriva in en URL i en webbläsare och på något sätt ange start-URLen till en identiskt instans av vagrant-maskinen.


##Kuriosa
I uppgiften finns dolda referenser till:
* En musikgrupp
* En seriefigur
* En tidning
* Ett fotbollslag

Kan du hitta vilka?
