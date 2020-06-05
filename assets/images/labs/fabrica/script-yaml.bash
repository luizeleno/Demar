#!/bin/bash

d=${PWD##*/}

echo "$d\:"
echo

{
find . -type f -name '*.jpg' -exec sh -c '
  for file do

  d=${PWD##*/}
    y=`basename "$file" .jpg`

    echo "  - title: "
    echo "    url: /assets/images/labs/fabrica/$file"
    echo "    caption: $y"
    echo "    link: "
    echo "    id: "
    echo

  done
' sh {} +

} | sed 's/exemplos./exemplos/g'
