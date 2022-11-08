---
title: Graduação
permalink: /grad/

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
          {% include figure.html image='/assets/images/demar/selo-EM.png' caption='' id='selo-EM' %}
    </div>
  </div>
</div>

<h1 class="alert bg-dark text-light">Curso de Graduação em Engenharia Física</h1>

<div class="col-md-5 float-md-right">
{% include video.html video='3bHVUZ7mqV0' id='prgEF' caption='Engenharia Física - EEL/USP (2020)' %}
</div>

**Duração:** 10 semestres
**Período integral:** 40 vagas

Forma um engenheiro com perfil generalista, com sólida base cientifica e tecnológica nas disciplinas de Física, Química e Matemática, preparados para aplicar esses conhecimentos básicos na inovação e resolução de problemas tecnológicos em diversas áreas, tais como Energias Alternativas, Nanotecnologia, Eletrônica Quântica, Óptica e Fotônica, Transporte, Microfabricação e desenvolvimento de novos materiais e dispositivos. A formação enfatiza simultaneamente as visões de cientista e de engenheiro que fundamentarão seu desempenho profissional. O Engenheiro Físico estará apto à pesquisa, ao desenvolvimento tecnológico e ao desempenho de papéis de liderança na introdução de novas tecnologias, processos e produtos no segmento industrial com elevado valor agregado, pesquisando e solucionando problemas das diversas áreas da tecnologia moderna.

{% assign EF = site.docentes | where:'short_name', page.coord.EF %}{% assign EF = EF[0] %}
<p>
<b>Coordenador do curso: </b><a href="{{site.baseurl}}{{EF.url}}">{{EF.abrev}} {{EF.nome}}</a><br />
:email: <a href="mailto:{{EF.email}}">{{EF.email}}</a><br />
:telephone_receiver: {{EF.fone}}
</p>

<a href="https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=88&codcur=88301&codhab=0&tipo=N" target="_blank">Matriz Curricular</a>

<h1 class="alert bg-dark text-light">Curso de Graduação em Engenharia de Materiais</h1>

<div class="col-md-5 float-md-right">
{% include video.html video='nA03Q3SlAeY' id='prgEM' caption='Engenharia de Materiais - EEL/USP (2020)' %}
</div>

**Duração:** 10 semestres
**Período integral:** 40 vagas

Forma um engenheiro com perfil para atuar na área de pesquisa e desenvolvimento de materiais com aplicação tecnológica com visão inter e multidisciplinar das áreas tradicionais de Engenharia de Materiais: Metalurgia, Cerâmicas, Polímeros e Compósitos. Os engenheiros de materiais estudam a relação entre a estrutura, as propriedades e o desempenho dos materiais, visando obter novas aplicações ou melhorar a qualidade dos materiais existentes. Do carro aos utensílios de cozinha, do telefone celular aos tecidos das roupas, praticamente tudo tem a intervenção de um profissional de engenharia de materiais. Os engenheiros de materiais atuam em diversos setores industriais: metal-mecânico, indústrias metalúrgicas e siderúrgicas, indústrias de transformação de plásticos, indústrias automobilísticas, indústrias de produção de revestimentos e pisos cerâmicos, indústrias têxteis e de fabricação de fibras sintéticas, indústria aeronáutica e no setor eletro-eletrônico. O Engenheiro de Materiais estará ainda apto à pesquisa, ao desenvolvimento tecnológico e ao desempenho de papéis de liderança na introdução de novas tecnologias, processos e produtos no segmento industrial.

{% assign EM = site.docentes | where:'short_name', page.coord.EM %}{% assign EM = EM[0] %}
<p>
<b>Coordenador do curso: </b><a href="{{site.baseurl}}{{EM.url}}">{{EM.abrev}} {{EM.nome}}</a><br />
:email: <a href="mailto:{{EF.email}}">{{EM.email}}</a><br />
:telephone_receiver: {{EM.fone}}
</p>

<a href="https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=88&codcur=88202&codhab=0&tipo=N" target="_blank">Matriz Curricular</a>
