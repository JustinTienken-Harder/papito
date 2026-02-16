#!/bin/bash

# Script to delete non-JPG files and rename JPG files with ascending numbers

# Check if directory argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

DIR="$1"

# Check if directory exists
if [ ! -d "$DIR" ]; then
    echo "Error: Directory '$DIR' does not exist"
    exit 1
fi

cd "$DIR" || exit 1

# Delete all files that are NOT .jpg (case-insensitive)
find . -maxdepth 1 -type f ! -iname "*.jpg" -delete
echo "Deleted all non-JPG files"

# Rename JPG files with ascending numbers
counter=1
for file in $(find . -maxdepth 1 -iname "*.jpg" | sort); do
    # Get the file extension (preserving case)
    extension="${file##*.}"
    # Rename file
    mv "$file" "./pic${counter}.jpg"
    echo "Renamed '$file' to 'pic${counter}.jpg'"
    ((counter++))
done

echo "Done! JPG files have been renamed starting from pic1.jpg"
