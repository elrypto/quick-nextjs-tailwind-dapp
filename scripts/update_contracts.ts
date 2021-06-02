/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');


const dotenv = require('dotenv').config();
const { SRC_DIR, DEST_DIR } = process.env;


const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


(async () => {
  console.log('\n');


  try {
    if (module.parent) process.exit(1); // exit if this is the parent
    console.log('\n');
    console.log('\n');
    console.log('updating contract files - copying');
    console.log('from: ', SRC_DIR);
    console.log('destination: ', DEST_DIR);


    await fs.copy(SRC_DIR, DEST_DIR);

    console.log('\n');
    console.log('\n');

  } catch (err) {
    console.error(err);
  } finally {
    console.log('update complete');
    process.exit(0);
  }

})();


export { }  //hack for TS isolatedModules






