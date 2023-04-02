//Задача № 1

function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = md5(args); // получаем правильный хеш c помощью функции md5
      let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
      if (objectInCache) { // если элемент найден
          console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + objectInCache.value
      }
  
      let result = func(...args); // в кеше результата нет — придётся считать
      cache.push({hash: md5(args), value: result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.shift(); 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }

//Задача № 2
function debounceDecoratorNew(func, delay) {
  


function debounceDecoratorNew(func, ms) {  
  let timerId = null;
  function wrapper (...args){
    if (timerId === null) {
      func(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => timerId = null, ms);
  }
  return wrapper;
} 
