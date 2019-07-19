
$(function() {
    const info = {
        'Peso' : {
            'tit1' : {
                'Peso Total' : {
                    'l1c1' : '3.43 MB' ,
                    'l2c1' : '914 KB',
                    'l3c1' : '1.53 MB',
                    'l4c1' : '6.55 MB',
                    'l5c1' : '240 KB',
                },
            },
            'tit2' : {
                'Peso em Disco' : {
                    'l1c2' : '3.48 MB',
                    'l2c2' : '1.02 MB',
                    'l3c2' : '1.54 MB',
                    'l4c2' : '6.86 MB',
                    'l5c2' : '340 KB',
                },
            },                                                                                                  
            'tit3': {
                'N/A' : {
                    'l1c3' : '',
                    'l2c3' : '',
                    'l3c3' : '',
                    'l4c3' : '',
                    'l5c3' : '',
                },
            },
            'tit4': {
                'N/A' : {
                    'l1c4' : '',
                    'l2c4' : '',
                    'l3c4' : '',
                    'l4c4' : '',
                    'l5c4' : '',
                },
            },
            'subtitle' : { 'Objetos são classificados de acordo com o Peso total do arquivo de framework e peu espaço ocupado no disco. Quanto menor for o mesmo mais rápido será para o navegador carregar o sistema.' : {'a' : ''},},
        },
        'Componentes' : {
            'tit1' : {
                'Quantidade' : {
                    'l1c1' : 'Alta',
                    'l2c1' : 'Mediana',
                    'l3c1' : 'Alta',
                    'l4c1' : 'Muito alta',
                    'l5c1' : 'Muito baixa',
                },
            },   
            'tit2' : { 
                'Variações' : {
                    'l1c2' : 'Alta',
                    'l2c2' : 'Mediana',
                    'l3c2' : 'Alta',
                    'l4c2' : 'Muito alta',
                    'l5c2' : 'Muito baixa',
                },
            },
            'tit3' : { 
                'N/A' : {
                    'l1c3' : '',
                    'l2c3' : '',
                    'l3c3' : '',
                    'l4c3' : '',
                    'l5c3' : '',
                },
            },
            'tit4': {
                'N/A' : {
                    'l1c4' : '',
                    'l2c4' : '',
                    'l3c4' : '',
                    'l4c4' : '',
                    'l5c4' : '',
                },
            },
            'subtitle' : { 'Componentes são os elementos que existem dentro do framework que permitem alguma alteração no sistema. Variações trata-se de outras opções do mesmo comando permitindo maior liberdade do sistema, ex: no Semantic UI um botão pode possuir bordas de formatos variados e cores variadas permitindo maior liberdade para o usuário. O todo é classificado de acordo com os valores: \n-Muito Baixo : 29 ou -; \n-Baixo: 30 a 39; \n-Mediano: 40 a 49; \n-Alto : 50 a 59; \n-Muito alto: 60 a 69; \n-Excelente: 70 ou +.' : {'a' : ''},},
        },
        'Consolidação' : {
            'tit1':{ 
                'Contribuidores':{
                    'l1c1' : '1000',
                    'l2c1' : '253',
                    'l3c1' : '985',
                    'l4c1' : '190',
                    'l5c1' : '57',
                },
            },  
            'tit2':{ 
                'Versão':{
                    'l1c2' : '4.3.1',
                    'l2c2' : '1.0.0',
                    'l3c2' : '6.5.3',
                    'l4c2' : '2.4.1',
                    'l5c2' : '1.0.1',
                },
            },  
            'tit3':{ 
                'Lançamento':{
                    'l1c3' : '2011',
                    'l2c3' : '2018',
                    'l3c3' : '2011',
                    'l4c3' : '2013',
                    'l5c3' : '2013',
                },
            },
            'tit4':{
                'Classificação':{
                    'l1c4' : 'Madura',
                    'l2c4' : 'Não Consolidada',
                    'l3c4' : 'Madura',
                    'l4c4' : 'Consolidada',
                    'l5c4' : 'Não Consolidada',
                },
            },
            'subtitle' : { 'Contribuidores são aqueles que contribuem com a criação de novas versões do framework seja corrigindo problemas ou adicionando novos recursos no mesmo, sua classificação é dada através da seguinte forma: \n-Não Consolidada :  1 ou - anos no mercado,  99 ou - contribuidores, nenhuma versão completa; \n-Consolidada:   Pelo menos 2 anos no mercado, 100 ou + contribuidores, uma versão completa; \n-Madura: Pelo menos 5 anos no mercado, 500 ou + contribuidores, pelo menos 2 versões completas.' : {'a' : ''},},
        },
        'Comunidade' : {
            'tit1':{ 
                'Atividade':{
                    'l1c1' : 'Muito ativa',
                    'l2c1' : 'Ativa',
                    'l3c1' : 'Muito ativa',
                    'l4c1' : 'Inativa',
                    'l5c1' : 'Pouco ativa',
                },
            },  
            'tit2':{ 
                'Atualizações':{
                    'l1c2' : '18759',
                    'l2c2' : '3866',
                    'l3c2' : '16324',
                    'l4c2' : '6684',
                    'l5c2' : '560',
                },
            },  
            'tit3':{ 
                'Atualizações por Mês':{
                    'l1c3' : '40',
                    'l2c3' : '2',
                    'l3c3' : '5',
                    'l4c3' : '0',
                    'l5c3' : '2',
                },
            },
            'tit4': {
                'N/A' : {
                    'l1c4' : '',
                    'l2c4' : '',
                    'l3c4' : '',
                    'l4c4' : '',
                    'l5c4' : '',
                },
            },
            'subtitle' : { 'Atualizações se trata de quantas novas versões do framework são criadas, elas podem variar de acordo com o tempo que estão no mercado e a ativade da sua comunidade' : {'a' : ''},},
        },
        'Simplicidade' : {
            'tit1' : {
                'Comandos' : {
                    'l1c1' : 'Excelente',
                    'l2c1' : 'Boa',
                    'l3c1' : 'Mediana',
                    'l4c1' : 'Baixa',
                    'l5c1' : 'Baixa',
                },
            },
            'tit2' : {
                'Componentes' : {
                    'l1c2' : 'Mediana',
                    'l2c2' : 'Mediana',
                    'l3c2' : 'Mediana',
                    'l4c2' : 'Mediana',
                    'l5c2' : 'Excelente',
                },
            },
            'tit3':{ 
                'N/A':{
                    'l1c3' : '',
                    'l2c3' : '',
                    'l3c3' : '',
                    'l4c3' : '',
                    'l5c3' : '',
                },
            },
            'tit4':{
                'N/A':{
                    'l1c4' : '',
                    'l2c4' : '',
                    'l3c4' : '',
                    'l4c4' : '',
                    'l5c4' : '',
                },
            },
            'subtitle' : { 'Simplicidade de comandos significa se eles usam poucas palavras e se destacam por serem intutitivas as suas funções, ex: No bootstrap o comando col-sm-5 faz uma coluna que terá até o tamanho de tela qualificado como "small" terá tamanho 5'   : {'a' : ''},},
        },
    };

    const details = {
        'fama':{
            'bootstrap_t': 'Bootstrap é o framework CSS mais famoso e mais utilizado do mundo segundo o GitHub devido a sua grande documentação e facilidade de aplicação, o que o torna um framework bastante amigável para iniciantes.',
            'materialize_t' : 'Materialize é segundo framework CSS mais famoso segundo o GitHub tendo várias vantegens que o destacam, mas devido a algumas desvantagens que ele possui ele fica pela sombra do bootstrap.',
            'foundation_t' : 'Foundation é o terceiro mais famoso e usado framework CSS que assim como todos acabam ficando na sombra do Bootstrap devido as qualidades do Bootstrap.',
            'semanticui_t' : 'Semantic UI é o quarto mais famoso e usado framework CSS do GitHub que ao se comparar com o Foundation é bastante similar em números de usuários.',
            'purecss_t' : 'É o mais simples frameworks de todos os acima tendo pouquíssimos recursos em comparação ao anteriores porém ele não fica atrás por causa disso já que sua usabilidade é destinada a softwares mais simples que os demais',
        },
        'destaques' :{  
            'bootstrap_t' : 'Bootstrap é um framework muito bem documentado em sua página, no qual seus princípios de usabilidade e design seguem os princípios padrões para a construção de interfaces. Ele possui em vantagem o reuso excessivo de código e o uso de Jumbotron e Card o fazendo único dentre os outros frameworks. Em contrapartida o mesmo possui excesso de códigos não utilizados o que os torna desnecessários para o programador, apenas servindo para pesar no código e sua padronização extrema de uso fazendo a maioria dos sites que usam bootstrap serem muito iguais.',
            'materialize_t' : 'Materialize é um framework bem documentado que possui uma vasta gama de componentes, respomsividade suportada em qualquer dispositivo, em contrapartida ele não possui suporte ao modelo Flex Box e possui um arquivo muito pesado para trabalho.',
            'foundation_t' : 'Foundation é um framework bem documentado que é construído em SASS o que permite a contrução de aplicações rapidamente, possui maior flexibilidade com todas as classes possuindo um estilo alternativo, utiliza REMs ao invés de pixel eleiminando a necessidade explícita de definir altura e largura para cada dispositivo etc. Porém ele é bastante complexo para iniciantes e possui um arquivo relativamente muito grande tendo vários recursos que normalmente não são utilizados.',   
            'semanticui_t' : 'Semantic UI se destaca utilizando Jquery e LESS(pré-processador de CSS) produzindo resultados mais bonitos nas aplicações, possui uma excelente documentação, grande liberdade de customização,Carrega somente os componentes que se necesita na aplicação minimizando o tamanho do arquivo e consequentemente o tempo de carregamento da página entre outros. Por outro lado ele é bastante complexo para inciantes e não sofre mais manutenção.',
            'purecss_t' : 'Pure CSS é um framework extremamente leve permitindo tempos de carregamentos reápidos até mesmo para microprocessadores, possui matrizes flexíveis de módulos CSS. Só que o mesmo contitui-se apenas de CSS não incluindo Jquery ou plug-ins do Java Script.',              
        },
    };

    const type = {
        'style' : {
            'btn-opcoes' : 'btn btn-outline-dark col-sm-4 btn-opcoes mb-2',
            'btn-hc' : 'btn btn-outline-dark col-xs-1 btn-hc',
            'btn-table' : 'btn btn-outline-dark col-sm-5 btn-table mb-2',
            'z' : 'z thead-dark',
        },
        'stylehc' :{
            'btn-opcoes' : 'btn btn-outline-light col-sm-4 btn-opcoes mb-2',
            'btn-hc' : 'btn btn-outline-light col-xs-1 btn-hc',
            'btn-table' : 'btn btn-outline-light col-sm-5 btn-table mb-2',
            'z' : 'z thead-light',
        },
    };

    const benchmarks = {      
        'fama' : {
            'bootstrap': {
                'bootstrap1': {
                    'skills data boot col-sm-12' : '264.00'
                },
                'bootstrap2': {
                    'skills data bootS col-sm-6' : '132.00'
                }
            },
            'materialize': {
                'materialize1': {'skills data mater col-sm-2' : '44.00' },
                'materialize2': {'skills data materS col-sm-2' : '44.00' }
            },
            'foundation': {
                'foundation1': {'skills data found col-sm-1' : '22.00'},
                'foundation2': {'skills data foundS col-sm-1' : '22.00'}
            },
            'semantic': {
                'semantic1': {'skills data seman col-sm-1' : '22.00'},
                'semantic2': {'skills data semanS col-sm-2' : '44.00'},
            },
            'pure': {
                'pure1': {'skills data pure col-sm-6' : 'dados não fornecidos'},
                'pure2': {'skills data pureS col-sm-1' : '22.00'},
            }, 
        },         
        
        'destaques' : {
            'bootstrap': {
                'bootstrap1': {'skills data boot col-sm-6' : '6'},
                'bootstrap2': {'skills data bootS col-sm-2' : '2'},
            },
            'materialize': {
                'materialize1': {'skills data mater col-sm-2' : '2'},
                'materialize2': {'skills data materS col-sm-2' : '2'},
            },
            'foundation': {
                'foundation1': {'skills data found col-sm-1' : '1'},
                'foundation2': {'skills data foundS col-sm-1' : '1'},
            },
            'semantic': {
                'semantic1': {'skills data seman col-sm-1' : '1'},
                'semantic2': {'skills data semanS col-sm-1' : '1'},
            },
            'pure': {
                'pure1': {'skills data pure col-sm-3' : '3'},
                'pure2': {'skills data pureS col-sm-1' : '1'},
            },          
        }
    };
    function changeTableTexts(table){
        $('#top').html(table);
        $.each(info[table],function(i,elem){
            let id = '#'+i;
            $.each(elem,function(i,elem){
                if(id == "#subtitle"){
                    let a = i.split('\n');
                    let b = '';
                    $.each(a,function(i,e){
                        b += "<p>"+e+"</p>";
                    });
                    $(id).html(b);
                }
                else $(id).html(i);
                $.each(elem,function(i,elem){
                    let idc = '#'+i;
                    $(idc).html(elem);
                })    
            })
        })
    }

    function changeTableNames(n1,n2){
        $('.t').html(n1);
        $('.y').html(n2);
    }

    function changeLimitValue(limit) {
        $('#target-limit').html("Limite: "+limit);
    }

    function changeTablesAttributes(table)
    {
        $.each(benchmarks[table], function(i, elem) {
            $.each(elem, function(i, elem){
                let id = "#" + i;      
                $.each(elem, function(i, elem){                
                    $(id).removeClass($(id).attr('class')).addClass(i);            
                    $(id).html(elem);
                });
            });
        });
    };

    function HideShowText(n,table){
        if(n == 0 && table == null){
            $.each(details, function(i, elem){
                $.each(elem, function(i, elem){  
                    let id = "#" + i;
                    $(id).hide();
                });
            });
        }
        else if(n == 1){
            if($('#'+table).is(":visible")){$('#'+table).slideUp(500);}               
            else {$('#'+table).slideDown(500);}         
        }
    };

    function ChangeTextMessages(table){
        $.each(details[table], function(i, elem) {
            let id = "#" + i; 
            $(id).html(elem);
        });    
    };

    function changeSiteColors(style,stylehc){
        if($("#css").attr('href') == "./Assets/stylehc.css"){
            let a = ($('#css').attr('href'));
            let b = a.replace( a ,"./Assets/style.css");
            $('#css').attr('href', b);
            $.each(type["style"], function(i, elem) {
                let c = "." + i; 
                $(c).removeClass($(c).attr('class')).addClass(elem); 
            })
        }
        else{
            let a = ($('#css').attr('href'));
            let b = a.replace( a ,"./Assets/stylehc.css");
            $('#css').attr('href', b);
            $.each(type["stylehc"], function(i, elem) {
                let c = "." + i; 
                $(c).removeClass($(c).attr('class')).addClass(elem); 
            })
        }
    }
    let $titles = $('.ar');
    let $botoes = $('.btn-opcoes');
    let $table = $('.btn-table');
    let $hc = $('.btn-hc');
    let t = null;
    let n = 0;
    $botoes.click(function(){    
        n = 0;
        t = null;
        let limit = $(this).data('limit');
        let table = $(this).data('table');
        let tag1 = $(this).data('tag');
        let tag2 = $(this).data('tag2');
        changeLimitValue(limit);
        changeTablesAttributes(table);
        changeTableNames(tag1,tag2);       
        HideShowText(n,t);
        ChangeTextMessages(table);       
    });
    $titles.click(function(){  
        n = 1;                
        t = $(this).data('t');
        HideShowText(n,t);           
    }); 
    $table.click(function(){
        let table = $(this).data('table');
        changeTableTexts(table);
    });
    $hc.click(function(){
        let style = $(this).data('style');
        let stylehc = $(this).data('stylehc');
        changeSiteColors(style,stylehc);
    });
});