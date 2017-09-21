var maxTime = 0;


var evenDoubler = function(v, callback){
   var waitTime = Math.floor(Math.random()*maxTime);
   if (v%2){
      setTimeout(function(){callback(new Error('odd input'),null,waitTime)},waitTime);
   }
   else
   {
       setTimeout(function(){callback(null,v*2,waitTime)},waitTime);
   }
};

for(var i=0;i<10;i++)
{
    console.log(i);
evenDoubler(i,function(err,results,time)
{
    if(err){
        console.log("Error: "+err.message+' Time spent: ' +time+' (ms)');
    }else
    {
        console.log("Result is "+ results+' Time spent: ' +time+' (ms)');
    }
}
);
}