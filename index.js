//Todas as atividades possuem console.log para mostrar no navegador o resultado esperado e o resultado que você esta obtendo.
// Por ser enviado na sexta, caso queira ver como foi resolvido, pode utilizar a aba resposta(mas tentem bastante antes).




//--------------------------------Atividade1

// Modele uma classe chamada Skywalker, que deve receber os seguintes parametros no construtor:
// Heroi, que vai receber true ou false
// Nome, que recebe uma string
// Idade, que recebe um numero

// Crie um metodo que avance o tempo e envelhece nosso personagem na quantidade de anos que for passada como parametro
// Esse metodo tambem checa que se nosso personagem tiver idade maior ou igual a 19 anos o nome dele deve ser Vader e deve se tornar um vilão



//Testes, descomente o bloco abaixo enquanto estiver tentando testar a atividade acima

/*
let Anakin= new Skywalker(true,'Anakin',9)


Anakin.avancarTempo(5)
console.log('Resultado esperado= Skywalker {heroi: true, nome: Anakin, idade: 14} ')
console.log(Anakin)


Anakin.avancarTempo(5)
console.log('Resultado esperado= Skywalker {heroi: false, nome: Vader, idade: 19} ')
console.log(Anakin)
*/















//--------------------------------Atividade2
const idades=[

    {   nome:'Hank',
        idade:60
    },

    {   nome:'Tony',
        idade:53
    },

    {   nome:'Natasha',
        idade:94
    },

    {   nome:'Steve',
        idade:38
    },
]


//Crie uma classe NomeIdade, que tenha um metodo estatico IdadeVingador, que vai mostrar num array o nome de cada vingador com sua respectiva idade.
// Ex: 'Hank tm 60 anos'


//Testes, descomente o bloco abaixo enquanto estiver tentando testar a atividade acima

/*
console.log('Resultado esperado:[Hank tem 60 anos, Tony tem 53 anos, Natasha tem 94 anos, Steve tem 38 anos]')
console.log(NomeIdade.IdadeVingador())
*/















//--------------------------------Atividade3

const habilidades=[
    
    {
        tipo:'fogo',
        postura:{ataque:50, defesa:15}
    },
    {
        tipo:'ar',
        postura:{ataque: 20, defesa:20 }
    },

    {
        tipo:'agua',
        postura:{ataque:30, defesa:55}
    }

]

// Modele uma classe Personagem, que recebe nome, idade

// Modele uma classe Heroi, que extende(use super) Personagem e recebe alem de nome e idade, um tipo e uma postura(ataque ou defesa)
// e poder(que recebe o seu valor pelo metodo asseguir)

// Crie um método AtribuiDano que verifique o poder na const habilidades checando o valor do poder selecionado e
// retornando esse valor para o poder do personagem criado

// Ex: personagem com tipo=agua e postura=defesa, deve ter seu poder retornado pelo metodo como 55





//Testes, descomente o bloco abaixo enquanto estiver tentando testar a atividade acima


/*
let aang= new Personagem('Aang',11)
console.log('Resultado esperdo: Personagem  {nome: Aang, idade: 11')
console.log(aang)

let avatar = new Heroi('Korra',16,'agua','ataque')
console.log('Resultado esperado: Heroi {nome: Korra, idade: 16, tipo: agua, postura: ataque, poder: 30}')
console.log(avatar)
*/











































//--------------------------------Atividade4

const pessoa=[
    {
        nome:'Bob',
        compras:false,
    },

    {
        nome:'Logan',
        compras:true,
        listaDeCompras:['Arroz','Feijão','Batata'],        
    },

    {
        nome:'Jean',
        compras:true,
        listaDeCompras:['Peixe','Maça','Biscoitos'],
    }
]



// Crie uma classe Mercado, que recebera a propriedade 'alimentos' 
// Crie um método que checa se a lista de compras das pessoas passadas na const pessoa possui os itens que são passados no construtor do nosso mercado.



//Testes, descomente o bloco abaixo enquanto estiver tentando testar a atividade acima

/*
let MercadinhoXavier = new Mercado(['Arroz','Feijão','Batata'])
console.log('O mercadinhoXavier tem : '+MercadinhoXavier.alimentos)
console.log('Resultado esperado : Temos seu item: Arroz no nosso mercado Logan, Temos seu item: Feijão no nosso mercado Logan, Temos seu item: Batata no nosso mercado Logan ')
console.log(MercadinhoXavier.checarCompras())
*/