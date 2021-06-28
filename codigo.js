//CALCULADORA EJEMPLO

let numero = Number(prompt("Ingresá tu número"));

for (let i = 1; i <=50; i++){
    console.log(numero * i)
}

//PARA NUMEROS PARES:
//FUNCION MODULO = % ->si la división por x numero es entera

for (let i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        console.log(i + " es par");
    }else{
        console.log(i + " es impar");
    }
}