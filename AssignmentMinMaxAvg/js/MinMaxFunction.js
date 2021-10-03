var arr = [2,15,42,132,153];
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
      return ("You have an preset array   "+ arr +"<br/>Min: " + min + "<br/> Max: " + max + "<br/> Average: " + average/arr.length)
}
document.write(minMaxAvg(arr))