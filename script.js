Vue.config.devtools = true;


const vueApp = new Vue({
    el :'#box',
    data : {
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
        messaggio: 'Vue hello', //



        
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.
        foto: 'img/Logo.png', 
        classeTesto: 'text-blue'
    }
})

