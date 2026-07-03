#!/bin/bash

isProd=1

type="Development"
dev=true

if $dev; then 
    
        isProd = 0
        
        tsc ./static/js/main.ts

        input="Development"
        
        read -p "Enter Command for Github" input
        git add .
        git commit -m input
        git push
        rm -rf node_modules

fi