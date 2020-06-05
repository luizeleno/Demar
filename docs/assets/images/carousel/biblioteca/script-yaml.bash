#!/bin/bash

d=${PWD##*/}
{
echo "$d:"
echo
for x in `ls $d*.jpg`
do

echo "  - title: "
echo "    url: /assets/images/carousel/$d/$x"
echo "    caption: "
echo "    link: "
echo

done
} > $d.yml
