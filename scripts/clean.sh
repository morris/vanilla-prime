#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail
set -x

rm --recursive --force build coverage dist public/js public/css src/js/vendor
