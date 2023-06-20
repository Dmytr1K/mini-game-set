install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci

run:
	bin/mini-games.js

global-install: install
	npm link

global-uninstall:
	npm uninstall --global mini-game-set

global-run:
	mini-games

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

publish-test:
	npm publish --dry-run

.PHONY: test
