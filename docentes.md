---
title: Dados de docentes
permalink: /dados-docentes/
---

{% assign WEBOFSCIENCE='' %}
{% assign OR='' %}
{% assign changed_OR=false %}

{% for prof in site.docentes %}

- {{prof.nome}}
    - ResearcherID: {{prof.ResearcherID}}
    - ORCID: {{prof.ORCID}}

{% if prof.ORCID %}
    {% capture WEBOFSCIENCE %}{{WEBOFSCIENCE}} {{OR}} AI=({{prof.ORCID}}){% endcapture %}
    {% assign OR='OR' %}
    {% assign changed_OR=true %}
{% elsif prof.ResearcherID %}
    {% capture WEBOFSCIENCE %}{{WEBOFSCIENCE}} {{OR}} AI=({{prof.ResearcherID}}){% endcapture %}
    {% unless changed_OR %}
        {% assign OR='OR' %}
    {% endunless %}
{% endif %}

{% endfor %}

---

- String para busca no Web of Science : 

<div class="card">
  <div class="card-body">
    {{WEBOFSCIENCE}}
  </div>
</div>
