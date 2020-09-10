---
title:
  br: Laboratório de Impressão 3D
  en: 3D Printing Lab
responsavel: katia
colaborador: shigue
page: true
---

{% assign kat = site.docentes | where:'short_name', page.responsavel %}
{% assign shig = site.docentes | where:'short_name', page.colaborador %}

{% assign katen = site.faculty | where:'short_name', page.responsavel %}
{% assign shigen = site.faculty | where:'short_name', 'shigue' %}

## :earth_americas: <a href="https://sites.usp.br/labeel/" target="_blank">sites.usp.br/labeel</a>

Bem vindo ao Laboratório de Impressão 3D, coordenado pela <a href="{{site.baseurl}}{{kat[0].url}}">{{kat[0].abrev}} {{kat[0].nome}}</a>.

Aqui trabalhamos com desenhos e criação de pequenos projetos de engenharia.

## Visão
- ​Promover habilidades de desenvolvimento de projetos baseados na prototipagem por impressão 3D.

## Missão
- ​Desenvolver projetos de manufatura aditiva em tecnologia/inovação de engenharia por meio de impressão 3D. Identificar novas tendências e aplicação.
- Formar recursos humanos na área projeto e prototipagem.

## Grupo de Trabalho em Fabricação
- Responsável: <a href="{{site.baseurl}}{{kat[0].url}}">{{kat[0].abrev}} {{kat[0].nome}}</a>
- Colaborador: <a href="{{site.baseurl}}{{shig[0].url}}">{{shig[0].abrev}} {{shig[0].nome}}</a>
- Monitores (Graduação)

---

## Links

- Página oficial do LabEEL: <https://sites.usp.br/labeel/>
- Página do LabEEL no Facebook: <https://www.facebook.com/usp.labeel/>
- Grupo do LabEEL no Facebook: <https://www.facebook.com/groups/475162976543578/>
- Perfil do LabEEL no Instagram: <https://www.instagram.com/labeel.usp/>
- Canal do LabEEL no YouTube: <https://www.youtube.com/channel/UC9kL6UL-iEq4nJKGs1nezQQ>

---

## Impressora 3D – GTMax-core-A3

<div class="col-md-7 float-md-left mb-2">
{% include carousel.html name="imp3d" data=site.data.katia.imp3d modal=true height=300px %}
</div>
<div class="col-md-5 float-md-left mb-2">
{% include carousel.html name="imp3dExemplos" data=site.data.katia.imp3d-exemplos modal=true height=300px %}
</div>

## Impressão 3D:
- Volume de impressão: 300 x 300 x 300mm
- Velocidade de impressão 180mm/s
- Velocidade de movimentação: até 400mm/s
- Altura de camada mínima: 0,05 a 0,4mm
- Temperatura máximo: 295ºC
- Materiais de impressão: 1,75mm (PLA, ABS, PET-G, PC, Flex, Tritan, Fibra de Carbono e Madeira)
- Formato de arquivo: GCode (outros)
- Conectividade: USB, cartão SD (autoprint)
- Consumo: 60W
