$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeiht: true,
    autoplay: true,
    autoplaySpeed: 2000
});


function verificar(){
    var d = Number.parseInt(txtdia.value)
    var m = Number.parseInt(txtmes.value)
    var res = document.querySelector('div#res')
    var signo = ''
    var resumo = ''
   
    if(d >= 21 && m == 3  || d <= 20 &&  m == 4 ){
        signo = 'Áries'
        resumo = 'Pessoas de Áries são líderes natos. Que tem a coragem de mirar alto na vida, combinando perfeitamente com o instinto pioneiro e a firme determinação de realizá-lo. A única palavra que descreve um ariano perfeitamente é destemor, pois não há nada na vida que ele possa virar as costas por medo de falhar. Pessoas do signo de Áries preferem cair e levantar de novo que desistir e aceitar a derrota.'
        
        
    }else if(d >= 21 && m == 4  || d <= 20 &&  m == 5){
        signo = 'Touro'
        resumo = 'Taurinos são duros na queda, e não é nenhuma surpresa que inabalável seja a palavra para eles. Indivíduos do signo de Touro lutam até o fim pelas pessoas que amam e não desistem facilmente delas. Além de ser fortes, taurinos também são perseverantes e não deixam pequenas quedas abalarem a firme convicção que tem em suas próprias forças.'
    }else if(d >= 21 && m == 5  || d <= 20 &&  m == 6){
        signo = 'Gêmeos'
        resumo = 'A única palavra que resume um geminiano perfeitamente é versátil. Ele pode fazer tudo e fazer bem. Pessoas de Gêmeos têm uma inteligência afiada que é difícil de igualar, junto com um presente carisma que o torna popular em todos os lugares que vai. Acrescente a isso a capacidade de se adaptar ao seu entorno no menor tempo possível. Geminianos são almas talentosas que podem ser qualquer coisa que queiram ser.'
    }else if(d >= 21 && m == 6  || d <= 22 &&  m == 7){
        signo = 'Câncer'
        resumo = 'Nem todo mundo pode se colocar no lugar de outra pessoa como o canceriano pode. A palavra que o descreve com perfeição é compassivo, pois ele foi dotado com a capacidade de entender as pessoas e as muitas emoções pelas quais elas passam. Indivíduos de Câncer são bondosos e valorizam os relacionamentos acima de tudo, e é por isso que geralmente são tolerantes e perdoam com muita facilidade.'
    }else if(d >= 23 && m == 7  || d <= 22 &&  m == 8){
        signo = 'Leão'
        resumo = 'Ele acredita em si mesmo e na capacidade de alcançar tudo o que deseja, e é por isso que adora enfrentar desafios e vencê-los. Leoninos são super confiantes e automaticamente assumem a responsabilidade em um grupo de pessoas. E o fato é que as pessoas ao seu redor normalmente esperam que ele tome a liderança. Sempre procurando se sobressair e chamar a atenção, os leoninos são conhecidos por suas ações luxuosas e extravagantes. Amantes de uma supervalorização, os nascidos nesse signo são responsáveis por um magnetismo de dar inveja.'
    }else if(d >= 23 && m == 8  || d <= 22 &&  m == 9){
        signo = 'Virgem'
        resumo = 'Virginianos são práticos, e observadores perspicazes que analisam e pesam todas as situações com seu raciocínio e lógica racionais. A única palavra que descreve a pessoa de Virgem é inquisitivo, porque o virginiano sempre foi curioso sobre o mundo ao seu redor, e não consegue descansar até obter as respostas que satisfarão sua necessidade de saber. Ele gosta de chegar ao fundo das coisas e julga cada situação por si mesmo.'
    }else if(d >= 23 && m == 9  || d <= 22 &&  m == 10){
        signo = 'Libra'
        resumo = 'O libriano domina o ato da diplomacia. Ele sabe instintivamente o que dizer, quando dizê-lo e a quem dizer, pois tem mais impacto. Diplomático é a palavra que o descreve perfeitamente, porque ele sabe como equilibrar todos os aspectos de sua vida de uma forma que a harmonia e a paz reinem. Pessoas de Libra querem o melhor de todos os mundos, e o tato geralmente as entrega nas intenções. Os nascidos sobre o signo de Libra estão sempre em busca de harmonia e equilíbrio. Dotados de uma intuição forte e profunda, os librianos costumam ser bastante cautelosos.'
    }else if(d >= 23 && m == 10 || d <= 21 &&  m == 11){
        signo = 'Escorpião'
        resumo = 'Cada pequena tarefa que ele faz, executa com grande fervor, pois o escorpiano não sabe parar antes de dar tudo de si. A palavra que o resume é intensidade, porque se importa com os pequenos detalhes da vida e persegue a perfeição em tudo que põe a mão. Os nativos do signo de Escorpião abrem a sequência do zodíaco de signos de personalidade forte.'
    }else if(d >= 22 && m == 11  || d <= 21 &&  m == 12){
        signo = 'Sagitário'
        resumo = 'Ele tem a capacidade de buscar e, finalmente, encontrar o bem em tudo e em todos e continuar esperançoso sobre as coisas melhorarem e o mundo se tornar um lugar mais feliz. O sagitariano é alegre e otimista e deseja experimentar as muitas aventuras que a vida tem para oferecer e aproveitá-las ao máximo. Admirados por sua personalidade forte, os nativos de Sagitário são pessoas bastante Alegres e aventureiros, os sagitarianos estão sempre em busca de novas amizades e de novos horizontes.'
    }else if(d >= 22 && m == 12  || d <= 20 &&  m == 1){
        signo = 'Capricórnio'
        resumo = ' Ele é independente, e essa é a palavra que o descreve perfeitamente. O capricorniano é ambicioso e disciplinado, e muitas vezes está pronto para perseverar, pelo tempo que for preciso, para chegar onde acha que merece estar. O indivíduo de Capricórnio é teimoso e acredita em seu potencial, e não depende de ninguém além de si mesmo para realizar todos os seus sonhos. Capazes de qualquer coisa para conseguir aquilo que realmente querem, os capricornianos são pessoas persuasivas, controladoras e charmosas.'
    }else if(d >= 21 && m == 1  || d <= 18 &&  m == 2){
        signo = 'Aquário'
        resumo = 'Os aquarianos tendem a sentir-se pouco à vontade ou embaraçados perante demonstrações emocionais e podem desligar-se dos seus sentimentos. A intimidade não é fácil para eles apesar de poderem ansiar por aconchego. Racionais e objetivos, precisam de ser intelectualmente estimulados. As relações amorosas podem evoluir mais facilmente a partir de uma amizade do que de um jogo de atração física. Sempre que possível, os nativos de Aquário mantêm uma relação com de amizade com ex-amantes e companheiros(as).'
    }else if(d >= 19 && m == 2  || d <= 20 &&  m == 3){
        signo = 'Peixes'
        resumo = 'O pisciano tem uma imaginação vívida que frequentemente oferece as soluções mais criativas até mesmo para problemas mundanos, e Peixes obtém essa criatividade da forte crença que é devido ao trabalho de um poder superior. Os piscianos costumam ser pessoas que adoram viver no mundo das ilusões. Vistos como serenos, os nascidos nesse signo costumam ser bastante sonhadores, talentosos e um tanto'
    }

    res.innerHTML ='Você é de ' + signo + ': ' + resumo
   
}



