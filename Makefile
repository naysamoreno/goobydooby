run:
	npm start

hello:
	echo hello

push:
	branchname=$(git describe --contains --all HEAD)
	git add .
	git commit -m $(mmake ) 
	git push origin master
	git push origin branchname

deploy:
	npm run build
	npm run deploy

