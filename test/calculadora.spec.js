import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('+ Testes de Soma +', () => {
    it('Deve somar 15 e 5 quatro vezes, resultando em 20', () => {
        let resultado = Calculadora.soma(15, 5, 5, 5, 5)
        expect(resultado).to.be.equals(35)})
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.equals(1)})
    it('Deve errar a soma de 20 e 17 resultando em 32, mas acertando em ser do tipo "number"', () => {
        let resultado = Calculadora.soma(20, 17)
        expect(resultado).not.to.be.equals(32)
        expect(resultado).to.be.a('number')})
})

describe('- Testes de Subtração -', () => {
    it('Deve subtrair 50 de 10 quatro vezes, resultando em 10', () => {
        let resultado = Calculadora.subtracao(50, 10, 10, 10, 10)
        expect(resultado).to.be.equals(10)})
    it('Deve subtrair -13 de 14 resultando em -27', () => {
        let resultado = Calculadora.subtracao(-13, 14)
        expect(resultado).to.be.equals(-27)})
    it('Deve acertar que é do tipo "number" mas errar a subtração de -3 de 7 resultando em -4', () => {
        let resultado = Calculadora.subtracao(-3, 7)
        expect(resultado).to.be.a('number').and.not.to.be.equals(-4)})
})

describe('* Testes de Multiplicação *', () => {
    it('Deve multiplicar 6 e 5 resultando em 30', () => {
        let resultado = Calculadora.multiplicacao(6, 5)
        expect(resultado).to.be.equals(30)})
    it('Deve multiplicar 4 por "a" resultando em 4a', () => {
        let resultado = Calculadora.multiplicacao(4,'a')
        expect(resultado).to.be.equals(4+'a')})
    it('Deve multiplicar 2 por 3, 4, 5 e 6 resultando em 720, além de ser maior do que 100', () => {
        let resultado = Calculadora.multiplicacao(2, 3, 4, 5, 6)
        expect(resultado).to.be.equals(720).and.above(100)})
})

describe('/ Testes de Divisão /', () => {
    it('Deve dividir 2000 por 2 quatro vezes subsequentes, resultando em 125', () => {
        let resultado = Calculadora.divisao(2000, 2, 2, 2, 2)
        expect(resultado).to.be.equals(125)})
    it('Deve dividir 5 por 10 resultando em 0.5', () => {
        let resultado = Calculadora.divisao(-27, 10)
        expect(resultado).to.be.equals(-2.7)})
    it('Deve dividir 63 por -57 acertando o resultando em 6, além de não ser do tipo "null"', () => {
        let resultado = Calculadora.divisao(63, -57)
        expect(resultado).to.be.equals(-1.105263157894737).and.not.to.be.a('null')})
})

describe('√ Raiz Quadrada √', () => {
    it('Deve calcular a raiz quadrada de 6K241 resultando em 79, sendo  um resultado finito', () => {
        let resultado = Calculadora.raizquadrada(6241)
        expect(resultado).to.be.equals(79).and.to.be.finite})
    it('Deve calcular a raiz quadrada de -10 resultando em uma função NaN.', () => {
        let resultado = Calculadora.raizquadrada(-10)
        expect(resultado).to.be.NaN})
})

describe('! Testes de Exponenciação !', () => {
    it('Deve calcular a potenciação de 20 por 5 resultado em 3M.200K.000, não sendo maior que 5M', () => {
        let resultado = Calculadora.exponenciacao(20, 5)
        expect(resultado).to.be.equals(3200000).and.not.above(5000000)})
    it('Deve calcular a potenciação de 6 por 0 resultando em 1, não sendo do tipo "undefined"', () => {
        let resultado = Calculadora.exponenciacao(6, 0)
        expect(resultado).to.be.equals(1).and.not.a('undefined')})
})

describe('△ Geometria Euclidiana △', () => {
    it('Deve resultar em no máximo 180, ou, não irá executar (erro de forma proposital). Neste caso, deve retornar 30', () => {
        let resultado = Calculadora.geometriaeuclediana(10,10,10)
        expect(resultado).to.be.equals(30)
    })
})

describe('◯ Área da Circunferência ◯', () => {
    it('Deve calcular a área de uma circunferência seguindo a fórmula "Circunferência = 2 * 𝜋 * Raio", onde adicionamos o Raio de 25, resultando em 157', () => {
        let resultado = Calculadora.circunferencia(25)
        expect(resultado).to.be.equals(157)
    })
}) 

describe('🌎 Terra à Lua (a pé) 🌎', () => {
    it('Primeiro, é preciso medir o tamanho do seu passo em metros. Sabendo tal resultado, a função será dada pela divisão do cumprimento do seu passo em KM/Metros e multiplicado pela distância (em KM) entre a Terra e a Lua, resultado em 446M.967K.744 Passos. Obs: E, não sendo falso.', () => {
        let resultado = Calculadora.distanciaterralua(0.86)
        expect(resultado).to.be.equals(446976744).and.not.to.be.a('false')
    })
})