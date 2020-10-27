---
#title: VII SEMEF
permalink: /grade-ef/
layout: page
hidecarousel: true
hidenews: true
title: Engenharia Física
---

## Disciplinas obrigatórias
{: .alert .alert-dark}

{% assign disciplinas = site.data.EF | where: 'tipo', 'Obrigatórias' %}

{% for n in (1..10) %}

### {{n}}º semestre
{: .alert .alert-secondary}

{%assign ns = n | downcase %}

{% assign sem = disciplinas | where: 'semestre', ns %}

{% for disc in sem %}
- {% include disciplina.html disciplina=disc %}
{%- endfor -%}

{% endfor %}

## Disciplinas eletivas
{: .alert .alert-dark}

{% assign disciplinas = site.data.EF | where: 'tipo', 'Optativas' %}

{% for n in (1..10) %}

{% assign sem = disciplinas | where: 'semestre', n %}

{% if sem.size > 0 %}

### {{ n }}º semestre
{: .alert .alert-secondary}

{% for disc in sem %}

- {% include disciplina.html disciplina=disc %}

{%- endfor -%}

{% endif %}

{% endfor %}
