---
title:
  br: Laboratório de Abrasivos
  en: Abrasive Materials Lab
responsavel: katia
page: true
---

{% assign kat = site.docentes | where:'short_name', page.responsavel %}
{% assign shig = site.docentes | where:'short_name', 'shigue' %}

{% assign katen = site.faculty | where:'short_name', page.responsavel %}
{% assign shigen = site.faculty | where:'short_name', 'shigue' %}

{% contentfor br %}

Bem vindo ao Laboratório de Abrasivos, coordenado pela <a href="{{site.baseurl}}{{kat[0].url}}">{{kat[0].abrev}} {{kat[0].nome}}</a>

Aqui trabalhamos com desenvolvimento, fabricação, processos de abrasão e estudos de degradação de materiais abrasivos.

# Visão

- ​Promover tecnologia de materiais abrasivos.

# Missão

- Desenvolver pesquisa e conhecimento de materiais abrasivos de melhor desempenho por meio de estudos de novos materiais e processos de fabricação, identificar efeitos nas propriedades mecânicas e ciclo de vida no contento de sua aplicação em processos de abrasão.
- Formar recursos humanos na área materiais e processos de fabricação.

# Grupo de Trabalho em Abrasivos

- Responsável: <a href="{{site.baseurl}}{{kat[0].url}}">{{kat[0].abrev}} {{kat[0].nome}}</a>
- Colaborador: <a href="{{site.baseurl}}{{shig[0].url}}">{{shig[0].abrev}} {{shig[0].nome}}</a>

# Orientações

- Iniciação Científica (Graduação)
- Mestrado (Pós-graduação)

# Equipamentos:

{% endcontentfor %}

{% contentfor en %}

Welcome to the Abrasives Laboratory, coordinated by <a href="{{site.baseurl}}{{katen[0].url}}">{{katen[0].abrev}} {{katen[0].nome}}</a>

Here we work with development, manufacturing, abrasion processes and degradation studies of abrasive materials.

# View

- Promote technology of abrasive materials.

# Mission

- Develop research and knowledge of abrasive materials of better performance through studies of new materials and manufacturing processes, identify effects on mechanical properties and life cycle in the content of its application in abrasion processes.
- Train human resources in the materials area and manufacturing processes.

# Abrasives Working Group

- Coordinator: <a href="{{site.baseurl}}{{katen[0].url}}">{{katen[0].abrev}} {{katen[0].nome}}</a>
- Collaborator: <a href="{{site.baseurl}}{{shigen[0].url}}">{{shigen[0].abrev}} {{shigen[0].nome}}</a>

# Guidelines

- Scientific Initiation (Undergraduate)
- Master (Postgraduate)

# Equipment:

{% endcontentfor %}

{% contentfor bottom %}

<div class="col-md-6 float-md-left mb-2">
{% include carousel.html name="Ferramentas" data=site.data.katia.abrasivos modal=true height=400px %}
</div>

<div class="col-md-6 float-md-right mb-2">
{% include carousel.html name="Sonelastic" data=site.data.katia.sonelastic modal=true height=400px %}
</div>

{% endcontentfor %}
