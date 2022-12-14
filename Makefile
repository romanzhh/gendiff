install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint --fix .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	npm test -- --coverage --coverageProiveder=v8
