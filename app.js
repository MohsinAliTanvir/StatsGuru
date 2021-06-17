
document.getElementById('import').onclick=function(){

    var files=document.getElementById('selectFiles').files;
    var fr = new FileReader();

    fr.onload=function(e){
        const result=JSON.parse(e.target.result);
        var formatted=JSON.stringify(result);
      

       // Fetching the data from the file
       var arr= result.data;
       var length=arr.length;

       // IMPLEMENTING MEAN FUNCTIONALITY
       var total=0; 
       for(var i=0;i<length;i++){
           total=total+arr[i];
       }

       var mean = total/length;
       document.getElementById('mean').textContent = mean;


       //IMPLEMENTING MEDIAN FUNCTIONALITY
       var median=0;
       var sorted=arr.sort();

       if(length%2==0){
        median=(sorted[length/2] + sorted[(length/2)-1])/2;
       }
       else{
           median=sorted[(length-1)/2];
       }

       document.getElementById('median').textContent = median;


       //IMPLEMETING THE MODE FUNCTIONALITY
       var mode=0;
       var count=1;
       var value=0, prev_val=0;
       var prev_count=0;

       for(var i=0;i<length;i++){
        if(sorted[i]==sorted[i+1]){
            count++;
            value=sorted[i];
        }
        else{
            if(count>prev_count){
                prev_count=count;
                prev_val=value;
            }
            count=1;
        }
        }
        
        if(count>prev_count){
            mode=value;
        }
        else{mode=prev_val;
        }
        console.log(mode)
        document.getElementById('mode').textContent = mode;



        //IMPLEMENTING THE S.D
        //S.D= (MEAN OF THE SQUARED VALUES - SQAURE OF THE MEAN)^1/2

        const squared_arr =[];
        var sum=0;
        for(var i=0;i<length;i++){
            squared_arr[i]=(arr[i]) ** 2;
            sum=sum+squared_arr[i];
        }

        var mean_of_squared=sum/length;

        var StandardDeviation= (mean_of_squared-(mean)**2)**(1/2);
        document.getElementById('standardDeviation').textContent = StandardDeviation;
        

    } 
    fr.readAsText(files.item(0));    
}
