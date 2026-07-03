#!/bin/bash

dev=true

if $dev; then 

    tsc ./static/js/main.ts
    input="Development"


    # git add .
    # git commit -m input
    # git push
    # rm -rf node_modules

fi