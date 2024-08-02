#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail

for file in $(find build -name '*.js')
do
  terser $file --compress --mangle --output $file
done
