---
title: Undergraduate program
permalink: /en/grad/

coord:
  EF: katia
  EM: ismenia
---

<div class="container mb-3">
  <div class="row">
    <div class="col">
        {% include figure.html image='/assets/images/demar/selo-EF.png' caption='' id='selo-EF' %}
    </div>
    <div class="col">
          {% include figure.html image='/assets/images/demar/selo-EM.png' caption='' id='selo-EF' %}
    </div>
  </div>
</div>

<h1 class="alert bg-dark text-light">Engineering Physics</h1>

<div class="col-md-5 float-md-right">
{% include video.html video='3bHVUZ7mqV0' id='prgEF' caption='Engenharia Física - EEL/USP (2020)' %}
</div>

Forms an engineer with a general profile, with a solid scientific and technological base in the disciplines of Physics, Chemistry and Mathematics, prepared to apply this basic knowledge in the innovation and resolution of technological problems in several areas, such as Alternative Energies, Nanotechnology, Quantum Electronics, Optics and Photonics, Transportation, Microfabrication and development of new materials and devices. The training emphasizes simultaneously the visions of scientist and engineer that will base their professional performance. The Physical Engineer will be able to research, technological development and leadership roles in the introduction of new technologies, processes and products in the industrial segment with high added value, researching and solving problems of the various areas of modern technology.

{% assign EF = site.docentes | where:'short_name', page.coord.EF %}{% assign EF = EF[0] %}
<p>
<b>Course coordinator: </b><a href="{{site.baseurl}}/en/{{EF.url}}">{{EF.abrev}} {{EF.nome}}</a><br />
:email: <a href="mailto:{{EF.email}}">{{EF.email}}</a><br />
:telephone_receiver: {{EF.fone}}
</p>

<a href="https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=88&codcur=88301&codhab=0&tipo=N" target="_blank">Course Program</a>

<h1 class="alert bg-dark text-light">Materials Engineering</h1>

<div class="col-md-5 float-md-right">
{% include video.html video='nA03Q3SlAeY' id='prgEM' caption='Engenharia de Materiais - EEL/USP (2020)' %}
</div>

Forms an engineer with profile to work in the area of ​​research and development of materials with technological application with inter and multidisciplinary vision of the traditional areas of Materials Engineering: Metallurgy, Ceramics, Polymers and Composites. Materials engineers study the relationship between material structure, properties, and performance to obtain new applications or improve the quality of existing materials. From the car to the kitchen utensils, from the cell phone to the fabrics of the clothes, practically everything has the intervention of a professional of materials engineering. Material engineers operate in a variety of industrial sectors: metal-mechanics, metallurgical and steel industries, plastics processing industries, automotive industries, ceramic tile and tile manufacturing industries, textile and synthetic fiber manufacturing industries, aeronautical industry and electro-electronic sector. The Materials Engineer will also be able to research, technological development and leadership roles in the introduction of new technologies, processes and products in the industrial segment.

{% assign EM = site.docentes | where:'short_name', page.coord.EM %}{% assign EM = EM[0] %}
<p>
<b>Course coordinator: </b><a href="{{site.baseurl}}/en/{{EM.url}}">{{EM.abrev}} {{EM.nome}}</a><br />
:email: <a href="mailto:{{EF.email}}">{{EM.email}}</a><br />
:telephone_receiver: {{EM.fone}}
</p>


<a href="https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=88&codcur=88202&codhab=0&tipo=N" target="_blank">Course program</a>
