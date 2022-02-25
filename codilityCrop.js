
function solution(message, K) {

    let arr= message.split(" ");
    let stringLength= 0;
    let returnString=""
    if(message.length < K){
        return message
    }
    for(let i=0; i<arr.length; i++){
        stringLength +=arr[i].length;
        if(stringLength===K){
        for(let j =0; j<=i; j++){
            if(j!==0){
            returnString +=" "+arr[j];
            } else {
            returnString +=arr[j];
            }
        }
        return returnString;
        }
        if(stringLength>K){
        for(let j =0; j<i; j++){
        if(j!==0){
            returnString +=" "+arr[j];
            } else {
                returnString +=arr[j];
            }
        }
        returnString.trim();
        return returnString;
        }
        stringLength++;
    }
}
