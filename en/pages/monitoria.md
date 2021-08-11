---
title: Monitoria 20201
permalink: /en/monitoria/

encerrado: false

periodo: 02/2021

disciplinas:
  - 
    sigla: LOM3047
    nome: Chemical Analysys Techniques
    docente: angelo
    periodo: 12-17 August 2021
    edital: LOM3047.pdf
    ficha: 
  - 
    sigla: LOM3049
    nome: Technical Thermodynamics
    docente: rosa
    periodo: 11-15 August 2021
    edital: LOM3049.docx
    ficha: 
  - 
    sigla: LOM3204
    nome: Technical Drawing and Computer-assisted Project
    docente: katia
    periodo: 10-15 August 2021
    edital: LOM3204.pdf
    ficha: 
  - 
    sigla: LOM3254
    nome: Electrical Circuits Lab
    docente: emerson
    periodo: 11-18 august 2021
    edital: LOM3254.pdf
    ficha: 

---

DEMAR (LOM) selection of students for tutoring classes &mdash; {{page.periodo}}
{: .lead}

{% if page.encerrado %}
:x: Registration closed!
{: .alert .alert-danger}
{% endif %}

List of available classes:

{% for disc in page.disciplinas %}

- {{disc.sigla}} - {{disc.nome}} {% if page.encerrado %}<span class='badge badge-warning'>Registratio closed</span>{% endif %}
  - **Responsável:** {%include faculty.html docente=disc.docente%}
  - **Inscrições:** {{disc.periodo}}

<div class="btn-group" role="group" aria-label="Monitoria{{disc.sigla}}">
  <a role="button" class="btn btn-primary mr-1" href="{{site.baseurl}}/assets/docs/{{disc.edital}}">Norms</a>
  {% if disc.ficha %}<a role="button" class="btn btn-primary" href="{{site.baseurl}}/assets/docs/{{disc.ficha}}">Registration Form</a>{% endif %}
</div>

---
{% endfor %}