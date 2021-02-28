 var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
var ext = ['com', 'net', 'org', 'net'];
//let urls = [];



for (let i=0; i<pronoun.length; i++){
    for (let j=0; j<adj.length; j++){
        for (let k=0; k<noun.length; k++){
            for (let l=0; l<ext.length; l++){

//Primera URL con la extension .com o .net de acuerdo a la variable ext
console.log(pronoun[i]+adj[j]+noun[k]+'.'+ext[l])

//la segunda URL solo toma la primera 3 variables sin la extesion ext
let newURL=(pronoun[i]+adj[j]+noun[k]);

let URL1=newURL.slice(0,newURL.length-3);//tomamos newURL y le decimos qu muestre desde el primer item menos los ultimos 3, por eso escribimos .length-3
let URL2=newURL.slice(newURL.length-3,newURL.length);// esta URL le decimos que solo tome los ultimos 3 item.por eso el rango .length-3 hasta el ultmo valor.

console.log(URL1+'.'+URL2);


}
}
}
}