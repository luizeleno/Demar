---
title: Recent TCC defenses
permalink: /en/TCC/
---

{% for defesa in site.data.TCC %}

- **Título:** {{defesa.titulo}}
- **Aluno:** {{defesa.aluno}}
- **Orientador:** {{defesa.orientador}}
- **Data:** {{defesa.data}} **Horário:** {{defesa.horario}} **Local:** {{defesa.local}}
{: .card .card-body}

{% endfor %}
