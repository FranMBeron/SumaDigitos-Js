function SumarDigitos() {

    numeros = new Array(4);

    //numeros[0]= '3433'
    //numeros[1]= '64323'
    //numeros[2]= '8'
    //numeros[3]= '-1'

    
    for (var i = 0 ; i <numeros.length; i++) {
        var v;
        v = prompt ('Ingrese un numero: ');
        numeros[i] = v;
    }
    

    for (var z = 0; z < numeros.length; z++) {
        if (numeros[z] < 0) {
            break
        }
        console.log('####### PROCESANDO: Entrada - ' + numeros[z] + '#######')
        //document.write(' Numero: '+numeros[z]+' suma: ')
        var num = 0 
        var suma = 0
        for (var f = numeros[z].length; f > 0 ; f--){
            num= numeros[z]%10
            console.log('---- NUMERO: Entrada - ' + num + '----')
            //document.write(num+'+')
            suma= suma + num
            console.log('---- SUMA: ' + suma + '----')

             entera = Math.trunc(numeros[z]/10)
             numeros[z] = entera
            console.log('---- NUMERO: Resto - ' + entera + '----')
        }

    }
}

document.write(SumarDigitos());