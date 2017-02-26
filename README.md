## Button Coding Challenge

To run the flatten function and associated tests:

- Clone the repo
- Run `npm install`
- Open `index.html` file in browser

**function flatten(array){**      
  &nbsp;&nbsp;&nbsp;&nbsp;*arrayCopy will create a copy of the array argument*       
  &nbsp;&nbsp;&nbsp;&nbsp;**var arrayCopy = array;**            
  &nbsp;&nbsp;&nbsp;&nbsp;*result array will be returned*         
  &nbsp;&nbsp;&nbsp;&nbsp;**var result = [];**             
  &nbsp;&nbsp;&nbsp;&nbsp;*recurse function will call itself recursively*          
  &nbsp;&nbsp;&nbsp;&nbsp;**function recurse(arr){**       
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*for loop to iterate through the array*       
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**for(var i = 0; i < arr.length; i++){**   
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*if the element is not null and not an array push to result*                
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if(arr[i] !== null & !Array.isArray(arr[i])){**        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**result.push(arr[i]);**             
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*if element is an array then call the recurse function on the array element*     
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**}else if(Array.isArray(arr[i])){**           
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**recurse(arr[i]);**            
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**}**            
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**}**            
  &nbsp;&nbsp;&nbsp;&nbsp;**}**          
  &nbsp;&nbsp;&nbsp;&nbsp;*run the recurse function with the array copy*          
  &nbsp;&nbsp;&nbsp;&nbsp;**recurse(arrayCopy);**         
  &nbsp;&nbsp;&nbsp;&nbsp;*return the result array*               
  &nbsp;&nbsp;&nbsp;&nbsp;**return result;**          
**};**           
