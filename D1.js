/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

   /*in JavaScript ci sono piu' diversi tipologie di dati ci possono essere i tipi numerici sia interi che decimali ci possono essere dati di tipo string  ovvero una sequenza di caratteri che vanno differenziate con gli apici nel codice a differenza dei valori di tipo numerici e adifferenza di un altro tipo di valore, il valore booleano (boolean) che da come output semplicemente un valore vero o falso (true / false). una variabile puo' assumere anche il datatype null diversa dal valore 0 e indica la mancata identificazione INTENZIONALE )*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

  /* let name="Domenico"
      console.log(name) */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

  /* let valore1 = 12
    let valore2 = 20
    let somma= valore1+valore2
    console.log(somma) */


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

  /* let x = 12
    console.log(x) */


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
  
  /* const name="Domenico"
    name= "Villani"
    console.log(name)
    fare questa operazione dara' questo errore: "Uncaught TypeError: Assignment to constant variable."
    una costante non e' modificabile ne per il contenuto ne per la tipologia*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
  /* let x = 12
    let y = 4
    let sottrazione = x-y
    let sottrazione2 = y-x
    console.log(sottrazione)
    console.log(sottrazione2) */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

  /*
    let name1 = "john"
    let name2 = "John"
    let uguaglianza = name1 === name2
    console.log(uguaglianza) 
 
    EXTRA
    let results = name2.toLowerCase()
    uguaglianza = name1 === results
    console.log(uguaglianza) */
   
  /*Esercizio extra conversione tra gradi celsius a fahrenheit 
    const num1 = 9
    const num2 = 5
    const num3 = 32
    let celsius = prompt("inserisci i gradi Celsius da convertire in gradi Fahrenheit")
    let fahre = ( celsius * num1 / num2 ) + num3
    alert("Ci sono circa " +fahre+ " gradi Fahrenheit")
    */
