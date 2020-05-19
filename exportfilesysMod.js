const filesys = require('fs');

//const read = filesys.readdirSync('./');

//console.log(read);

filesys.readdir('./',function(err,files){

if(err){
console.log('Error',err);
}

else{
console.log('Result',files)
}

})
