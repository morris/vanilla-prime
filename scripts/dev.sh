#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail
set -x

bash scripts/vendor.sh

(trap 'kill 0' SIGINT; \
  tsc --project tsconfig.dev.json --watch --preserveWatchOutput & \
  sass --no-source-map --watch src/css/main.scss public/css/main.css & \
  s4d --spa public & \
  wait)
