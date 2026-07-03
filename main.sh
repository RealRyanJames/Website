#!/bin/bash

isProd=1

type="Development"
dev=true

if $dev; then 
    
        isProd = 0
        
        tsc main.ts

        git add .
        git commit -m "Added Initial Button Code"
        git push
        rm -rf node_modules

fi