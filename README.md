## Button Coding Challenge

To run the flatten function and associated tests:

- Clone the repo
- Run `npm install`
- Open `index.html` file in browser

function flatten(array){    
  // arrayCopy will create a copy of the array argument     
  var arrayCopy = array;      
  // result array will be returned    
  var result = [];     
  // recurse function will call itself recursively     
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
