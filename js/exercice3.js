let tab1 = [1,2,3];
let tab2 = [4,5];
let tab3 = [];

// Tab3 : [1,2,3,4,5]

tab3.push(tab1);
tab3.push(tab2);
console.log(tab3); // FAIL

tab3 = [tab1, tab2];
console.log(tab3); // FAIL

tab3 = tab1.concat(tab2);
console.log(tab3); // SUCCESS


// Tab3 : [0,1,2,3,4,5]
tab3 = [0];

//tab3 = tab3.concat(tab1).concat(tab2);
//tab3 = tab3.concat(tab1,tab2);
tab3 = [0, ...tab1, ...tab2]; // récupère les valeurs de tab1 et tab2
console.log(tab3); 

const somme = function (a, b, c, d){
    return a+b+c+d;
};

somme(1,2,3,4);

let tab4 = [1,2,3,4];
console.log(somme(tab4[0],tab4[1],tab4[2],tab4[3]));
console.log(somme(...tab4));

tab4 = [1,2,3];
console.log(somme(...tab4));

tab4 = [1,2,3,4,5,6,7,8];
console.log(somme(...tab4));

const identite = {"nom" : "alapetite", "prenom" : "mathieu"};
const tabEnfants = { "enfants" : ["leo", "lea"]};

//tabEnfants.enfants = tabEnfants.enfants.concat(identite.prenom);
//console.log(tabEnfants.enfants);

const moi = {...identite, ...tabEnfants};
console.log(moi);


