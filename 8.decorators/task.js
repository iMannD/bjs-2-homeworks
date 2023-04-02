//Задача № 1
function cachingDecoratorNew(func) {
  
}

function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = md5(args); // получаем правильный хеш c помощью функции md5
      let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
      if (objectInCache) { // если элемент найден
          console.log("Из кэша: " + ???); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + ???;
      }
  
      let result = func(...args); // в кеше результата нет — придётся считать
      cache.push(???) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        ??? // если слишком много элементов в кеше, надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }

//Задача № 2
function debounceDecoratorNew(func, delay) {
  


/* function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item)=> item.hash === hash ); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1 ) { // если элемент не найден
        console.log("Из кэша: " + cache[idx].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash, result}) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
} */


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
