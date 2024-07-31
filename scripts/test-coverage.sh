set -ex

rm -rf coverage
c8 --src public --reporter text --reporter lcov --exclude '**/vendor/**' playwright test $1
