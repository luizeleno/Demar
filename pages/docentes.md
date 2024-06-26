---
title: Corpo Docente
permalink: /docentes/
mathjax: true
---

<style>
body {text-align: left;}
</style>

<!-- # Corpo Docente -->

<table class="table table-hover">
  {% for member in site.docentes %}
  <tr>
    <td class="align=left">
      <div class="row">
      <div class="col-md-2 float-md-left mx-auto mb-2 w-50 ">
      <a href="{{site.baseurl}}{{member.url}}"><img class="w-100 rounded"
        src="{{site.baseurl}}/assets/images/{% if member.image%}people/docentes/{{member.image}}.jpg{%else%}clipart/unknown-person.png{%endif%}"
        alt="{{member.nome}}">
      </a>
      </div>
      <div class="col-md-10">
      <p><b><a href="{{site.baseurl}}{{member.url}}">{{ member.nome }}</a></b><br />
      {{ member.staff.br }}</p>
      <p>
        {% if member.Lattes %}
        <a id="no-ext-link" href="http://lattes.cnpq.br/{{member.Lattes}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/lattes.jpg" title="Lattes" ></a>
        {% endif %}
        {% if member.ResearcherID %}
        <a id="no-ext-link" href="https://www.webofscience.com/wos/author/record/{{member.ResearcherID}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/ResID.gif" title="ResearcherID"></a>
        {% endif %}
        {% if member.ORCID %}
        <a id="no-ext-link" href="https://orcid.org/{{member.ORCID}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/ORCID.png" title="ORCID"></a>
        {% endif %}
        {% if member.GoogleScholar %}
        <a id="no-ext-link" href="https://scholar.google.com.br/citations?hl=en&user={{member.GoogleScholar}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/googlescholar.jpg" title="Google Scholar" ></a>
        {% endif %}
        {% if member.Scopus %}
        <a id="no-ext-link" href="https://www.scopus.com/authid/detail.url?authorId={{member.Scopus}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/Elsevier.svg" title="Scopus" ></a>
        {% endif %}
        {% if member.ResearchGate %}
        <a id="no-ext-link" href="https://www.researchgate.net/profile/{{member.ResearchGate}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/researchgate.jpg" title="Research Gate" ></a>
        {% endif %}
        {% if member.Linkedin %}
        <a id="no-ext-link" href="https://www.linkedin.com/in/{{member.Linkedin}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/linkedin.png" title="Linkedin" ></a>
        {% endif %}
        {% if member.Github %}
        <a id="no-ext-link" href="https://www.github.com//{{member.Github}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/github.png" title="Github" ></a>
        {% endif %}
        {% if member.Facebook %}
        <a id="no-ext-link" href="https://www.facebook.com/{{member.Facebook}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/facebook.png" title="Facebook" ></a>
        {% endif %}
        {% if member.Twitter %}
        <a id="no-ext-link" href="https://twitter.com/{{member.Twitter}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/twitter.png" title="Twitter" ></a>
        {% endif %}
        {% if member.Instagram %}
        <a id="no-ext-link" href="https://www.instagram.com/{{member.Instagram}}" target="_blank"><img class="social" src="{{site.baseurl}}/assets/images/logos/instagram.jpg" title="Instagram" ></a>
        {% endif %}
      <br>
      :email: <a href="mailto:{{ member.email }}">{{ member.email }}</a><br />
      :telephone_receiver: {{ member.fone }}
      {% if member.webpage %}
      <br />
      :earth_americas: <a href="{{member.webpage}}" target="_blank">{{member.webpage}}</a>
      {% endif %}
      {% if member.altwebpage %}
      <br />
      :earth_americas: <a href="{{member.altwebpage}}" target="_blank">{{member.altwebpage}}</a>
      {% endif %}
      </p>
      <p><b>Áreas de pesquisa:</b>
      {% for area in member.pesquisa.br%}
        {{area}}{% if forloop.last %}.{% else %},{% endif %}
      {% endfor %}
      </p>
    </div>
    </div>
    </td>
  </tr>
  {% endfor %}
</table>
