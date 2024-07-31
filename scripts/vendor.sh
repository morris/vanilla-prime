set -ex

rm -rf src/vendor
mkdir -p src/vendor

cp node_modules/exdom/dist/exdom.js src/js/vendor/exdom.js
echo "export * from 'exdom';" > src/js/vendor/exdom.d.ts
