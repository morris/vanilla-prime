#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail
set -x

rm -rf src/js/vendor
mkdir -p src/js/vendor

cp node_modules/exdom/dist/exdom.js src/js/vendor/exdom.js
echo "export * from 'exdom';" > src/js/vendor/exdom.d.ts
