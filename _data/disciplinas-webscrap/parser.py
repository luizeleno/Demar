import requests
from bs4 import BeautifulSoup

URL = 'https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=88&codcur=88301&codhab=0&tipo=N'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')

for tr in soup('tr'):

    try:  # testando para tipo (obrigatória/optativa)
        tr['bgcolor'] == '#658CCF'
        caso = 'tipo'
        tipo = tr('b')[0].string.split()
        tipo_string = ' '.join(tipo)
        print('\n'+tipo_string)
    except:
        pass


    try:  # testando para semestre
        tr['bgcolor'] == '#CCCCCC'
        caso = 'semestre'
        semestre = tr('span')[0].string.split()
        semestre_string = ' '.join(semestre)
        print('\n'+semestre_string)
    except:
        pass

    try:  # testando para disciplina
        tr['class'] == 'txt_verdana_8pt_gray'
        caso = 'disciplina'
        sigla = tr('a')[0].string.split()[0]
        disciplina = tr('td')[1].string
        print(sigla, disciplina)
    except:
        continue
