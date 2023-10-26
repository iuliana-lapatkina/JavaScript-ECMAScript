// Задание 1
async function getUserData(ID) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.ok) {
     let json = await response.json();
     return json[ID - 1];
  } else {
     console.log("Данные с сервера не получены");
  }
}
getUserData(1).then(result => {
  if (result === undefined) {
     console.log("Пользователь не найден");
  } else {
     console.log(result);
  }
});

// Задание 2
async function saveUserData(user) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users",
     {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
     }
  );
  if (response.ok) {
     return response.json();
  } else {
     return new Error("Ошибка данных");
  }
}

const user = {
  name: 'John Smith',
  age: 30,
  email: '<john@example.com>'
};

saveUserData(user)
  .then(() => {
     console.log('User data saved successfully');
  })
  .catch(error => {
     console.log(error.message);
  });
