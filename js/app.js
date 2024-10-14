//richiesta del programma: immettere l'eta 
const age = parseInt(prompt('inserisci la tua eta')) 
console.log('eta:', age)
const chilometri= parseInt(prompt('inserire la tratta(km del viaggio)'))
console.log('chilometri:', chilometri, 'KM')
let prezzo = (chilometri*0.21)
console.log('prezzo:',Number(prezzo.toFixed(2)) , '$')
//definisci le condizioni

let scontoAdvanced = 0;

if (age < 18) {
    //const sconto = (prezzo) * 20 / 100
    scontoAdvanced = (prezzo) * 20 / 100
    //prezzo = prezzo - sconto
    console.log('hai diritto allo sconto giovani!!')
    //console.log('il prezzo del tuo biglietto è:', Number(prezzo.toFixed(2)) , '$')
    console.log('hai risparmiato:', Number( scontoAdvanced.toFixed(2)) , '$')
}else if(age >= 65) {
    //const sconto = (prezzo) * 40 / 100
    scontoAdvanced = (prezzo) * 40 / 100
    //prezzo = prezzo - sconto
    console.log('hai diritto allo sconto over 65!!')
    //console.log('il prezzo del tuo biglietto è:', Number(prezzo.toFixed(2)) , '$')
    console.log('hai risparmiato:', Number( scontoAdvanced.toFixed(2)) , '$')
}

prezzo = prezzo - scontoAdvanced
// console.log('non hai diritto a nessuno sconto :(')
//console.log('il prezzo del tuo biglietto è:', prezzo.toFixed(2) , '$')
console.log(`il prezzo del tuo biglietto è: ${prezzo.toFixed(2)}$`)

