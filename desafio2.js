class Atleta{
  
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  
  calculaCategoria(){
    let categoria
    const idade = this.idade
    
    if(idade>=9 && idade<=11){
      categoria = 'Infantil'
    }
    if(idade==12 && idade==13){
      categoria = 'Juvenil'
    }
    if(idade==14 && idade==15){
      categoria = 'Intermediário'
    }
    if(idade>=16 && idade<=30){
      categoria = 'Adulto'
    }
    else{
      categoria = 'Sem categoria'
    }
    
    return categoria
  }
  
  calculaIMC(){
    return this.peso / (this.altura * this.altura)
  }
  
  calculaMediaValida(){
    const notas = this.notas.sort((a,b) => b-a)
    let notasComputadas = notas.slice(1,4)
    let media = notasComputadas.reduce((acumulador, atual) => {
      return acumulador+atual;}, 0) / notasComputadas.length;
    return media
  }
  
  obtemNomeAtleta(){
    return this.nome;
  }
  
  obtemIdadeAtleta(){
    return this.idade;
  }
  
  obtemPesoAtleta(){
    return this.peso;
  }
  
  obtemNotasAtleta(){
    return this.notas;
  }
  
  obtemCategoria(){
    return this.calculaCategoria();
  }
  
  obtemIMC(){
     return this.calculaIMC();
  }
  
  obtemMediaValida(){
    return this.calculaMediaValida();
  }
  
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
    
console.log("Nome: " + atleta.obtemNomeAtleta())
console.log("Idade: " + atleta.obtemIdadeAtleta())
console.log("Peso: " + atleta.obtemPesoAtleta())
console.log("Altura: " + atleta.altura)
console.log("Notas: " + atleta.obtemNotasAtleta())
console.log("Categoria: " + atleta.obtemCategoria())
console.log("IMC: " + atleta.obtemIMC())
console.log("Média válida: " + atleta.obtemMediaValida())