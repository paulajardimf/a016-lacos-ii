const numero = prompt("Insira um número para visualizar a sua tabuada:");

const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i in tabuada) {
    console.log(`${numero} X ${(+i)+1} = ${numero * ((+i)+1)}`);
}