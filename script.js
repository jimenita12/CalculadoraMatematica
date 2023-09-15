class Calculadora{
    constructor(){
        this.factorialInput = document.getElementById("factorialInput");
        this.factorialResultado = document.getElementById("factorialResultado");
        this.fibonacciInput = document.getElementById("fibonacciInput");
        this.fibonacciResultado = document.getElementById("fibonacciResultado");
        this.mcdInput = document.getElementById("mcdInput");
        this.mcdInput1 = document.getElementById("mcdInput1");
        this.mcdInput2 = document.getElementById("mcdInput2");
        this.mcdResultado = document.getElementById("mcdResultado");
    }

    calcularFactorialRecursivo(n){
        if(n === 0 || n===1){
            return 1;
        }else{
            return n * this.calcularFactorialRecursivo(n-1);
        }
    }

    calcularFactorial(n){
        const numero = parseInt(this.factorialInput.value);
        if (!isNaN(numero) || numero>=0){
            const factorial = this.calcularFactorialRecursivo(numero);
            this.factorialResultado.textContent=`El factorial del numero ${numero} es ${factorial}`;
        }else{
            this.factorialResultado.textContent="Por favor, ingrese un numero válido";
        }
    }

    calcularFibonacciRecursivo(n){
        if(n<=1){
            return n;
        }else{
            return this.calcularFibonacciRecursivo(n-1) + this.calcularFibonacciRecursivo(n-2);
        }
    }

    calcularFibonacci(){
        const numero = parseInt(this.fibonacciInput.value);
        if(!isNaN(numero) && numero >=0){
            const fibonacci = this.calcularFibonacciRecursivo(numero);
            this.fibonacciResultado.textContent=`El número en la posición ${numero} de la serie de Fibonacci es ${fibonacci};`;
        }else{
            this.fibonacciResultado.textContent="Por favor, ingrese un número válido";
        }
    }

    calcularMCDrecursivo(a, b){
        if(b===0){
            return a;
        }else{
            return this.calcularMCDrecursivo(b, a % b);
        }
    }

    calcularMCD(){
        const numero1 = parseInt(this.mcdInput1.value);
        const numero2 = parseInt(this.mcdInput2.value);

        if(!isNaN(numero1) && !isNaN(numero2)){
            const mcd = this.calcularMCDrecursivo(numero1, numero2);
            this.mcdResultado.textContent=`El Máximo Común Divisor de los números ${numero1} y ${numero2} es de ${mcd}`;
        }else{
            this.mcdResultado.textContent="Por favor, ingrese números válidos";
        }
    }
}

const calculadora = new Calculadora();

document.getElementById("factorialBoton").addEventListener("click", ()=>{
    calculadora.calcularFactorial();
});

document.getElementById("fibonacciBoton").addEventListener("click", ()=>{
    calculadora.calcularFibonacci();
});

document.getElementById("mcdBoton").addEventListener("click", ()=>{
    const numero1 = parseInt(calculadora.mcdInput1.value);
    const numero2 = parseInt(calculadora.mcdInput2.value);
    calculadora.calcularMCD(numero1, numero2);
});