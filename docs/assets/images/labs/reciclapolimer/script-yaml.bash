#!/bin/bash

d=${PWD##*/}

echo "$d:"
echo

name=reciclapolimer

{
find . -type f -name "$name*.jpg" -exec sh -c '
  for file do

  d=${PWD##*/}
    y=`basename "$file" .jpg`

    echo "  - title: "
    echo "    url: /assets/images/labs/$d/$file"
#     echo "    caption: $y"
#     echo "    link: "
    echo "    id: $y"
    echo

  done
' sh {} +
} | sed 's/$name./name/g' | sed 's/\.\//\//g'
