---
title: Sistemas Online
permalink: /sistemas/
---

<table class="table table-hover">
{% for sistema in site.data.sistemas.sistemas %}
 <tr>
   <td><a href="{{sistema.url}}" target="_blank">{{sistema.nome.br}}</a></td>
 </tr>
 {% endfor%}
</table>
