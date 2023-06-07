# Guia de contribuição para o site (landing page) do MinhaCena

## Instalação

Os detalhes de como instalar e executar o projeto podem ser encontrados no README.md
## Padronização de código e Commits
Por convenção, commits, pull requests, labels devem ser escritos em inglês.

### Linting
Esse repositório usa [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) para lint e formatação de código.

```bash
# Para fazer o lint do código todo rode o comando
$ npm run lint
```

### Commits
Este projeto segue a especificação [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

A configuração do Conventional Commits no repositório é feita com [CommitLint + Husky](https://github.com/conventional-changelog/commitlint)

Você também pode configurar o [Commitizen](https://github.com/commitizen/cz-cli) para automatizar a padronização dos seus commits

**Estrutura da mensagem de commmit**

<pre>
<b><a href="#types">&lt;type&gt;</a></b></font>(<b><a href="#scope">&lt;optional scope&gt;</a></b>): <b><a href="#subject">&lt;subject&gt;</a></b>
<sub>empty separator line</sub>
<b><a href="#body">&lt;optional body&gt;</a></b>
<sub>empty separator line</sub>
<b><a href="#footer">&lt;optional footer&gt;</a></b>
</pre>


### Types
Descreve a categoria do commit. **Obrigatótio**.

* **`feat`** - Um commit do tipo "feat" inclui ou até mesmo remove (em casos específicos) um recurso no projeto.

* **`fix`** - Um commit do tipo "fix" soluciona um problema/bug.

* **`refactor`** - Um commit do tipo "refactor" reescrevem/reestruturam o código, porém não alteram nenhum comportamento.

* **`perf`** - Um commit do tipo "perf" faz uma melhora de performance.

* **`style`** - Um commit do tipo "style" faz mudanças que não afetam o significado do código como (espaço em branco, formatação, ponto e vírgula, etc).

* **`test`** - Um commit do tipo "test" adiciona novos testes ou corrige testes existentes.

* **`docs`** - Um commit do tipo "docs" afeta somente arquivos de documentação.

* **`build`** - Um commit do tipo "build" afeta ferramentas de build, dependências, etc.

* **`ci`** - Um commit do tipo "ci" afeta arquivos de configuração ci, scripts de deploy, etc

* **`chore`** - Um commit do tipo "chore" não se enquadra necessariamente em nenhum dos tipos anteriores, exemplo modificações no `.gitignore`

* **`revert`** - Um commit do tipo "revert" reverte as mudanças de um commit anterior

### Scope
Um escopo pode ser fornecido fornecer informações contextuais adicionais.
**Opcional**.

### Subject
É a mensagem do commit em si que deve conter uma breve descrição sobre as mudanças adicionadas pelo commit. **Obrigatório**.

### Body
Pode incluir uma descrição mais longa sobre o commit. **Opcional**.

### Footer
Caso exista uma "Breaking Change" as informações sobre ela serão inseridas no rodapé do commit com o texto *BREAKING CHANGE:* . Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.
No rodapé também é possível referênciar uma issue pelo seu id. **Opcional**.

### Exemplos


**Mensagem de commit básica com type e subject**

feat: add Product component

**Mensagem de commit com type, scope, subject**

feat(shopping cart): add CreditCard component

**Mensagem de commit com type, scope, subject e body**

fix(api): add missing parameter to service call

The error occurred because of the variable x.

**Mensagem de commit com type, subject, footer(sem BREAKING CHANGE)**

refactor: implement calculation method as recursion

ref #13

**Mensagem de commit com type, scope, subject, body e footer(com BREAKING CHANGE)**

feat(api): remove CEP api

The CEP is no longer provide by the public api.

ref #12

BREAKING CHANGES: the form no longer supports CEP list.


## Fluxo de Desenvolvimento

* Clone o repositório
* Crie ou assine uma **issue** existente
* Crie a partir da **branch develop** uma branch do tipo **feat** e um nome que faça referência a issue, exemplo:

	para a **issue #22 - Add Terms of Use page**

	a branch pode ser nomeada assim **feat/terms-of-use**
* Faça um pull request, referencie a issue e solicite code review
