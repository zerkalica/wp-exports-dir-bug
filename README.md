# Directories in right part of exports field in package.json webpack bug

See https://github.com/webpack/enhanced-resolve/issues/256

1. Clone, yarn install
2. cd `lib/b`
3. yarn build

Actual: `Module not found: Error: Can't resolve '@some/lib-a/a' in '.../wp-exports-dir-bug/lib/b/-'`
Expecteed: no errors


