---
title:
  br: Laboratório de Processos de Fabricação
  en: Fabrication Processes Lab
responsavel: katia
colaborador: shigue
page: true
---

{% assign kat = site.docentes | where:'short_name', page.responsavel %}
{% assign shig = site.docentes | where:'short_name', page.colaborador %}

{% assign katen = site.faculty | where:'short_name', page.responsavel %}
{% assign shigen = site.faculty | where:'short_name', 'shigue' %}

Bem-vindo ao Laboratório de Processos de Fabricação, coordenado pela <a href="{{site.baseurl}}{{kat[0].url}}">{{kat[0].abrev}} {{kat[0].nome}}</a>.

Aqui trabalhamos com desenvolvimento e fabricação de projetos de engenharia.

## Visão

  - ​Promover habilidades de desenvolvimento de novas tecnologias.

## Missão

- Desenvolver pesquisa e conhecimento de tecnologia/inovação em projetos de engenharia por meio de novos materiais e processos de fabricação. Identificar novas tendências e aplicação.
- Formar recursos humanos na área projeto e manufatura.

## Grupo de Trabalho em Fabricação
- Responsável: <a href="{{site.baseurl}}{{kat[0].url}}">{{kat[0].abrev}} {{kat[0].nome}}</a>
- Colaborador: <a href="{{site.baseurl}}{{shig[0].url}}">{{shig[0].abrev}} {{shig[0].nome}}</a>

---

## Links

- Página do LabEEL no Facebook: <https://www.facebook.com/usp.labeel/>
- Grupo do LabEEL no Facebook: <https://www.facebook.com/groups/475162976543578/>
- Perfil do LabEEL no Instagram: <https://www.instagram.com/labeel.usp/>
- Canal do LabEEL no YouTube: <https://www.youtube.com/channel/UC9kL6UL-iEq4nJKGs1nezQQ>

---

## Monitores (Graduação)

## Ferramentas

<div class="col-md-6 float-md-left mb-2">
{% include carousel.html name="Fabrica" data=site.data.katia.fabrica modal=true height=400px %}
</div>

<div class="col-md-6 float-md-left mb-2">
{% include carousel.html name="CorteLaser" data=site.data.katia.cortelaser modal=true height=400px %}
</div>

## Projetos do laboratório

<div class="col-md-6 float-md-left mb-2">
{% include carousel.html name="LabExemplos" data=site.data.katia.fabrica-exemplos modal=true height=400px %}
</div>
