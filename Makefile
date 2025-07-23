SHELL := /bin/bash

.PHONY: gh-init gh-push

# GitHub Pages URLs
GIT_REPO_SSH_URL	:= git@github.com:ashuksu/project_d.git
GIT_BRANCH			:= 'temp'

gh-init:
	@git init && \
	git remote add origin $(GIT_REPO_SSH_URL) && \
	git branch -m $(GIT_BRANCH)

gh-push:
	git add . -f && \
	git commit -am "Initial Commit $(shell date +%F\ %T)" || true && \
	git push -u origin GIT_BRANCH --force
