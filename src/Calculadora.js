
export default class Calculadora {

    static soma(a,b,c,d,e){
        if(a+b+c+d+e)
            return a+b+c+d+e
        else
            return a+b
    }

    static subtracao(a,b,c,d,e){
        if(a-b-c-d-e)
            return a-b-c-d-e
        else    
            return a-b
    }

    static multiplicacao(a,b,c,d,e){
    if (typeof b === 'string')
        return (a + String(b));
    if (a*b*c*d*e)
        return a*b*c*d*e
    else
        return a*b
    }

    static divisao(a,b,c,d,e){
    if (a/b/c/d/e)
        return a/b/c/d/e
    else
        return a/b
    }

    static exponenciacao(a,b){
        return a ** b
    }

    static raizquadrada(a){
        return (Math.sqrt(a))
    }

    static geometriaeuclediana(a,b,c){
        if ((a+b+c) <= 180)
            return a+b+c
    }

    static circunferencia(a){
        return (2*3.14*a)
    }

    static distanciaterralua(a){
            return Math.floor((1000/a)*384400)

    }
}