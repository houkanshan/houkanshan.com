#!/bin/sh

# ffmpeg -i "$0" -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis "${0%%.mp4}.webm"
ffmpeg -i cover.mp4 -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis cover.webm