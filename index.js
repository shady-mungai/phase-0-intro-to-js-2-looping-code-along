// Code your solutions in this file


const names = ["Guadalupe", "Ollie", "Aki"];
console.log(names.length);
function writeCards(names) 
{
    var arr = [];
    
    for(var i=0;i<names.length;i++){
       arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

  return arr;
}

function  countDown(x)
{
    var arr = [];

  for (var i = x ; i >= 0; i--)
    { 
        arr.push(i);
     }

    for(var i=0;i<arr.length;i++)
    {
         console.log(arr[i]);
    }
    

}