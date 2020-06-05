---
layout: page
title: Notícias
permalink: /noticias/
pagination:
  enabled: true
  title: ':title - página :num'
  sort_reverse: true
  per_page: 10
  collection: 'noticias'
---

{% for news in paginator.posts  %}
<div class="card w-100 my-2">
  <div class="card-body">
    <div class="col-md-5 float-md-right mb-2">
      <img class="shadow rounded w-100" src="{{site.baseurl}}{{ news.image }}" alt="{{ news.caption.br }}">
    </div>
    <a class="stretched-link" href="{{site.baseurl}}{{ news.url }}"><h2 style="text-align:left">{{ news.title.br }}</h2></a>
    <h3>{{ news.date | date: "%d/%m/%Y" }}</h3>
    <a class="btn btn-lg btn-primary" href="{{site.baseurl}}{{ news.url }}">Leia</a>
  </div>
</div>
{% endfor %}

{% if paginator.total_pages > 1 %}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item {% unless paginator.next_page %}disabled{% endunless %}">
      <a class="page-link" tabindex="-1" href="{{ paginator.next_page_path | prepend: site.baseurl }}">Mais antigas</a>
    </li>
    <!-- <li class="page-item"><a class="page-link" href="#">1</a></li> -->
    <!-- <li class="page-item"><a class="page-link" href="#">2</a></li> -->
    <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->
    <li class="page-item {% unless paginator.previous_page %}disabled{% endunless %}">
      <a class="page-link" tabindex="-1" href="{{ paginator.previous_page_path | prepend: site.baseurl }}">Mais recentes</a>
    </li>
  </ul>
</nav>
{% endif %}
