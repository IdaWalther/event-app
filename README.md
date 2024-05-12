# Indivuduell Examination Frontendramverk - Where It's @

## React-slick
Jag valde att använda mig av react-slick, också ett externt bibliotek när jag skulle skapa min karusell till mina biljetter. Anledningen till att jag använda react-slick är för att den är väldigt enkel att implementera, det går fort och är inte särskilt krångligt. Jag behövde bara inställa react-slick samt slick-carousel samt tillhörande css filer för att väldigt enkelt få tillgång till en karusell.

## Nanoid
Jag har valt att använda mig av nanoid, som är ett externt bibliotek. Anledningen till detta är för att nanoid genererar unika slumpmässiga ID:n, vilket är precis vad jag behöver för att kunna generera unika ordernummer. Det som även är bra med nanoid är att jag själv kan anpassa vilka tecken jag vill att ordernumret ska genereras utifrån.

## Font Awesome
Jag valde även att implementera font awesome för att enkelt kunna använda mig av deras ikoner. Dock använde jag i slutänden enbart förstorningsglaset, men nu har jag lärt mig hur man använder font awesome i ett react projekt.  

## Uppdrag
Ditt uppdrag är att koda ihop en frontend till biljettjänsten *Where its @*. Den ska se ut enligt nedan mockup. Du har också tillgång till [Figma-länk](https://www.figma.com/file/vcgWPPy2q44oZZ2eORL1wB/Where-its-light?node-id=0%3A1) för exportering av assets, färger, kika fonter etc.

## Tekniska krav för godkänt
Du skall i denna uppgift för att få godkänt visa att du behärskar följande tekniker och delar inom React:
- Pages & Components
- useState & useEffect
- Props
- API-hantering
- Routing mellan Pages
- Avancerad statehantering med externt bibliotek (ex Zustand)

## Krav för väl godkänt
Du skall välja ut ytterligare 2 st React Hooks, alt. 2 st externa bibliotek (eller en av varje), som vi inte gått igenom i klassen och som du läser på om och implementerar i din applikation. Utöver detta så beskriver du i din *README.md*-fil, hur dessa hookar/bibliotek fungerar, samt varför du tycker att de passar just din applikation. För VG måste du även ha en god struktur på din applikation, med god uppdelning i Pages och Komponenter.

## Övriga krav
- Er app måste inte vara pixel-perfekt mot skissen, men ni måste ha en enhetlig, responsiv design
- Appen skall se bra ut på alla skärmstorlekar mellan 375px - 500px
- Sidan får aldrig krascha
- När en beställing gjorts skall en biljett skapas där ni genererar fram ett biljettID på 5 tecken (endast STORA BOKSTÄVER och siffror tillåtna), en Sektion och en sittplats. Vid köp av flera biljetter till ett och samma evenemang skall Sektionen vara samma på alla biljetter, och sittplatserna skall vara bredvid varandra.