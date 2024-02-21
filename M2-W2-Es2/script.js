// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!


marco.cart = [prices[0], prices[0], prices[1], prices[2], prices[0]]
paul.cart = [prices[0], prices[0], prices[0], prices[0]]
amy.cart = [prices[0], prices[1], prices[2]]
//cart contiene il costo dei vari articoli che sono stati messi nel carrello

let costumer = []
costumer.push(marco)
costumer.push(paul)
costumer.push(amy)

let totalPrice = null
let ambassador = []


for (let i = 0; i < costumer.length; i++) {
    if (costumer[i].isAmbassador === true) {
        console.log(costumer[i].name + " " + costumer[i].lastName + " è un ambassador");
        ambassador.push(costumer[i])
    } else {
        console.log(costumer[i].name + " " + costumer[i].lastName + " non è un ambassador");
        
    }
}

console.log(" ");
console.log("Utente " + utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName)

for (let i = 0; i < utenteCheEffettuaLAcquisto.cart.length; i++) {
    totalPrice = totalPrice + utenteCheEffettuaLAcquisto.cart[i]
}

if (utenteCheEffettuaLAcquisto.isAmbassador === true) {
    totalPrice = totalPrice - (totalPrice / 100) * 30
    console.log("Totale Ambassador : " + totalPrice);
} else {
    console.log("Totale: " + totalPrice);
}

if (totalPrice >= 100) {
    console.log("Spedizione gratuita !");
} else {
    totalPrice = totalPrice + shippingCost
    console.log("Costo spedizioni: " + shippingCost);
    console.log("Totale: " + totalPrice)
}