//richiesta del programma: immettere l'eta 
const age = parseInt(prompt('inserisci la tua eta')) 
console.log('eta:', age)
const chilometri= parseInt(prompt('inserire la tratta(km del viaggio)'))
console.log('chilometri:', chilometri)
const prezzo=(chilometri*0.21)
console.log(prezzo)
//definisci le condizioni
if (age < 18) {
    const sconto= (prezzo) *20 /100
    const prezzoUnderage= prezzo - sconto
    console.log('hai diritto allo sconto giovani')
    console.log('il prezzo del tuo biglietto è:', Number(prezzoUnderage.toFixed(2)) , '$')
    console.log('hai risparmiato:', Number( sconto.toFixed(2)) , '$')
}
