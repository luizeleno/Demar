---
title: Laboratórios
permalink: /labs/
---

Com uma área de aproximadamente 8.000 m², o Demar possui uma boa infraestrutura laboratorial para o andamento dos trabalhos relacionados às linhas de pesquisa e para atender às demandas da graduação. Desde a sua criação, os laboratórios funcionam no modelo multiusuário: todos os equipamentos do DEMAR estão abertos ao uso de docentes, alunos de pós-graduação e alunos de iniciação científica ligados ao DEMAR e a outros departamentos da EEL-USP. Os laboratórios são utilizados também por pesquisadores de diversas instituições do Brasil.

<h2 class="alert bg-dark text-light" style="text-align: left;">Lista de laboratórios:</h2>

<table class="table table-hover">
  {% assign sorted = site.labs | sort: 'title.br' %}
  {% for lab in sorted %}
  <tr>
    <td>
      {% if lab.page %}
        <a href="{{site.baseurl}}{{ lab.url }}">
          <h2 style="text-align: left;">{{ lab.title.br }}</h2>
        </a>
      {% else %}
        <h2 style="text-align: left;">{{ lab.title.br }}</h2>
      {% endif %}
    </td>
  </tr>
  {% endfor %}
</table>
