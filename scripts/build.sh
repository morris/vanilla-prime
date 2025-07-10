#!/usr/bin/env sh
set -o errexit
set -o nounset
set -o pipefail
set -x

rm -rf build dist
mkdir -p build

sh scripts/vendor.sh

cp -R public/index.html build
tsc --project tsconfig.build.json
sass --no-source-map --style=compressed src/css/main.scss build/css/main.css

sh scripts/minify.sh
cbst build dist
