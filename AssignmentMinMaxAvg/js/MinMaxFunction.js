var arr = [10, 15, 20, 25, 38, 59, 73, 81, 92, 102];
var max = arr[0];
var min = arr[0];
var average = 0; 

function minMaxAvg(arr) {
    
    for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] < min)
      {min = arr[i];}
      
      if (arr[i] > max) 
      {max = arr[i];}
        
      average += arr[i];
    }
    /*return {max, min, avg}; */
      return ("Min: " + min + "<br/> Max: " + max + "<br/> Average: " + average/arr.length)
}
document.write(minMaxAvg(arr))