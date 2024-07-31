set -e

for file in $(find build -name '*.js')
do
  terser $file --compress --mangle --output $file
done
