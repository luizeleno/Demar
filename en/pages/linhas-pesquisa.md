---
title: Research groups in the department
permalink: /en/linhas-de-pesquisa/
---

<style>
body {text-align: left;}
</style>

<table class="table table-hover">
  {% assign sorted = site.data.grupos_de_pesquisa.grupos_de_pesquisa | sort: 'nome.en' %}
  {% for grupo in  sorted %}
  <tr>
    <td>
      <h2>{{ grupo.nome.en }}</h2>
      {% assign resp = site.docentes | where: 'short_name', grupo.responsavel %}
      <h3 style="color:black"><i>Coordinator:</i> <a href="{{site.baseurl}}{{ resp[0].url }}">{{ resp[0].abrev }} {{ resp[0].nome }}</a></h3>
    </td>
  </tr>
  {% endfor%}
</table>
