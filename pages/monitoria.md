---
title: Monitoria 20201
permalink: /monitoria/

encerrado: false

periodo: 02/2021

disciplinas:
  - 
    sigla: LOM3047
    nome: Técnicas de Análise Química
    docente: angelo
    periodo: 12 a 17 de agosto de 2021
    edital: LOM3047-edital.pdf
    ficha: LOM3047-ficha.pdf
  - 
    sigla: LOM3049
    nome: Termodinâmica de Máquinas
    docente: rosa
    periodo: 11 a 15 de agosto de 2021
    edital: LOM3049.docx
    ficha: 
  - 
    sigla: LOM3204
    nome: Desenho técnico e Projeto Assistido por Computador
    docente: katia
    periodo: 10 a 15 de agosto de 2021
    edital: LOM3204.pdf
    ficha: 
  - 
    sigla: LOM3254
    nome: Laboratório de Circuitos Elétricos
    docente: emerson
    periodo: 11 a 18 de agosto de 2021
    edital: LOM3254.pdf
    ficha: 

---

Seleção de estudantes para monitorias de disciplinas do DEMAR (LOM) &mdash; {{page.periodo}}
{: .lead}

{% if page.encerrado %}
:x: Inscrições encerradas!
{: .alert .alert-danger}
{% endif %}

Consulte abaixo as disciplinas disponíveis:

{% for disc in page.disciplinas %}

- {{disc.sigla}} - {{disc.nome}} {% if page.encerrado %}<span class='badge badge-warning'>Inscrições encerradas</span>{% endif %}
  - **Responsável:** {%include docente.html docente=disc.docente%}
  - **Inscrições:** {{disc.periodo}}

<div class="btn-group" role="group" aria-label="Monitoria{{disc.sigla}}">
  <a role="button" class="btn btn-primary mr-1" href="{{site.baseurl}}/assets/docs/{{disc.edital}}">Edital</a>
  {% if disc.ficha %}<a role="button" class="btn btn-primary" href="{{site.baseurl}}/assets/docs/{{disc.ficha}}">Ficha de inscrição</a>{% endif %}
</div>

---
{% endfor %}