---
title: Monitoria 20241
permalink: /monitoria/

encerrado: false

periodo: "01/2024"

disciplinas:
  - 
    sigla: LOM3049
    nome: Termodinâmica de Máquinas
    docente: rosa
    periodo: 19 a 22 de fevereiro de 2024
    edital: LOM3049.pdf
    ficha: 
  - 
    sigla: LOM3056
    nome: Fundamentos de Química Orgânica
    docente: fabio
    periodo: 05 de março de 2024, 9h, Sala da Chefia do DEMAR
    edital: LOM3056.pdf
    ficha: 
  - 
    sigla: LOM3005
    nome: Diagramas de Fases
    docente: gilberto
    periodo: 04 de março de 2024, 10h, Sala A58 do DEMAR
    edital: LOM3005.pdf
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
