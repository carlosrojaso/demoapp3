#!/bin/sh
if [ -z "$1" ]
then
  echo "Cual directorio quieres enviar a GitHub Pages?"
  exit 1
fi
git subtree push --prefix $1 origin gh-pages
