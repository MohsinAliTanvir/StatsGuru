
//Fetch through file upload
document.getElementById('import').onclick=function(){

    var files=document.getElementById('selectFiles').files;
    var fr = new FileReader();
    fr.readAsText(files.item(0));    

    fr.onload=function(e){
        const result=JSON.parse(e.target.result);
        display(result);
    } 
}
// Fetch through URL
document.getElementById('fetch').onclick=function(){
    var staticURL=document.getElementById('fetch-url').value;
        $.getJSON(staticURL,function(data){
            display(data);
        });
}

// IMPLEMENTING MEAN FUNCTIONALITY
function findMean(inputData){
    var arr= inputData.data;
    const length=arr.length;

    const total= arr.reduce((acc,val) => acc+val);
    const mean = total/length;
    return mean;
}

//IMPLEMENTING MEDIAN FUNCTIONALITY
function findMedian(inputData){
    var arr= inputData.data;
    var length=arr.length;

    let median=0;
    let sorted=arr.sort();

    // For even number of values, median is the avg. of the middle two numbers
    // For odd, median is the middle value exactly 
    if(length%2===0){
        let p=sorted[length/2];
        let q=sorted[(length/2)-1];
        median=(p+q)/2
    }
    else{
        median=sorted[(length-1)/2]
    }
    return median;
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

     return mode;
}

//IMPLEMETING THE S.D FUNCTIONALITY
// S.D = (mean of the squared values -s qaure of the mean)^1/2
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
        return StandardDeviation;

}

// Display functoin
function display(inputData){
    document.getElementById('mean').textContent = findMean(inputData).toPrecision(3);
    document.getElementById('median').textContent = findMedian(inputData);
    document.getElementById('mode').textContent = findMode(inputData);
    document.getElementById('standardDeviation').textContent = findStandardDeviation(inputData).toPrecision(4);
}

//'https://api.jsonbin.io/b/60cd063f8ea8ec25bd107032'