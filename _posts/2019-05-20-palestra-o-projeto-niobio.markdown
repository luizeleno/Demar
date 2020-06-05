---
title:
  br: "Palestra: O Projeto Nióbio"
  en: "Seminar: The Niobium Project"
image: /assets/images/demar/Nb-lingotes-FAPESP.jpg
caption:
  br: "Lingotes de Nióbio no Demar. Fonte: Revista Pesquisa FAPESP, Março/2019."
  en: "Niobium ingots at Demar. Source: Revista Pesquisa FAPESP, March/2019."
---

{% contentfor br%}

Palestra: **Projeto Nióbio - Uma História de Muitas Vidas**

{% assign pl = site.docentes | where:'short_name', 'rosa' %}
{% assign p = pl[0] %}

proferida pela <a href="{{site.baseurl}}{{p.url}}">{{p.abrev}} {{p.nome}}</a> durante a

## SEMAT - Auditório D.G. Pinatti

### 3ª feira - 21/05/19 - 08.00 h

Uma ótima oportunidade de conhecer a nossa trajetória até os dias atuais.

{% endcontentfor %}

{% contentfor en %}

Seminar: **Niobium Project - A history of many lives**

{% assign pl = site.faculty | where:'short_name', 'rosa' %}
{% assign p = pl[0] %}

given by <a href="{{site.baseurl}}{{p.url}}">{{p.abrev}} {{p.nome}}</a> during

## SEMAT - Auditório D.G. Pinatti

### 3ª feira - 21/05/19 - 08.00 h

A great opportunity to know our trajectory up to the present.

{% endcontentfor %}
