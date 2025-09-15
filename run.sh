#!/bin/bash

rm -rfv dist &&
npm install &&
ng build &&
npm cache clean --force &&
npm pack --pack-destination dist &&
npm install --no-save --no-fund ./dist/angular-app-0.0.1.tgz &&
echo "OK" ||
echo "ER" ;

#eof