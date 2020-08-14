
# CURSO DE VUE JS 2

https://academy.especializati.com.br/curso/vuejs-2

APRENDA A CRIAR APLICAÇÕES COM O MELHOR FRAMEWORK JAVASCRIPT DA ATUALIDADE, ESTE É O FRAMEWORK JS QUE MAIS CRESCE, TUDO POR CONTA DA SIMPLICIDADE E RECURSOS AVANÇADOS.

## <a name="indice">Índice</a>

1. [01 - Organização do Curso de Vue JS](#parte1)     
2. [02 - Data Binding Vue JS](#parte2)     
3. [03 - Events](#parte3)     
4. [04 - Propriedades e Style](#parte4)     
5. [05 - Condições e Loops](#parte5)     
6. [06 - Jogo](#parte6)     
7. [07 - Components](#parte7)     
8. [08 - Vue CLI com Webpack](#parte8)     
9. [09 - Formulários e Validação](#parte9)     
10. [10 - Avançando com components](#parte10)     
11. [11 - Vue router](#parte11)     
12. [12 - Animations e Transactions](#parte12)     
13. [13 - Vue http](#parte13)     
14. [14 - Vuex](#parte14)     
15. [15 - Axios](#parte15)     
---


## <a name="parte1">1 - 01 - Organização do Curso de Vue JS</a>

- 01 - O que é o Vue JS

    - https://vuejs.org/v2/guide/

- 02 - Ferramentas Necessárias Curso de Vue JS

    - Visual Studio Code: https://code.visualstudio.com/
    - Chrome: https://www.google.com.br/chrome/browser/desktop/index.html
    - Git: https://git-scm.com/
    - Cmder: http://cmder.net/
    - Vue DevTools: https://github.com/vuejs/vue-devtools
    - NodeJS: https://nodejs.org/en/

[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - 02 - Data Binding Vue JS</a>

- 01 - Hello World em Vue JS
- 02 - Data Binding Vue JS

```html
<div id="app">
    <h1>{{title}}</h1>
    <p>{{description}}</p>
    <p>{{isActive == true ? 'Ativo' : 'Não ativo'}}</p>
    <a v-bind:href="url" :title="title" href="">{{textAcademic}}</a>
</div>


<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            title: 'Hello Vue!',
            description: 'Descrição...',
            isActive: true,
            textAcademic: "Curso de Vue",
            url: "https://josemalcher.net"
        }
    })
</script>
```

- 03 - Two Way Data Binding Vue JS

```html
<div id="app">
    <input type="text" placeholder="Informe algo" v-model:value="name">
    <p>{{name}}</p>
    <p>{{name}}</p>
    <p>{{name}}</p>
</div>


<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            name: ''
        }
    })
</script>
```

- 04 - Diretiva v-once Vue JS

```html
<div id="app">
    <h1 v-once>{{name}}</h1>
    <input type="text" placeholder="texto qualquer" v-model:value="name">
    <p>{{name}}</p>
    <p>{{name}}</p>
</div>


<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            name: 'Nome teste'
        }
    })
</script>
```

- 05 - Diretiva v-html Vue JS

```html
<div id="app">
    <h1>{{title}}</h1>
    <div v-html="description"></div>
</div>


<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            title: "Titulo teste",
            description: "<strong>Texto teste em negrito html</strong> texto normal"
        }
    })
</script>
```


[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - 03 - Events</a>

- 01 - Eventos no Vue JS

```html
<div id="app">
    <input type="text" v-on:keyup="count++">

    <hr>
    <button @click="count++">Incrementar</button>
    {{count}}
    <button @click="count--">Decrementar</button>

</div>



<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            count: 0
        }
    })
</script>
```

- ssssssss

```html
<div id="app">

    <input type="text" @keyup="changeInput">
    <button @click="changeInputTwo(2)">Incrementar 2</button>

    <input type="text" @keyup="changeInputThree(2, $event)">

    {{count}}
</div>



<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            count: 0
        },
        methods:{
            changeInput: function (event) {
                console.log(event.target.value)
            },
            changeInputTwo: function (value) {
                this.count += value
            },
            changeInputThree: function (value, event) {
                value += parseInt(event.target.value)
                this.count += value
            }
        }

    })
</script>
```

- 03 - Eventos de Teclados no Vue JS

```html

<div id="app">
    <input type="text" @keyup.enter="changeValue" @keyup.up="changeValueUp" @blur="medhotBlur">

    {{valueText}}
</div>



<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            valueText: ''
        },
        methods:{
            changeValue(event){
                this.valueText = event.target.value
            },
            changeValueUp(event){
                alert('ALERT UP OK')
            },
            medhotBlur(event){
                console.log(event);
            },
            codTecla(event){
                console.log(event.keyCode);
            }
        }
    })
</script>

```


- 04 - Eventos Teclas Modificadoras no Vue JS

```html
<div id="app">
    <!--<div @click.ctrl="testeEvent">
        Click AQUI!
    </div>-->

    <div @click.ctrl.exact="testeEvent">
        Click AQUI!
    </div>

    <div @click.ctrl.63="testeEvent">
        Click AQUI!
    </div>

    <div @click.alt="testeEvent">
        Click AQUI!
    </div>

    <div @click.shift="testeEvent">
        Click AQUI!
    </div>

    <div @click.meta="testeEvent">
        Click AQUI!
    </div>
</div>



<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {

        }, methods:{
            testeEvent(){
                alert("TESTE OK");
            }
        }
    })
</script>
```

- 05 - Eventos Teclas Modificadoras de Sistema

```html
<div id="app">
    <a :href="urlLink" @click.prevent="showAlert">{{textLink}}</a>
    <hr>
    <form action="#" method="post" @submit.prevent="showAlert">
        <input type="text" placeholder="Nome">
        <button type="submit">Enviar Form</button>
    </form>
    <hr>
    <button @click.once="showAlert">Enviar Formulário</button>
</div>



<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            textLink: "Jose Malcher Jr.",
            urlLink: "https://josemalcher.net"
        }, methods:{
            showAlert(event){
                //event.preventDefault();
                alert('clicou aqui');
            }
        }
    })
</script>
```

- 06 - Mais Sobre Eventos no Vue JS

    - https://br.vuejs.org/v2/guide/events.html

[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - 04 - Propriedades e Style</a>

- 01 - Propriedades Computadas vs Métodos no Vue JS

- https://vuejs.org/v2/guide/computed.html
    
```html
<div id="app">
    <button @click="count++">Incrementar</button>
    <button @click="count--">Decrementar</button>
    <button @click="counttwo--">Decrementar 2</button>
    <p>{{count}} || {{countComputed}}  || {{countMethods()}} </p>
    <p>{{counttwo}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            count: 0,
            counttwo: 0
        },
        computed:{
            countComputed: function (){
                if(this.count >= 5){
                    console.log('COMPUTED');
                }
                return this.count >= 5 ? 'MAIOR que 5' : 'menor que 5';
            }
        },methods:{
            countMethods: function (){
                if(this.count >= 5){
                    console.log('METHOD');
                }
                return this.count >= 5 ? 'MAIOR que 5' : 'menor que 5';
            }
        }

    })
</script>
```


- 02 - (Watchers) Observadores Vue JS

- https://vuejs.org/v2/guide/computed.html#Watchers

```html
<div id="app">
    <button @click="count++">Aumentar</button>
    <p>{{count}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            count:0
        },
        watch:{
            count: function (value) {
                var vm = this;
                setTimeout(function (){
                    vm.count = 0
                }, 3000)
            }
        }

    })
</script>
```

- 03 - Styles Vue JS

- https://vuejs.org/v2/guide/class-and-style.html

```html
    <style>
        .active{
            background: green;
        }
        .no-active{
            background: red;
        }
        .default{
            color: yellow;
        }
    </style>

</head>
<body>

<div id="app">
    <div :class="{active : isActive}">
        Exemplo de Style no VUE
    </div>
    <div :class="{active : isActive}">
        Exemplo de Style no VUE
    </div>
    <div class="default" :class="isActive ? 'active': 'no-active'">
        Exemplo de Style no VUE
    </div>

    <div :class="['default', isActive ? 'active' : 'no-active']">
        Exemplo de Style no VUE with Array
    </div>

    <div :class="classObject">
        Exemplo com objeto
    </div>

    <div :style="{display: ['-webkit-flex', '-moz-flex', 'flex']}">
        Exemplo com objeto
    </div>

    <button @click="isActive = !isActive">Alternar Classe</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            isActive: false,
            classObject: {
                active: true,
                'text-red': true,
                'color-white': true
            }
        }

    })
</script>
```

[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - 05 - Condições e Loops</a>

- 01 - Renderização Condicional no Vue JS (v-if, v-else-if, v-else)

- https://vuejs.org/v2/guide/conditional.html#v-if

```html
<div id="app">
    <div v-if="number < 12">
        {{textExemplo}} = menor que 12
    </div>

    <div v-else-if="number == 20">
        igual a 20
    </div>

    <div v-else>
        Não bateu...
    </div>

    <div v-if="isActive">
        {{textExemplo}}
    </div>
    <div v-else>
        Não Ativo - v-else
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            number: 20,
            isActive: false,
            textExemplo: "Texto Data"
        }

    })
</script>
```




- 02 - Diretiva v-show no Vue JS

```html

<div id="app">
    <div v-if="isActive">
        V-IF
    </div>
    <!---->

    <div v-show="isActive">
        V-SHOW
    </div>
    <!--
    <div wfd-invisible="true" style="display: none;">
        V-SHOW
    </div>
    -->

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            isActive: false

        }

    })
</script>
```

- 03 - Loops de Repetição no Vue JS (Diretiva v-for)

    - https://vuejs.org/v2/guide/list.html
    
```html

    <style>
        .active{
            background: greenyellow;
        }
    </style>

</head>
<body>

<div id="app">
    <ul>
        <li v-for="i in 10">{{i}}</li>
    </ul>
    <hr>
    <ul>
        <li v-for="product in products">{{product}}</li>
    </ul>
    <hr>
    <ul>
        <li v-for="(task, index) in tasks" :class="{active: task.isActive}">
            {{index}} -> {{task.id}} - {{task.name}}
        </li>
    </ul>

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            products: ['TV', 'GELADEIRA', 'MICRO-ONDAS'],
            tasks: [
                {id:1, name: 'Lavar louça', isActive: false},
                {id:2, name: 'Cortar grama', isActive: false},
                {id:3, name: 'estudar', isActive: true}
            ]
        }

    })
</script>
```    
    
- 04 - Filtros no Vue JS

- https://br.vuejs.org/v2/guide/filters.html

```html

    <style>
        .active {
            background: greenyellow;
        }
    </style>

</head>
<body>

<div id="app">
    <ul>
        <li v-for="task in tasks" :class="{active: task.completed}">
            {{task.id}} - {{task.name | toUpperCase}} - {{task.name | toLowerCase}}
        </li>
    </ul>

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>

    Vue.filter('toLowerCase', function (val){
        return val.toLowerCase();
    })

    var app = new Vue({
        el: '#app',
        data: {
            tasks: [
                {id: 1, name: 'Lavar louça', completed: false},
                {id: 2, name: 'Cortar grama', completed: false},
                {id: 3, name: 'estudar', completed: true}
            ]
        },
        filters:{
            toUpperCase(val) {
                return val.toUpperCase()
            }
        }

    })
</script>

```

[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - 06 - Jogo</a>

- 01 - Layout Jogo Vue JS

```html
<!doctype html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06 - JOGO do 21</title>
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div id="app">

    <div class="container text-center">
        <h1>Jogo do 21</h1>
        <div class="row">
            <div class="col-6 active">
                <img src="assets/player1.png" alt="Play 1">
                <p>player 1</p>
            </div>
            <div class="col-6">
                <img src="assets/player2.png" alt="Play 1">
                <p>player 2</p>
            </div>

            <div class="controls col">
                <a href="" class="btn btn-success">Pular</a>
                <a href="" class="btn btn-primary">Finalizar Jogo</a>
                <a href="" class="btn btn-danger">Resetar</a>
            </div>

        </div>
        <hr>
        <div class="row">
            <div class="col-6">
                <a href="">
                    <img src="assets/baralho-cartas.png" alt="" class="carts">
                </a>
            </div>
            <div class="col-6">
                <a href="">
                    <img src="assets/carts/1.png" alt="" class="cart">
                </a>
            </div>
        </div>
    </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>

    Vue.filter('toLowerCase', function (val){
        return val.toLowerCase();
    })

    var app = new Vue({
        el: '#app',
        data: {

        }

    })
</script>
</body>
</html>
```

- 02 - Ação de Pular Jogo Vue JS
- 03 - Escolher Carta e Somar Pontos Jogo Vue JS
- 04 - Opção Finalizar Jogo e Informar Vencedor Jogo Vue JS
- 05 - Resetar Jogo Vue JS
- 06 - Melhorias e Histórico de Jogadas Jogo Vue JS

[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - 07 - Components</a>

- 01 - Apresentação Components Vue JS
- 02 - Components no Vue JS

[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - 08 - Vue CLI com Webpack</a>

- 01 - Instalando Vue CLI
- 02 - Estrutura webpack-simple Vue CLI
- 03 - Components Vue CLI
- 04 - Component Listagem de Itens

[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - 09 - Formulários e Validação</a>

- 01 - Criando Projeto Vue CLI
- 02 - Manipulando Formulários com Vue JS
- 03 - Textarea multiplas linhas (pre)
- 04 - Instalando e Configurando VeeValidate
- 05 - Validando Campos com VeeValidate
- 06 - Validar Submit com VeeValidate

[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - 10 - Avançando com components</a>

- 01 - Comunicação entre components
- 02 - Props Vue JS
- 03 - Props Avançado Vue JS
- 04 - Emit no Vue JS
- 05 - Emit com Parâmetros no Vue JS
- 06 - Preparando Projeto Lista de Tarefas no Vue JS
- 07 - Instalando e Configurando o Bootstrap no Vue JS
- 08 - Listagem das Tarefas com Vue JS
- 09 - Cadastrar Nova Tarefa com Vue JS
- 10 - Editar Tarefas no Vue JS
- 11 - Deletar Tarefa no Vue JS
- 12 - Filtro de Tarefas no Vue JS
- 13 - Corrigir Edição de Tarefas com Filtro

[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - 11 - Vue router</a>

- 01 - Criando Projeto e Instalando o vue-router
- 02 - Criando os Components Para Testar Rotas no Vue JS
- 03 - Criando Rotas e Configurando no Vue JS
- 04 - Remover Hash da URL no Vue JS
- 05 - Rotas Nomeadas no Vue JS
- 06 - Rotas com Parâmetros no Vue JS
- 07 - Rotas com Props no Vue JS
- 08 - Rotas com Redirecionamento no Vue JS
- 09 - Rotas 404 no Vue JS

[Voltar ao Índice](#indice)

---


## <a name="parte12">12 - 12 - Animations e Transactions</a>

- 01 - Primeira Animação com o Vue JS
- 02 - Preparando Quiz de Perguntas no Vue JS
- 03 - Gerar Pergunta Quiz Dinamicamente no Vue JS
- 04 - Exibir Components Dinamicamente no Vue JS
- 05 - Exibir Components Sucesso ou Falha da Resposta
- 06 - Aplicando Rotação Dinâmica entre Components
- 07 - Adicionar o Bootstrap ao Projeto Vue JS
- 08 - Mais Sobre Animações e Transições no Vue JS

[Voltar ao Índice](#indice)

---


## <a name="parte13">13 - 13 - Vue http</a>

- 01 - Instalando e Configurando o Vue Resource
- 02 - Consultar CEP com AJAX no Postmon com Vue JS
- 03 - Exibir Dados Endereço Consulta Ajax com Vue JS
- 04 - Preloader Ajax no Vue JS
- 05 - Tratar Erros Ajax no Vue JS
- 06 - Preparar Projeto Consumir API Restful em Laravel com Vue JS
- 07 - Preparar Rotas no Vue JS
- 08 - Listar Itens API Restful em Laravel no Vue JS
- 09 - Preloader ao Listar dados de API Restful no Vue JS
- 10 - Paginar Registros API com Vue JS
- 11 - Paginação Avançada API com Vue JS
- 12 - Component Cadastrar Produto API com Vue JS
- 13 - Cadastrar Produto API com Vue JS
- 14 - Exibir Validações API com Vue JS
- 15 - Criar Component de Preloader no Vue JS
- 16 - Preparar Para Editar Registro API com Vue JS
- 17 - Editar Registro API com Vue JS
- 18 - Deletar Registro API com Vue JS
- 19 - Confirmar Exclusão Registro API com Vue JS
- 20 - Filtrar Registros API com Vue JS

[Voltar ao Índice](#indice)

---


## <a name="parte14">14 - 14 - Vuex</a>

- 01 - O que é Vuex?
- 02 - Criando Projeto e Instalando o VueRouter e Vuex
- 03 - Criando Rotas Vue
- 04 - Vuex state
- 05 - Vuex mutations
- 06 - Vuex mutations commit
- 07 - Vuex actions
- 08 - Vuex getters
- 09 - Vuex getters filters
- 10 - Organizar Projeto Vuex
- 11 - Vuex Modules

[Voltar ao Índice](#indice)

---


## <a name="parte15">15 - 15 - Axios</a>

- 01 - Criar Projeto Vue JS e Instalar axios
- 02 - Criar Component Busca no Vue JS
- 03 - Requisições Ajax com axios no Vue JS
- 04 - Preloader com axios no Vue JS
- 05 - DevTools Network
- 06 - Tratamento de Erros axios no Vue JS
- 07 - Reset response axios

[Voltar ao Índice](#indice)

---

