---
title: Segundo Encontro - Fotos
permalink: /fronteiras2/fotos/
hidecarousel: true
---

<div class="container">

<h2 class="alert alert-primary">Sessões orais</h2>

<ul id="palestras">
{% for foto in site.data.fronteiras.palestras %}
<li data-thumb="{{site.baseurl}}/assets/images/fronteiras-2/fotos/palestras/{{foto.foto}}"><img class="w-100" src="{{site.baseurl}}/assets/images/fronteiras-2/fotos/palestras/{{foto.foto}}" /></li>
{% endfor %}
</ul>

<script type="text/javascript">
$(document).ready(function() {
    $('#palestras').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9
    });
});
</script>

<a class="btn btn-primary my-3" href="{{site.baseurl}}/fronteiras/">Voltar</a>

<h2 class="alert alert-primary">Apresentações de poster</h2>

<ul id="posters">
{% for foto in site.data.fronteiras.posters %}
<li data-thumb="{{site.baseurl}}/assets/images/fronteiras-2/fotos/posters/{{foto.foto}}"><img class="w-100" src="{{site.baseurl}}/assets/images/fronteiras-2/fotos/posters/{{foto.foto}}" /></li>
{% endfor %}
</ul>

<script type="text/javascript">
$(document).ready(function() {
    $('#posters').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9
    });
});
</script>

<a class="btn btn-primary my-3" href="{{site.baseurl}}/fronteiras/">Voltar</a>

</div>
