---
title: Cultura e extensão
permalink: /extensao/
---

Os alunos de graduação do {{site.short_name}} participam regularmente de atividades de extensão, seja por meio da empresa júnior *"EEL Jr",* seja por meio de participação individual ou em grupos de projetos de extensão e consultoria. A partir de 2013, com o início do Mestrado Profissional em Projetos Educacionais de Ciências os alunos da graduação têm dado apoio às atividades de extensão junto às escolas de ensino básico de Lorena. Além dessas, podem ser destacadas algumas atividades de extensão oferecidas e organizadas por funcionários e/ou alunos do {{site.short_name}}:

<div id="accordion">

  {% for x in site.data.extensao.projetos %}

    <div class="alert text-light bg-dark my-1 collapsed" id="head{{x.id}}" data-toggle="collapse" data-target="#{{x.id}}" aria-expanded="false" aria-controls="{{x.id}}" style="cursor: pointer;">
      {% octicon chevron-right %} {{x.name}}
    </div>
    <div id="{{x.id}}" class="card collapse" aria-labelledby="head{{x.id}}" data-parent="#accordion">
      <div class="card-body">
        <h2 class="card-title">{{x.full_name.br}}</h2>
        <div class="row">
          <div class="col-md-4 float-left w-100 mb-2">
            <img src="{{site.baseurl}}{{x.image}}" class="rounded w-100">
          </div>
          <div class="col-md-8">
            <p>
              {{ x.content.br }}
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
