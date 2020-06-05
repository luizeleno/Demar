#!/bin/bash
n=7 # quantas fotos já convertidas
for x in `ls DSC*.JPG`
do

	y=${PWD##*/}
	n=$((n+1))
	m=$(printf "%02d" $n)
	echo $x
	convert -quality 50% -resize 1600 -gravity South -crop 0x50% $x $y-$m.jpg

done
