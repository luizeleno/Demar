---
title: Palestrantes
permalink: /semef2020/palestrantes/
layout: semef
hidecarousel: true
---

{% assign palestrantes=site.data.semef2020.palestrantes | sort: 'nome' %}

{% for p in palestrantes %}

<div class='col-md-12'>

<div class="card mx-0">
  <div class="card-body">
    <h6 class="card-title alert bg-dark text-light">{{p.nome}}</h6>
    <h6 class="card-subtitle text-muted">{{p.instituicao}}</h6>

    <div class="col-md-4 float-md-right mt-2">
    <img class='w-100' src='{{site.baseurl}}/assets/images/semef2020/palestrantes/{{p.id}}.jpg'>
    </div>

    <p class="card-text">{{p.cv}}</p>

    {% for d in site.data.semef2020.programa %}
      {% for s in d.secoes %}
        {% if s.id == p.id %}
          {% assign data = d.id %}
          {% assign horario = s.horario %}
        {% endif %}
      {% endfor %}
    {% endfor %}

    {% case data %}
      {% when 'seg' %}
        {% assign data = site.data.semef2020.seg %}
      {% when 'ter' %}
        {% assign data = site.data.semef2020.ter %}
      {% when 'qua' %}
        {% assign data = site.data.semef2020.qua %}
      {% when 'qui' %}
        {% assign data = site.data.semef2020.qui %}
      {% when 'sex' %}
        {% assign data = site.data.semef2020.sex %}
    {% endcase%}

    {% case horario %}
      {% when 'MA' %}
        {% assign horario = site.data.semef2020.MA %}
      {% when 'MB' %}
        {% assign horario = site.data.semef2020.MB %}
      {% when 'TA' %}
        {% assign horario = site.data.semef2020.TA %}
      {% when 'TB' %}
        {% assign horario = site.data.semef2020.TB %}
    {% endcase %}

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#{{p.id}}">
      Informações sobre a palestra
    </button>

    <!-- Modal -->
    <div class="modal fade" id="{{p.id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title alert text-light bg-dark w-100" id="exampleModalLabel">{{data}} - {{horario}}</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
    <h5>{{p.titulo}}</h5>
    <h6 class="text-muted">{{p.nome}}</h6>
    <h6 class="text-muted small">{{p.instituicao}}</h6>
    <p>{{p.resumo}}</p>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
    </div>
    </div>
    </div>
    </div>


</div>
</div>
</div>

{% endfor %}
