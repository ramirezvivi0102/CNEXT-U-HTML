var z=0
var condicion = i==50;
while(z<=100 && !condicion){
	document.write(z);
	document.write('<br>');
	z++;
	condicion = (z == 51);
}

for (k=0;k<=100 && k!=51;k++){
	document.write(k);
	document.write('<br>');
	// if (k==50){
	// 	k=100;
	// }
}

var peras;
for (peras = 0; peras < 5; peras++) {
  // Se ejecuta 5 veces, con valores de peras desde 0 hasta 4.
  console.log('peras');
};
La sentencia do...while se repite hasta que la condición especificada que se evalúa sea false.
do {
  i += 1;
  console.log(i);
} while (i < 5);