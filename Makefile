run:
	npm start

hello:
	echo hello


deploy:
	npm run build
	npm run deploy

#  git commands
push:
	git add .
	git commit -m $("message") 
	git push origin master
# make new branch
branch:
	git checkout -b $(branchname) 
# switch to already existing branch --- git checkout $(branchname) 
# reverts all changes
revert:
	git checkout -- .

