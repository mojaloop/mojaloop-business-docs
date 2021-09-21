#!/usr/bin/env bash

export GIT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)
echo "Publishing current branch: $GIT_BRANCH..."

echo "Checking out vue-pages"
git checkout vue-pages

echo "Copying..."
git pull mojaloop vue-pages --rebase

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
git commit -a -m "Update vue-pages on github..."

# push to the origin
git push mojaloop vue-pages
