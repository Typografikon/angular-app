#!/bin/bash

rm -rfv .angular dist src/message-api &&
npm install &&
npm run-script build &&
npm install --no-save --no-fund ./dist/angular-app-0.0.1.tgz &&
echo "OK" ||
echo "ER" ;

echo "Now run with: 'ng serve'";

#eof