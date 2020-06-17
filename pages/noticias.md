---
title: Notícias
permalink: /noticias/
---

{% assign news = site.noticias | sort: 'date' | reverse %}

{% for noticia in news %}
<div class="card w-100 my-2">
  <div class="card-body">
    <div class="col-md-5 float-md-right mb-2">
      <img class="shadow rounded w-100" src="{{site.baseurl}}{{ noticia.image }}" alt="{{ noticia.caption.br }}">
    </div>
    <a class="stretched-link" href="{{site.baseurl}}{{ noticia.url }}"><h2 style="text-align:left">{{ noticia.title.br }}</h2></a>
    <h3>{{ noticia.date | date: "%d/%m/%Y" }}</h3>
    <a class="btn btn-lg btn-primary" href="{{site.baseurl}}{{ noticia.url }}">Leia</a>
  </div>
</div>
{% endfor %}
