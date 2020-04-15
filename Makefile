run:
	npm start

hello:
	echo hello

push:
	branchname=$(git describe --contains --all HEAD)
	git add .
	git commit -m "$*" 
	git push origin branchname

deploy:
	npm run deploy