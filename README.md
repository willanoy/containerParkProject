# Aeterna

AETERNA is een online platform waarmee je herinneringen van jezelf of dierbaren om je heen levendig kunt houden voor altijd.

- Verhalen en anekdotes verzamelen
- Mensen uitnodigen om deel te nemen
- Herinneringen over generaties heen bewaren
- Video’s, foto’s en audio raadplegen mits toegang
- Oude media digitaliseren


## Backend development

### Postgres

- Install [PostgreSQL](https://www.postgresql.org/download/)
- Create superuser with name `postgres` and password `postgres`
- Default port is `5432`
- Set the path to PostgreSQL (Windows): Go to `This PC` > Right click on `Properties` > `Environment Variables` > `System Variable`: `Path` > `Edit` > `New`: `C:\Program Files\PostgreSQL\[YOUR VERSION]\bin` & again for `C:\Program Files\PostgreSQL\[YOUR VERSION]\lib`
- Open cmd.exe, this does not work for terminal in Visual Studio Code for some reason.
- Login with the super user you declared before using `psql -U postgres`
- Execute `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";` om uuid automatisch te gebruiken moet dit geinstalleerd zijn op postgres server
- Execute `create database fotoapp`;

### Install redis (local key-value storage)

Redis is native on linux so you will need to install a linux virtual machine
I myself have installed ubuntu 18.04 LTS through the microsoft store
you might need to activate windows subsystem for linux (WSL) in order for this to work
windows 10 or higher is needed for wsl

Once Ubuntu is installed install redis in the ubuntu terminal through:

`sudo apt update`

then

`sudo apt install redis-server`

Finally to start the redis server execute in ubuntu terminal:

 `redis-server`

Redis database is now running on default port : `6973`


### Test mollie payments

To test mollie payments in localhost you will need ngrok. (HTTP tunnel)

After making an account and installing ngrok run the ngrok.exe

Then to start a HTTP tunnel enter in the ngrhok terminal:

`ngrok http 4000 ` 

Copy the link, add /mollie_hook/ and put in the .env variables under WEBHOOK_URL_MOLLIE 
e.g. : `WEBHOOK_URL_MOLLIE=http://4230-2f02-1811-b04a-1d00-9915-b256-5ef7-885f.ngrok.io/mollie_hook/ ` 


### .env file

Add an .env file in the server folder and look at .env.example TO KNOW which fields are needed to start.
Ask the developers for the needed. 
When received make sure the url at CORS_ORIGIN doesn't end with "\". If it does delete it.

### index.ts

Check when running in development that in the index.ts file the createConnection function's synchronise attribute is set to true.

### Backend Lokaal runnen
Get all dependencies

`yarn install` 

To continously convert typescript from src folder to javascript in dist folder

`yarn watch` 

Actually run the dist folder

`yarn dev` 


## Frontend development

### Prerequisites

- Install [Node.JS](https://nodejs.org/en/download/).
- Optional install: [Git](https://git-scm.com/downloads) (depending on npm packages).
- Install [yarn](https://yarnpkg.com/package/react) via `npm i -g yarn`
- Install [Vercel CLI](https://vercel.com/download) via `npm i -g vercel`

### .env.local file

Add an .env.local file in the web folder. 
Ask the developers for the needed fields.

### Lokaal runnen

- Install NPM package dependencies: `npm i`
- Install NPM package [nodemon](https://www.npmjs.com/package/nodemon) globallay: `npm i -g nodemon`
- Lokaal runnen: `yarn dev`
- Compile GraphQL: `yarn gen`


### Common bugs
- for some reason the landing_page.scss always is converted to CRLF while it should be LF,
FIXME: some fix this

**Only for admins**

- `vercel` om next te builden en op een tijdelijk domein te laten draaien
- Build & deploy for production: `vercel --prod`
- Further command documentation can be found here [on the offical Vercel CLI documentation](https://vercel.com/docs/cli).


## Best practices


#### TODOS and FIXMES

Put these in the code if possible. This way it's easier to know where to find and solve a problem. TODO flag for things that are yet to do and FIXME for bugs


#### Use Clickup with Github

For each task found in clickup make a new branch, 
in clickup navigate to task, click the github logo and see "Create & Checkout a new branch:"
run this in the visual studio terminal

when task is finished put in review


## Duiding bij database


![Diagram van database](https://aeternageneral.s3.eu-west-2.amazonaws.com/default_images/Current+ERD.drawio.svg)


De accessrequest zal de interactie tussen een gebruiker en de pagina bevatten daar staat dus de status die de gebruiker heeft op die pagina.
Idem voor personalmessageAccess tussen gebruiker en persoonlijke berichten

De bestanden in de gallerij bevatten alle fotos van herinneringen

De bestanden in de herinneringen pagina bevatten alleen de herinneringen waar er een tekst aanwezig is (we gaan er dus van uit dat er daar een verhaal bij hoort)

Publieke link is de link die in de url staat.
Als de gebruiker nog nooit interactie heeft gehad komt hij terecht op een pagina waar hij een toestemmingsverzoek kan sturen

Private link is een link die de gebruiker onmiddelijk toegang geeft tot de herdenkingspagina, geen nood om toestemming te vragen.
(Status gebruiker wordt dus onmiddelijk op 2 (heeft toegang) gezet)

### Duiding bij status systeem
Op basis van de paginaID en de gebruikersId wordt er dan een status ingesteld. Deze status wordt bepaat door de accessrequest table.
Op basis van die status kunnen dan bepaalde mutaties en queries gezien worden.


- Status = -1 de persoon is afgewezen om toestemming te krijgen
- Status = 0 -> is geen status, de gebruiker heeft nog nooit interactie gehad met de pagina
- Status = 1 -> de gebruiker heeft de pagina gezien en een verzoek gestuurd om de pagina te mogen zien,
de gebruiker kan op dit moment herinneringen, fotos en condoleances toevoegen maar enkel de eigenaar(s) kunnen dit zien.
- Status = 2 -> De gebruiker is goedgekeurd door de eigenaar en kan de meeste paginas en data zien
- Status = 3 -> De gebruiker is deel van de intieme kring van de herdenkingspagina en kan daardoor (meer gevoelige dingen bekijken)
- Status = 4 -> De gebruiker is medebeheerder en kan alles doen/zien
- Status = 5 -> De gebruiker is de originele eigenaar/aanmaker van de pagina -> dit mag altijd maar één iemand zijn? en zal degene zijn die de rekeningen ontvangt
wat als die persoon overlijd?


## FAQ

Bij vragen aan code stel ze eerst aan de hoofdontwikkelaars [Willem Himpe](https://github.com/whimpe) en [Willem Lannoye](https://github.com/willanoy).

## Visual studio code extensions

- **Prettier** by _Prettier_ - Useful to format documents whilst coding.
- **TODO Tree** by _Gruntfuggly_ - Useful to set TODOs all over the project and locate them easily.

## License

Not avalaible yet.

## Acknowledgments

- [Willem Lannoye](https://github.com/willanoy)
- [Willem Hempe](https://github.com/whimpe)
- [Ruben Szekér](https://github.com/tyounr)
- [Jelle vdv](https://github.com/jellevdv)
