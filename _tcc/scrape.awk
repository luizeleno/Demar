#!/usr/bin/gawk -f
{
    if($0 ~ /Prezado/) {
        orientador = ""
        for(i=3;i<=NF;i++)
            orientador = orientador $i " ";
        print("- orientador: ", orientador);
    }
    
    if($0 ~ /intitulada/) {
        j = 14;
        aluno = "";
        titulo = "\"";
        while($j!~/intitulada/) {
            aluno = aluno $j " ";
            j++;
        }
        j++;
        while($j!~/foi/) {
            titulo = titulo $j " ";
            j++;
        }
        print("  aluno: ", aluno);
        print("  titulo: ", titulo, "\"");
    }
    
    if($0 ~ /Data:/) {
        data = $2;
        print("  data: ", data);
    }
    
    if($0 ~ /Hora:/) {
        horario = $2;
        print("  horario: ", "\"", horario, "\"");
    }
    
    if($0 ~ /Local:/) {
        local = ""
        for(i=2; i <= NF; i++)
            local =  local $i " ";
        local = "\"" local "\"";
        # TODO: pegar toda a string até o final do registro
        print("  local: ", local, "\n");
    }
}
