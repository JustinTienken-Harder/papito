#!/bin/bash

# Script to create a directory with monthly subdirectories

# Prompt for path destination
read -p "Enter the destination path (default: current directory): " dest_path

# Use current directory if empty
if [ -z "$dest_path" ]; then
    dest_path="."
fi

# Check if destination path exists
if [ ! -d "$dest_path" ]; then
    echo "Error: Destination path '$dest_path' does not exist"
    exit 1
fi

# Prompt for folder name
read -p "Enter the folder name (e.g., 2024): " folder_name

# Check if input is empty
if [ -z "$folder_name" ]; then
    echo "Error: Folder name cannot be empty"
    exit 1
fi

# Full path for the new directory
full_path="$dest_path/$folder_name"

# Check if directory already exists
if [ -d "$full_path" ]; then
    echo "Error: Directory '$full_path' already exists"
    exit 1
fi

# Create the main directory
mkdir -p "$full_path"
echo "Created directory: $full_path"

# Array of months
months=("January" "February" "March" "April" "May" "June" "July" "August" "September" "October" "November" "December")

# Create subdirectories for each month
for month in "${months[@]}"; do
    mkdir -p "$full_path/$month"
    echo "Created subdirectory: $full_path/$month"
done

echo "All month subdirectories have been created successfully!"
