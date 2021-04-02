#!/bin/sh

# https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg

# for var in "$@"
# do
#   echo "file $var" >> videoList.txt
# done
# ffmpeg -f concat -safe 0 -i videoList.txt -c copy cover.mp4
# rm videoList.txt

args=""

for var in "$@"
do
  args+=" -i $var"
done

args+=" -filter_complex \""

i=0
for var in "$@"
do
  args+="[$i:v] "
  ((i++))
done

args+="concat=n=$i:v=1 [v]\""

# ffmpeg -i 1.mp4 -i 2.mp4 -i 3.mp4 -i 4.mp4 -filter_complex "[0:v] [1:v] [2:v] [3:v] concat=n=4:v=1 [v]" -map "[v]" output.mp4
# echo $args
# set -x
echo ffmpeg $args -map \"[v]\" output.mp4