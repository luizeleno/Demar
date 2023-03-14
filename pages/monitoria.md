---
title: Monitoria 20231
permalink: /monitoria/

encerrado: false

periodo: 01/2023

disciplinas:
  - 
    sigla: LOM3049
    nome: Termodinâmica de Máquinas
    docente: rosa
    periodo: 08 a 15 de março de 2023
    edital: LOM3049.pdf
    ficha: 
  -
    sigla: LOM3087
    nome: Laboratório de Engenharia de Materiais III
    docente: gilberto
    periodo: 08 a 15 de março de 2023
    edital: LOM3087.pdf
    ficha:
  - 
    sigla: LOM3227
    nome: Métodos Computacionais da Física
    docente: eleno
    periodo: 10 a 16 de março de 2023
    edital: LOM3227.pdf
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
