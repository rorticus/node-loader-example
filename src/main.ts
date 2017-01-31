import { RootRequire } from '@dojo/interfaces/loader';
const dojoRequire: RootRequire = require('@dojo/loader');

dojoRequire.config({
    packages: [
        { name: 'math', location: '../src/modules', main: 'math' }
    ]
});


dojoRequire(['math'], (math) => {
    console.log('Loaded Math');

    console.log(math.sumSomeNumbers([1, 2, 3]));
});