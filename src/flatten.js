function flatten(array){
  var arrayCopy = array;
  var result = [];
  function recurse(arr){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== null & !Array.isArray(arr[i])){
        result.push(arr[i]);
      }else if(Array.isArray(arr[i])){
        recurse(arr[i]);
      }
    }
  }
  recurse(arrayCopy);
  return result;
};
