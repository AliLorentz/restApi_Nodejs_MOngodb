import '@babel/polyfill';

import app from './server.js';

async function main(){
	await app.listen(app.get('port'));
	console.log(`Server in port ${app.get('port')}`);
}

main();