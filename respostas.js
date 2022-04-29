
//Atividade 1


class Skywalker{
    constructor(heroi,nome,idade){
        this.heroi= heroi;
        this.nome=nome;
        this.idade=idade;
    }

    avancarTempo(tempo){
        this.idade+=tempo
        if(this.idade>=19){
            this.heroi=false
            this.nome='Vader'
            return this
        }
    }
}






//Atividade2
class NomeIdade{
    static IdadeVingador(){

        let result=[]

        for(let i=0; i<idades.length;i++){
            result.push(`${idades[i].nome} tem ${idades[i].idade} anos`)
        }
        return result
    }
}


//Atividade3
class Personagem{
    constructor(nome, idade){
        this.nome=nome;
        this.idade=idade;
    }
}

class Heroi extends Personagem{
    constructor(nome, idade, tipo, postura){
        super(nome, idade)
        this.tipo=tipo;
        this.postura=postura;
        this.poder=this.AtribuiDano()
    }

    AtribuiDano(){
        for(let i=0; i< habilidades.length; i++){
            if(habilidades[i].tipo== this.tipo){
                if(this.postura=='ataque'){
                    return habilidades[i].postura.ataque
                }
                else{
                    return habilidades[i].postura.defesa
                }

                }
            }
        }
    }




//Atividade4

class Mercado{
    constructor(alimentos){
        this.alimentos= alimentos 

    }
    checarCompras(){

        //declaro uma variavel de apoio que vai exibir meus resultados no final
        let result=[]
        
        //vou percorrer a pessoa
        for(let i=0;i<pessoa.length;i++){

            //percorrendo cada pessoa, verifico quem possui a propriedade compras verdadeira
            if(pessoa[i].compras===true){
                
                
                    for(let j=0; j<pessoa[i].listaDeCompras.length; j++){
                        //se em ao menos alguma lista for igual aos itens do mercado, passo a mensagem
                        if(pessoa[i].listaDeCompras[j] === this.alimentos[j]){
                            result.push(`Temos seu item: ${this.alimentos[j]} no nosso mercado ${pessoa[i].nome}`) //repare em como acessar o nome dentro do looping                    
                    
                }
            }

            }
        }
        return result
    }
}