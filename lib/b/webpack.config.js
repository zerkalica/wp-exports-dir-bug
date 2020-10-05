const path = require('path');

const browserEntry = path.join(__dirname, '-', 'b.js');
const outDir = path.join(__dirname, '-', 'public')

module.exports = {
  entry: browserEntry,
  resolve: {
    alias: {
      // Uncomment this alias to show that node correctly parses exports in package.json
      // '@some/lib-a/a': require.resolve('@some/lib-a/a')
    },
  },
  output: {
    filename: path.basename(browserEntry),
    path: outDir
  },
}

console.log(module.exports)
