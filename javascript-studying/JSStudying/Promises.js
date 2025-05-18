fetch("https://api.github.com/users/luqinhasdev")
  .then((response) => {
    response.text().then((body) => {
      console.log(body);
    });
  })
  .catch((err) => {
    console.log("ERRO");
  });

fetch("https://api.github.com/users/luqinhasdev")
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  .finally(() => {
    console.log("ACABOU");
  });

const twoNumbersSum = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });

async function searchDataOnGithub() {
  try {
    const response = await fetch("https://api.github.com/users/luqinhasdev");
    const body = await response.json();
    console.log(body);
  } catch {
    console.log(err);
  } finally {
    console.log("ACABOU");
  }
}

searchDataOnGithub().then((name) => {
  console.log(name);
});

twoNumbersSum(2, 2).then((sum) => {
  document.body.innerText = sum;
});
