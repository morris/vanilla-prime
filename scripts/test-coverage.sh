#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail
set -x

rm -rf coverage
c8 --include src --include public --exclude '**/vendor/**' \
  --reporter text --reporter lcov \
  playwright test --project Chromium
