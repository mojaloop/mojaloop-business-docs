#!/usr/bin/env bash

export GIT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)
echo "Publishing current branch: $GIT_BRANCH..."

echo "Checking out gh-pages"
git checkout gh-pages

echo "Copying..."
git pull mojaloop gh-pages --rebase

echo "Install dependencies..."
yarn

echo "Build"
yarn build

echo "Staging general changes..."
git add .

echo "Staging distribution..."
git add --force docs/.vuepress/dist

echo "Staging versions..."
git add --force website

# commit
git commit -a -m "Update gh-pages on github..."

# push to the origin
# git push mojaloop gh-pages
