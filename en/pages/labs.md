---
title: Research Labs
permalink: /en/labs/
---

With an area of ​​approximately 8,000 m², DEMAR has a good laboratory infrastructure for the progress of the works related to the research lines and to meet the graduation demands. Since its inception, the laboratories have operated in the multiuser model: all DEMAR equipment is open to the use of teachers, postgraduate students and scientific initiation students linked to DEMAR and other departments of EEL-USP. The laboratories are also used by researchers from several institutions in Brazil.

<h2 class="alert bg-dark text-light" style="text-align: left;">Lab List:</h2>

<table class="table table-hover">
  {% assign sorted = site.labs_en | sort: 'title.en' %}
  {% for lab in sorted %}
  <tr>
    <td>
      {% if lab.page %}
        <a href="{{site.baseurl}}{{ lab.url }}">
          <h2 style="text-align: left;">{{ lab.title.en }}</h2>
        </a>
      {% else %}
        <h2 style="text-align: left;">{{ lab.title.en }}</h2>
      {% endif %}
    </td>
  </tr>
  {% endfor %}
</table>
