input="docentes-lista.txt"

while IFS= read -r prof
do

echo $prof
    
cat > "$prof.md" << EOF
---
nome: $prof
short_name: 
bibname: 
apelido: 
position: 
Lattes: 
ResearcherID: 
ORCID: 
GoogleScholar: 
image: 
CV: 
---

EOF

done < $input

    

