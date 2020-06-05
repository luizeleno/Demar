#!/bin/bash
n=1
	for x in `ls DSC*.JPG`
do

	y=${PWD##*/}
	m=$(printf "%02d" $n)
	n=$((n+1))
	echo $x
	#convert -quality 50% -resize 1600 -gravity South -crop 0x50% $x $y-$m.jpg
	convert -quality 50% -resize 1024 $x $y-$m.jpg

done
