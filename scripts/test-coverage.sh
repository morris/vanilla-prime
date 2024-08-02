#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail
set -x

rm --recursive --force coverage
c8 --src public --reporter text --reporter lcov --exclude '**/vendor/**' playwright test $1
