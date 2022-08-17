// Создание тестового массива значений
// Creating a Test Array of Values

const array = [];

const randomInt = (max) => Math.floor(Math.random() * max);

for (let i = 0; i < randomInt(1000); i++) {
  array.push(randomInt(500));
}

// Функция сериализации
// Serialization function

function serialization(arr) {
  let serialized = {};

  arr
    .map((v, i) => {
      serialized[v] = [];
      return v;
    })
    .forEach((v, i) => {
      serialized[v].push(i);
    });

  return JSON.stringify(serialized);
}

// Функция десериализации
// Deserialization function

function deserialization(string) {
  let serialized = JSON.parse(string);
  let deserialized = [];

  for (const number in serialized) {
    serialized[number].forEach((v) => {
      deserialized[v] = number;
    });
  }

  return deserialized;
}

// Тестовые вызовы функции
// Function Test Calls

console.log(serialization(array));
console.log(deserialization(serialization(array)));
