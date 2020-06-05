---
title:
  br: Novo website do Demar no ar
  en: Demar new website up and running
image: "/assets/images/demar/Fachada-banner.jpg"
caption:
  br: Entrada principal do Demar
  en: Demar main entrance
---

{% contentfor br %}

Website do {{site.title}} funcionando! :fireworks: :tada:

O site foi criado usando o gerador de páginas estáticas [Jekyll]{:target="_blank"}, com elementos de *layout* da moderna biblioteca [Bootstrap]{:target="_blank"}, o que garante uma navegação confortável em todos dispositivos (*wide screen*, *notebooks*, *tablets*, celulares, etc.).

Uma imensidade de plugins foi  utilizada para a confecção do site, o que só foi possível com a dedicação de um grande número de desenvolvedores da comunidade de software livre. **Todo o site foi criado apenas com rotinas e bibliotecas de código aberto,** disponibilizadas via [Github]{:target="_blank"}, num ambiente criativo e colaborativo: [Linux]{:target="_blank"}.

{% assign resp_list = site.docentes | where:'short_name', 'eleno' %}
{% assign resp = resp_list[0] %}

O criador e responsável pela página é o [{{ resp.abrev }} {{ resp.nome }}]({{site.baseurl}}{{resp.url}}).

[Jekyll]: https://jekyllrb.com/
[Bootstrap]: https://getbootstrap.com/
[Github]: https://github.com/
[Linux]: https://www.linux.org

{% endcontentfor %}

{% contentfor en %}

{{site.title}} website up and running! :fireworks: :tada:

The site was created using the [Jekyll]{:target="_blank"} static page generator, with layout elements from the  modern [Bootstrap]{:target="_blank"} library, which ensures a comfortable navigation on all devices (wide screens, notebooks, tablets, cellphones, etc.).
**The complete site was created exclusively using open-source routines and libraries,** made available through [Github]{:target="_blank"}, in a creative and collaborative environment: [Linux]{:target="_blank"}.

{% assign resp_list = site.faculty | where:'short_name', 'eleno' %}
{% assign resp = resp_list[0] %}

The webpage creator and administrator is [{{ resp.abrev }} {{ resp.nome }}]({{resp.url}}).

[Jekyll]: https://jekyllrb.com/
[Bootstrap]: https://getbootstrap.com/
[Github]: https://github.com/
[Linux]: https://www.linux.org

{% endcontentfor %}
