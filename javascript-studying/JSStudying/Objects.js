const user = {
  name: "Lucas",
  age: 16,
  address: {
    street: "Rua da Piraporinha do Oeste",
    number: "1404",
  },
};

// AN OBJECT IS A COLLECTION OF KEY-VALUE PAIRS IN JAVASCRIPT.

document.body.innerText = "name" in user;
//
document.body.innerText = Object.keys(user);
//
document.body.innerText = Object.values(user);
//
document.body.innerText = Object.entires(user);
//
document.body.innerText = JSON.stringify();
//
