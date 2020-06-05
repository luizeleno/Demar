#!/bin/bash

d=${PWD##*/}
{

n=1

echo "$d:"
echo
for x in `ls $d*.jpg`
do

echo "  - title: "
echo "    url: /assets/images/carousel/$d/$x"
echo "    caption: "
echo "    link: "
echo "    id: foto$n"
echo

n=$((n+1))

done
} > $d.yml
