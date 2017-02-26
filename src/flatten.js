function flatten(array){
  var arrayCopy = array;
  var result = [];
  function recurse(arr, res){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== null & !Array.isArray(arr[i])){
        res.push(arr[i]);
      }else if(Array.isArray(arr[i])){
        recurse(arr[i], res);
      }
    }
  }
  recurse(arrayCopy, result);
  return result;
}
