install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci

run:
	bin/mini-games.js

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
