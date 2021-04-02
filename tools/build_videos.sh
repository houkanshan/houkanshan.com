#!/bin/sh

for var in "$@"
do
  ffmpeg -i "$var" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "${var%%.gif}.mp4"
done

for var in "$@"
do
  echo "file ${var%%.gif}.mp4" >> videoList.txt
done

cat videoList.txt

ffmpeg -f concat -safe 0 -i videoList.txt -c copy cover.mp4
ffmpeg -i cover.mp4 -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis "cover.webm"
rm videoList.txt
