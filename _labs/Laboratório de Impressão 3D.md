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

- Página do LabEEL no Facebook: <https://www.facebook.com/usp.labeel/>
- Grupo do LabEEL no Facebook: <https://www.facebook.com/groups/475162976543578/>
- Perfil do LabEEL no Instagram: <https://www.instagram.com/labeel.usp/>
- Canal do LabEEL no YouTube: <https://www.youtube.com/channel/UC9kL6UL-iEq4nJKGs1nezQQ>

---

## Impressora 3D – Trinus (Kodama)

Impressoras 3D de mesa de nível profissional que podem ser facilmente convertidas em gravadoras a laser.

<div class="col-md-7 float-md-left mb-2">
{% include carousel.html name="imp3d" data=site.data.katia.imp3d modal=true height=300px %}
</div>
<div class="col-md-5 float-md-left mb-2">
{% include carousel.html name="imp3dExemplos" data=site.data.katia.imp3d-exemplos modal=true height=300px %}
</div>

## Impressão 3D:
- Volume de impressão: 120 x 125 x 125mm
- Velocidade de impressão 70mm/s
- Velocidade de movimentação: até 150mm/s
- Altura de camada mínima: 0,05mm
- Materiais de impressão: 1,75mm (PLA, ABS, PC, Flex e Madeira)
- Resolução XYZ: 2,5um
- Suporte OS: Windows, MAC
- Formato de arquivo: PCode (Pango), GCode (outros)
- Conectividade: USB, cartão SD (autoprint)
- Consumo: 60W

## Laser:
- Potência do laser: 500mW
- Comprimento de onda: 405nm
- Voltagem: 12V
- Corrente: 210mA
- Dimensão 33 x 33 x 55mm
- Ciclo de vida: 10.000 horas
- Superfície de trabalho: 120 x 125mm
