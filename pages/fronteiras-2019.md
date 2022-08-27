---
title: 2° Encontro - Fronteiras tecnológicas em Engenharia
permalink: /fronteiras2019/
hidecarousel: true
---

<div class="col-md-5 float-md-right">
{% include figure.html image='/assets/images/fronteiras-2/workchopp.jpg' id='call' caption='Pôster para divulgação!' link='https://forms.gle/Nhd6sqa2YUNYr7AE8' %}
</div>

<table class="table-hover">
<tr>
<td>
<!-- Button trigger modal -->
<button type="button" class="btn btn-lg btn-primary my-1 dropdown-toggle" data-toggle="modal" data-target="#exampleModalScrollable">Certificados</button>
</td>
</tr>

<!-- Modal -->
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header bg-dark text-light">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Certificados</h5>
        <button type="button" class="close bg-dark text-light" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Participação</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Oral</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Poster</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                {% assign lista=site.data.fronteiras.certificados %}
                <h2 class="alert alert-primary">Certificados de participação</h2>
                <ul class="list-group">
                {% for x in lista %}
                {% if x.file %}
                <li class="list-group-item"><a href="{{site.baseurl}}/assets/images/fronteiras-2/Certificados/{{x.file}}" target="_blank">
                {{x.nome}}</a>
                </li>
                {% endif%}
                {% endfor %}
                </ul>

            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                {% assign lista=site.data.fronteiras.cert-palestras %}
                <h2 class="alert alert-primary">Apresentações orais</h2>
                <ul class="list-group">
                {% for x in lista %}
                {% if x.file %}
                <li class="list-group-item"><a href="{{site.baseurl}}/assets/images/fronteiras-2/CertificadosPalestras/{{x.file}}" target="_blank">
                {{x.nome}}</a>
                </li>
                {% endif%}
                {% endfor %}
                </ul>

            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                {% assign lista=site.data.fronteiras.cert-posters %}
                <h2 class="alert alert-primary">Apresentações de pôster</h2>
                <ul class="list-group">
                {% for x in lista %}
                {% if x.file %}
                <li class="list-group-item"><a href="{{site.baseurl}}/assets/images/fronteiras-2/CertificadosPosters/{{x.file}}" target="_blank">
                {{x.nome}}</a>
                </li>
                {% endif%}
                {% endfor %}
                </ul>

            </div>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>

<!-- <h2 class="text-danger">Inscrições prorrogadas até 08 de outubro!</h2> -->

<!-- <a class="btn btn-lg btn-primary mb-2" href="https://forms.gle/Nhd6sqa2YUNYr7AE8" id="no-ext-link" target="\_blank">Inscreva-se!</a> -->

<tr>
<td>
<a class="btn btn-lg btn-primary my-1" href="{{site.baseurl}}/assets/images/fronteiras-2/poster-programa.pdf" target="\_blank">Programação completa (pdf)</a>
</td>
</tr>
<tr>
<td>
<a class="btn btn-lg btn-primary my-1" href="{{site.baseurl}}/assets/images/fronteiras-2/booklet_online.pdf" target="\_blank">Caderno de resumos (pdf)</a>
</td>
</tr>
<tr>
<td>
<a class="btn btn-lg btn-primary my-1" href="{{site.baseurl}}/fronteiras2/fotos">Fotos</a>
</td>
</tr>
</table>

Continuando a tradição iniciada com a primeira edição do evento (leia mais a respeito na página 7 do <a href="https://site.eel.usp.br/sites/files/eel/publico/boletim/Boletim_EEL_USP_29.pdf" target="\_blank">29° boletim da EEL</a>), o *workshop* **2° Encontro – Fronteiras Tecnológicas em Engenharia** foi realizado no nosso departamento nos dias **09 e 10 de outubro de 2019**, sob a coordenação do {% include docente.html docente='eleno' %} com o apoio da <a href="http://www.fapesp.br" target="\_blank">FAPESP</a>. O objetivo foi aproximar pesquisadores de diversas áreas desde as ciências básicas até suas aplicações tecnológicas e proporcionar um fórum de discussão e integração.

## Palestrantes convidados

- **Simo Ellilä** (Technological Research Centre of Finland VTT, Espoo): *Trichoderma reesei as a production host for enzymes, therapeutics, food and material proteins*
- **Teresa Cristina Brazil de Paiva** (EEL-USP): *Contaminantes Emergentes e a Toxicidade em Ambientes Aquáticos*
- **Roberto Gomes de Aguiar Veiga** (UFABC): *Simulações computacionais atomísticas aplicadas ao estudo da plasticidade em metais e suas ligas*
- **Mauricio da Silva Baptista** (IQ-USP): *Spatial precision in targeting intracellular organelles by photo-sensitized oxidations*
- **Hernan Chaimovich** (IQ-USP): *Política Científica: Reflexões Preliminares*


## Comissão organizadora

- Prof. Dr. Luiz Tadeu Fernandes Eleno - DEMAR (coordenador)
- Prof. Dr. Eduardo Rezende Triboni - DEQUI
- Profa. Dra. Gabrielle Weber - DEBAS
- Profa. Dra. Talita Martins Lacerda - DEBIQ
- Prof. Dr. Fernando Segato - DEBIQ
- Prof. Dr. Fábio Herbst Florenzano - DEMAR
- Dra. Rebeca Bacani - DEQUI

## Apoio:

<div class="col-md-6">
<figure class="figure">
  <a href="http://www.fapesp.br" id="no-ext-link" target="\_blank"><img class="figure-img img-fluid" src="{{site.baseurl}}/assets/images/logos/logo-fapesp-1200x480.jpg"></a>
  <figcaption class="figure-caption">Proc. 2019/09764-0</figcaption>
</figure>
</div>

{% include figure.html image='/assets/images/fronteiras-2/banner.png' id='banner' static=true %}
