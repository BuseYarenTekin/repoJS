// var x=1;
// var y=++x;
// var z=x++;
// console.log(y);
// console.log(z);
//let-var ecma5-ecma6

var x="1";
var y=1;


//if(x => y) olsa dahi girildi bloğuna girer.
//normalde ( x > = )
//x === y olursa data type'lara da bakar
// if (x == y) {
//   console.log("Bloğa girildi");
// }
// else {
//   console.log("Bloğa girilmedi");
// }

//var -> tam olarak blobal veya local değil
var x="disarida"

if (true) {
  var x = "iceride"
  console.log(x);
}

console.log(x);


//let -> bellekteki son hali alıyor, local oluyor
var x="disarida"

if (true) {
  let x = "iceride"
  console.log(x);
}

console.log(x);
