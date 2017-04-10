install:
	yarn add lodash \
	vue \
	vue-loader \
	vue-template-compiler \
	css-loader \
	babel-core \
	babel-plugin-transform-runtime \
	babel-preset-es2015 \
	babel-register \
	babel-loader \
	babel-runtime \
	vuex \
	axios \
	webpack -D

build: 
	dotnet build

run:
	dotnet watch run
