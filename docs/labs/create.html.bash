input="labs-lista.txt"

while IFS= read -r lab
do

echo $lab

cat > "$lab.md" << EOF
---
title:
  br: $lab
  en: 
responsavel:
---

EOF

done < $input
