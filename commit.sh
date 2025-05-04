#!/bin/bash

# Get the list of modified and untracked files
modified_files=$(git status --porcelain | grep '^ M' | cut -c 4-)
deleted_files=$(git status --porcelain | grep '^ D' | cut -c 4-)
untracked_files=$(git status --porcelain | grep '^??' | cut -c 4-)

# Add modified files
if [[ -n "$modified_files" ]]; then
  for file in $modified_files; do
    echo "Adding modified file: $file"
    git add "$file"
  done
fi

# Add deleted files
if [[ -n "$deleted_files" ]]; then
  for file in $deleted_files; do
    echo "Adding deleted file: $file"
    git add "$file"
  done
fi

# Add untracked files
if [[ -n "$untracked_files" ]]; then
  for file in $untracked_files; do
    echo "Adding untracked file: $file"
    git add "$file"
  done
fi

# Commit with a message based on the files added
commit_message="Update: Added/Modified files"
if [[ -n "$modified_files" ]]; then
  commit_message="$commit_message - Modified: $modified_files"
fi
if [[ -n "$deleted_files" ]]; then
  commit_message="$commit_message - Deleted: $deleted_files"
fi
if [[ -n "$untracked_files" ]]; then
  commit_message="$commit_message - Untracked: $untracked_files"
fi

# Commit the changes
echo "Committing with message: $commit_message"
git commit -m "$commit_message"

# Check the status after committing
git status
