# E-Commerce Store

Questo è un e-commerce strutturato con login simulato (non salva utenti o dati di utenti) collegato a JSON Server, è suddiviso su più pagine:
- Home
- Products
- Categories
- About us
- Contact us
- Carrello
- Login
- Se sei admin pure "Admin panel"

## Tecnologie e stack usati:
- React
- Typescript
- Redux
- Tailwind
- Router
- Vite
- JSON server

## Tabella dei prodotti sul JSON server:
| ID | NAME | DESCRIPTION | CATEGORY | COST |
|----|------|-------------|----------|------|
| 1  | Ace  | L'ace è...  | Succhi   | 2.99 |

## Struttura:
Dentro la cartella "src" si trovano le cartelle principali:
- components: Contiene tutti i componenti riutilizzabili
- Dynamic: contiene esclusivamente la pagina dinamica che presenta ogni prodotto singolarmente
- pages: contiene tutte le pagine
- store: salva i vari dati e contiene le slice per i reducer di:
    - carrello
    - login
    - messaggi
    - prodotti: che contiene le thunk per fare le chiamate API
- types: contiene le type dei messaggi e dei prodotti 

## Features
- Filtrare prodotti: incluso nel componente ```HTML <Products /> ```
- Dynamic page: una pagina dinamica che si adatta ad ogni prodotto e permette di aggiungere al carrello
- Admin page: permette di aggiungere, modificare o eliminare prodotti e vedere anche i messaggi
- form di contatto: permette di inviare messaggi direttamente alla pagina admin
- security admin: devi per forza essere admin per accedere alla pagina /admin sennò vieni buttato subito fuori
- Carrello: per aggiungere prodotti al carrello devi per forza essere loggato
- API call: vengono fatte con createAsyncThunk per aggiungere, modificare, eliminare o vedere tutti i prodotti

## Preview
![Preview](./image_1.png)

![Preview](./image_2.png)

![Preview](./image_3.png)

![Preview](./image_4.png)

## Come scaricarlo ed usarlo:
- clonare il repo
```bash
git clone https://github.com/MattiaDV/FRONTEND-EXAM.git
```
- spostarsi nella cartella:
```bash
cd final_exam
```
- Lanciare il comando di installazione delle librerie:
```bash
npm install
```
- lanciare il server JSON:
```bash
json-server --watch db.json --port 3001
```
- lanciare lo store:
```bash
npm run dev
```