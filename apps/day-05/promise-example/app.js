
const getCustomer = (id) => {
  console.log('task 2: start getting customer details',);
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      // contact the server to get information
      // resolve({
      //   id: id,
      //   name: 'hari'
      // });

      reject('contact administrator');
    }, 5000);
  });

  return p;
}

console.log('task 1');
const p = getCustomer(10);
p.then((customer) => {
  console.log('Success customer:', customer);
});
p.catch((error) => {
  console.log('Error occurred:', error);
});

console.log('task 3');
