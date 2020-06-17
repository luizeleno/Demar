---
title: Segundo Encontro - Fotos
permalink: /fronteiras2/fotos1/
hidecarousel: true
---

<div class="container">

<h2 class="alert alert-primary">Sessões orais</h2>

<div class="row mb-3">

{% for foto in site.data.fronteiras.palestras %}
<div class="col-md-3">

    <div class="text-center">
    <figure class="figure">
      <a href="#" data-toggle="modal" data-target="#{{foto.id}}">
        <img class="figure-img img-fluid rounded mx-auto" src="{{site.baseurl}}/assets/images/fronteiras-2/fotos/palestras/{{ foto.foto }}">
      </a>

    <!-- Modal -->
    <div class="modal fade" id="{{foto.id}}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header text-light bg-dark">
            <h5>Segundo Encontro - Fotos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="text-light" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <a id="no-ext-link" href="{{site.baseurl}}/assets/images/fronteiras-2/fotos/palestras/{{foto.foto}}" target="_blank">
            <img class="figure-img img-fluid rounded w-100mx-auto" src="{{site.baseurl}}/assets/images/fronteiras-2/fotos/palestras/{{ foto.foto }}">
            </a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>

    </figure>
    </div>

</div>
{% endfor %}

</div>

<a class="btn btn-primary mb-3" href="{{site.baseurl}}/fronteiras/">Voltar</a>

<h2 class="alert alert-primary">Sessões de poster</h2>

<div class="row mb-3">

{% for foto in site.data.fronteiras.posters %}
<div class="col-md-3">

    <div class="text-center">
    <figure class="figure">
      <a href="#" data-toggle="modal" data-target="#{{foto.id}}">
        <img class="figure-img img-fluid rounded mx-auto" src="{{site.baseurl}}/assets/images/fronteiras-2/fotos/posters/{{ foto.foto }}">
      </a>

    <!-- Modal -->
    <div class="modal fade" id="{{foto.id}}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header text-light bg-dark">
            <h5>Segundo Encontro - Fotos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="text-light" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <a id="no-ext-link" href="{{site.baseurl}}/assets/images/fronteiras-2/fotos/posters/{{foto.foto}}" target="_blank">
            <img class="figure-img img-fluid rounded w-100mx-auto" src="{{site.baseurl}}/assets/images/fronteiras-2/fotos/posters/{{ foto.foto }}">
            </a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>

    </figure>
    </div>

</div>
{% endfor %}

</div>

<a class="btn btn-primary" href="{{site.baseurl}}/fronteiras/">Voltar</a>

</div>
