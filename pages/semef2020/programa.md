---
title: Programação
permalink: /semef2020/programa/
layout: semef
hidecarousel: true
---

  {% for d in site.data.semef2020.programa %}

  {% case d.id %}
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

  <div class="col-md-12">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title alert bg-dark text-light">{{data}}</h5>
        <div class='row d-flex'>
        {% for s in d.secoes %}

        {% case s.horario %}
          {% when 'MA' %}
            {% assign horario = site.data.semef2020.MA %}
          {% when 'MB' %}
            {% assign horario = site.data.semef2020.MB %}
          {% when 'TA' %}
            {% assign horario = site.data.semef2020.TA %}
          {% when 'TB' %}
            {% assign horario = site.data.semef2020.TB %}
        {% endcase %}

        {% assign palestrante = site.data.semef2020.palestrantes | where:'id', s.id %}
        {% assign p = palestrante[0] %}

        <div class="col-md-6 mb-2">
          <div class="card h-100 mx-0">
            <div class="card-body">
              <h6 class="card-title alert bg-dark text-light">{{horario}}</h6>
              <h6 class="card-title">{{p.titulo}}</h6>
              <h6 class="card-subtitle text-muted">{{p.nome}}</h6>
              <p class="card-text">{{p.descricao}}</p>

              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#{{s.id}}">
                Mais informações
              </button>

              <!-- Modal -->
              <div class="modal fade" id="{{s.id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
              <div class="modal-content">
              <div class="modal-header">
              <h5 class="modal-title w-100 text-light bg-dark alert" id="exampleModalLabel">{{data}} - {{horario}}</h5>
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
      </div>
    </div>
  </div>
  </div>
  {% endfor %}
