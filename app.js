
document.getElementById('import').onclick=function(){

    var files=document.getElementById('selectFiles').files;
    var fr = new FileReader();
    fr.readAsText(files.item(0));    

    fr.onload=function(e){
        const result=JSON.parse(e.target.result);
        findMean(result);
        findMedian(result);
        findMode(result);
        findStandardDeviation(result);
    } 
}


// IMPLEMENTING MEAN FUNCTIONALITY
function findMean(inputData){
    var arr= inputData.data;
    const length=arr.length;

    const total= arr.reduce((acc,val) => acc+val);
    const mean = total/length;
    document.getElementById('mean').textContent = mean;
    return mean;
}

//IMPLEMENTING MEDIAN FUNCTIONALITY
function findMedian(inputData){
    var arr= inputData.data;
    var length=arr.length;

    let median=0;
    let sorted=arr.sort();
    length%2===0 ? median=(sorted[length/2] + sorted[(length/2)-1])/2 : median=sorted[(length-1)/2];
    document.getElementById('median').textContent = median;
}

//IMPLEMETING THE MODE FUNCTIONALITY
function findMode(inputData){
    var arr= inputData.data;
    var length=arr.length;

    let mode=0;
    let count=1;
    let value=0, prev_val=0;
    let prev_count=0;
    let sorted=arr.sort();

    for(let i=0;i<length;i++){
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
     count>prev_count ? mode=value : mode=prev_val;
     document.getElementById('mode').textContent = mode;
}

//IMPLEMETING THE S.D FUNCTIONALITY
function findStandardDeviation(inputData){
    var arr= inputData.data;
    var length=arr.length;

    const squared_arr =[];
        var sum=0;
        for(let i=0;i<length;i++){
            squared_arr[i]=(arr[i]) ** 2;
            sum=sum+squared_arr[i];
        }

        const mean_of_squared=sum/length;
        let mean=findMean(inputData);
        const StandardDeviation= (mean_of_squared-(mean)**2)**(1/2);
        document.getElementById('standardDeviation').textContent = StandardDeviation;


}