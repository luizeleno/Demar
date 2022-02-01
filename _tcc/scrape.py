from bs4 import BeautifulSoup
import json

URL = 'TCC.html'
with open(URL, 'r') as url:
    text = url.read()

soup = BeautifulSoup(text, 'html.parser')

# inicializando o dicionário
TCC = {}

# cada tbody contem um trabalho
for tbody in soup.find_all('tbody'):
    
    # orientador e aluno
    s = tbody.find_all('strong')
    orientador = s[0].text
    aluno = s[2].text

    # título
    s = tbody.find_all('em')
    titulo = s[0].text

    # data, hora, local
    for td in tbody.find_all('td'):
        if td.find('strong'):
            if td.strong.text == 'Data:':
                data = td.text.split()[1]
            if td.strong.text == 'Hora:':
                hora = td.text.split()[1]
            if td.strong.text == 'Local:':
                local = td.text.split()[1]
    
    # acrescentando ao dicionário
    TCC[aluno] = {}
    TCC[aluno]['aluno'] = aluno
    TCC[aluno]['orientador'] = orientador
    TCC[aluno]['titulo'] = titulo
    TCC[aluno]['hora'] = hora
    TCC[aluno]['data'] = data
    TCC[aluno]['local'] = local

with open(f'TCC.json', 'w') as f:
        json.dump(TCC, f)
