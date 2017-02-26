## Button Coding Challenge

To run the flatten function and associated tests:

- Clone the repo
- Run `npm install`
- Open `index.html` file in browser

**function flatten(array){**      
  &nbsp;&nbsp;*arrayCopy will create a copy of the array argument*       
  &nbsp;&nbsp;&nbsp;&nbsp;**var arrayCopy = array;**            
  *result array will be returned*         
  **var result = [];**             
  *recurse function will call itself recursively*          
  **function recurse(arr){**       
    *for loop to iterate through the array*       
    **for(var i = 0; i < arr.length; i++){**   
      *if the element is not null and not an array push to result*                
      **if(arr[i] !== null & !Array.isArray(arr[i])){**        
        **result.push(arr[i]);**             
        *if element is an array then call the recurse function on the array element*     
      **}else if(Array.isArray(arr[i])){**           
        **recurse(arr[i]);**            
      **}**            
    **}**            
  **}**          
  *run the recurse function with the array copy*          
  **recurse(arrayCopy);**         
  *return the result array*               
  **return result;**          
**};**           
