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
      cache.push({hash: hash, value: result}) ; // добавляем элемент с правильной структурой
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
  const showCoords = (x, y) => console.log('Клик:(${x},${y})');
  function decorator(f,ms) {
    let timeout;

    return function (...args) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        f.apply(this,args);
        console.timeEnd("time"); //(2)
      }, ms);
    };
  }
  const delayedFunc = decorator(showCoords, 1000);

  console.time("time"); //(1)
  
}
