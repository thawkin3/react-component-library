const fs = require('fs');
const parentPackage = require('../package');

// Remove the private flag so the dist directory can be published.
delete parentPackage.private;

// Remove the devDependencies flag so that you don't get version mismatches when running tests in the parent app consuming this package
delete parentPackage.devDependencies;

fs.writeFile(__dirname + '/../dist/package.json', JSON.stringify(parentPackage, null, 2), { encoding: 'utf-8', flag: 'w+' }, () => console.log('package.json updated.'));
fs.copyFile(__dirname + '/../README.md', __dirname + '/../dist/README.md', () => console.log('README.md copied.'));
