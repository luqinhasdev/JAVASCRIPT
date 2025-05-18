const user = {
  name: "Lucas",
  age: 16,
  address: {
    street: "Rua da Piraporinha do Oeste",
    number: "1404",
  },
};

document.body.innerText = user.address ? user.address.street : "NOT INFORMED"; // NÃO EFICIENTE

document.body.innerText = user.address?.street ?? "NOT INFORMED"; // MANEIRA CORRETA
