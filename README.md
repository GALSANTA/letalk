# Letalk Desafio

Um desafio para a vaga de desenvolvedor na Letalk.

## 1. Dependencies

* Uma máquina com sistema operacional ubuntu:
    * node v16.17.0.
		```
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        source ~/.bashrc
        nvm install v16.17.0
		```
    * [git version control](https://git-scm.com/);

## 2. Como rodar localmente.

### 2.1. Rodando o front-end

```
git clone https://github.com/GALSANTA/letalk
git checkout front-end
export BACKEND="http://localhost:3333"
npm install
npm start
```


### 2.1. Rodando o back-end

Em outro terminal execute os seguintes comandos

```
git clone https://github.com/GALSANTA/letalk
git checkout back-end
npm install
npm start
```


## 3. Sobre a aplicação

### Coisas que ficaram faltando.

* Tratar no front-end as mensagens de erro de operação que não podiam ser feita no back-end, exemplos: "se o empréstimo for menor que R$ 500000", "se a parcela é abaixo de 1% do valor do empéstimo".
* Garantir que os inputs da simulação, quando estão vazios e o usuário clicou mas não digitou, tenham como voltar o placeholder padrão.
* Salvar cada uma das parcelas no banco e vincular ao cliente a fim de implementação futura de funcionalidade que verifica se a parcela foi paga.

###  Coisas a mais.

* É responsivo

## 4. Endpoints da aplicação.

* [Back-end da aplicação](https://letalk-back-end.herokuapp.com/)
* [Front-end da aplicação](https://letalk-front-end.herokuapp.com/)
* [Rota para pegar as informações salvas no banco](https://letalk-back-end.herokuapp.com/all)