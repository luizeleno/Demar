---
layout: page
title: News
permalink: /en/noticias/
---

{% assign allnews = site.news | sort: 'date' | reverse %}

{% for news in allnews %}
<div class="card w-100 my-2">
  <div class="card-body">
    <div class="col-md-5 float-md-right mb-2">
      <img class="shadow rounded w-100" src="{{site.baseurl}}{{ news.image }}" alt="{{ news.caption.br }}">
    </div>
    <a class="stretched-link" href="{{site.baseurl}}{{ news.url }}"><h2 style="text-align:left">{{ news.title.en }}</h2></a>
    <h3>{{ news.date | date: "%m/%d/%Y" }}</h3>
    <a class="btn btn-lg btn-primary" href="{{site.baseurl}}{{ news.url }}">Read</a>
  </div>
</div>
{% endfor %}
