---
title: Equipe de apoio
permalink: /staff/
---

<table class="table table-hover">

{% for setor in site.data.staff.demar %}

<tr>
<td>

<h2>{{ setor.nome.br }}</h2>

<ul>
  {% for pessoa in setor.pessoal %}

  <!-- Button trigger modal -->
  {% assign nameid = pessoa.nome | uri_escape | remove: '%' | remove: '(' | remove: ')' -%}
  <li>
    <a href="#" data-toggle="modal" data-target="#{{nameid}}">
    {{pessoa.nome}}
    </a>
  </li>

  <!-- Modal -->
  <div class="modal fade" id="{{nameid}}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark text-light">
          <h5 class="modal-title">{{pessoa.nome}}</h5>
          <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h6>{{setor.nome.br}}</h6>
          <p>
          :email: <a href="mailto:{{pessoa.email}}">{{pessoa.email}}</a><br/>
          :telephone_receiver: +55 12 31{{pessoa.ramal}}
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>

  {% endfor %}

</ul>

</td>
</tr>

{% endfor %}

</table>

<h1 class="alert bg-dark text-light">Funcionários de outros Setores que atuam na Área II</h1>

<table class="table table-hover">

{% for setor in site.data.staff.eel %}

<tr>
<td>

<h2>{{ setor.nome.br }}</h2>

<ul>

  {% for pessoa in setor.pessoal %}

  <!-- Button trigger modal -->
  {% assign nameid = pessoa.nome | uri_escape | remove: '%' | remove: '(' | remove: ')' -%}
  <li>
    <a href="#" data-toggle="modal" data-target="#{{nameid}}">
    {{pessoa.nome}}
    </a>
  </li>

  <!-- Modal -->
  <div class="modal fade" id="{{nameid}}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark text-light">
          <h5 class="modal-title">{{pessoa.nome}}</h5>
          <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h6>{{setor.nome.br}}</h6>
          <p>
          :email: <a href="mailto:{{pessoa.email}}">{{pessoa.email}}</a><br/>
          :telephone_receiver: +55 12 31{{pessoa.ramal}}
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>

  {% endfor %}

</ul>

</td>
</tr>

{% endfor %}

</table>
