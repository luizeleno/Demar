---
title: Culture and community
permalink: /en/extensao/
---

Undergraduate students regularly participate in extension activities, either through the junior company *"EEL Jr",* either through individual participation or in groups of extension and consulting projects. Beginning in 2013, with the beginning of the Professional Master's Degree in Science Educational Projects, undergraduate students have been supporting the extension activities at the Lorena elementary schools. In addition, some extension activities offered and organized by {{site.short_name}} employees and/or students may be highlighted:

<div id="accordion">

  {% for x in site.data.extensao.projetos %}

    <div class="alert bg-dark text-light my-1 collapsed" id="head{{x.id}}" data-toggle="collapse" data-target="#{{x.id}}" aria-expanded="false" aria-controls="{{x.id}}" style="cursor: pointer;">
      {% octicon chevron-right %} {{x.name}}
    </div>
    <div id="{{x.id}}" class="card collapse" aria-labelledby="head{{x.id}}" data-parent="#accordion">
      <div class="card-body">
        <h2 class="card-title">{{x.full_name.en}}</h2>
        <div class="row">
          <div class="col-md-4 float-left w-100 mb-2">
            <img src="{{site.baseurl}}{{x.image}}" class="rounded w-100">
          </div>
          <div class="col-md-8">
            <p>
              {{ x.content.en }}
            </p>
            <p>:earth_americas: <a href="{{x.link}}" target="_blank">{{x.link}}</a></p>
          </div>
        </div>
      </div>
    </div>

    <script>
    $('#{{x.id}}').on('shown.bs.collapse', function () {
      $('#head{{x.id}}').html('{% octicon chevron-down %} {{x.name}}');
    })

    $('#{{x.id}}').on('hidden.bs.collapse', function () {
      $('#head{{x.id}}').html('{% octicon chevron-right %} {{x.name}}');
    })
    </script>


{% endfor %}

</div>
