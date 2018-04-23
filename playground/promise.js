
 var somePromise = new Promise((resolve, reject) => {
   setTimeout(() => {
     // resolve('Hey, it worked!');
     reject('Could not fullfile promise.')
   }, 2500);
 });

 somePromise.then((message) => {
   console.log('Success', message);
 }, (errormessage) => {
   console.log('Failed',errormessage);
 });
