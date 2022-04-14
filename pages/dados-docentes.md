---
title: Dados de docentes
permalink: /dados-docentes/
---

{% for prof in site.docentes %}

- {{prof.nome}}
    - ResearcherID: {% if prof.ResearcherID%}<http://www.researcherid.com/rid/{{prof.ResearcherID}}>{% endif %}
    - ORCID: {% if prof.ORCID%}<https://orcid.org/{{prof.ORCID}}>{% endif %}

{% endfor %}

---

## String usada para busca no Web of Science:

{% include webofscience.html %}

<div class="card">
  <div class="card-body">
    {{WEBOFSCIENCE}}
  </div>
</div>
