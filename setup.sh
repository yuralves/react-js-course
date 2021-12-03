#!/bin/bash
# setup for this project
yarn init -y
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/reset-react @babel/cli @babel/plugin-transform-runtime babel-loader webpack webpack-cli webpack-dev-server style-loader css-loader file-loader axios

# Start the app
yarn webpack-dev-server --mode development
