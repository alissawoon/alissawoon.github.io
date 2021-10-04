var arr = [];

for (var i = 0; i <5; i++) 
{
  arr.push(+prompt('Kindly key in your preferred number ' + (i+1)));
}

function minMaxAvg(arr) {          
  var max = arr[0];
  var min = arr[0];
  var average = 0;
    for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] < min)
      {min = arr[i];}
      
      if (arr[i] > max) 
      {max = arr[i];}
        
      average += arr[i];
    }
    /*return {max, min, avg}; */
    return ("Min:" + min + "<br/> Max: " + max + "<br/> Average: " + average/arr.length) 
}

document.write(minMaxAvg(arr))