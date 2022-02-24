// Функция для проверки максимальной длины строки

function isCommentLengthOk (comment, maxLength) {
  return comment.length <= maxLength;
}

isCommentLengthOk('Первый пошел', 140);


// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomInteger (min, max) {
  if (max < min || min < 0) {
    throw new Error('Введенные данные некорректны');
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

getRandomInteger(10, 50);
