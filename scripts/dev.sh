set -ex

bash scripts/vendor.sh

(trap 'kill 0' SIGINT; \
  tsc --project tsconfig.dev.json --watch --preserveWatchOutput & \
  sass --watch src/css/main.scss public/css/main.css & \
  s4d --spa public & \
  wait)
