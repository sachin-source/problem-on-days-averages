var sunday=0, monday=0, tuesday=0, wednesday=0, thursday=0, friday=0, saturday=0;

getDays = (day, index) => {
    switch (new Date(day).getDay()){
        case 0 :
        sunday += index;
        break;

        case 1 :
        monday += index;
        break;

        case 2 :
        tuesday += index;
        break;

        case 3 :
        wednesday += index;
        break;

        case 4 :
        thursday += index;
        break;

        case 5 :
        friday += index;
        break;

        case 6 :
        saturday += index;
        break;
    }
}


var years = {
'2020-01-01' : 4,
'2022-01-29' : 2,
'2021-04-03' : 5,
'2020-01-11' : 4,
'2022-01-20' : 2,
'2021-04-23' : 5,
'2020-11-01' : 4,
'2002-01-25' : 2,
'2001-04-03' : 5,
}


Object.keys(years).map(getDays);

var yearJSON = { monday, tuesday, wednesday, thursday, friday, saturday, sunday }


getValues = Object.values(yearJSON)

zeroIndexes = []

getValues.forEach((n, i) => { n == 0 ? zeroIndexes.push(i):null })




dummyarr = [1,2,3,0,0,3,4]

zeroIndexes = []

dummyarr.forEach((n, i) => { n == 0 ? zeroIndexes.push(i):null })

getAverage = (n,i) => {
if((dummyarr[n + 1]) && (dummyarr[n - 1])){
dummyarr[n] = ((dummyarr[n + 1]) + (dummyarr[n - 1])) / 2
}
}

getAverage = (n,i) => {
if((dummyarr[n + 1]) && (dummyarr[n - 1])){
dummyarr[n] = ((dummyarr[n + 1]) + (dummyarr[n - 1])) / 2
} else if (!(dummyarr[n + 1]) && (dummyarr[n - 1])){
 var next = getNextFinite(n);
console.log(next)
}
}

getNextFinite = (n) => {
   return dummyarr[n] ? n : getNextFinite(n + 1);
}

arr = [3, 0, 4, 0, 0,0, 12]

setAverage = (from = 2 + 1, to = 6) => {
    temp = from + 1;

    for(;temp<to;temp++){
       arr[temp] = ((arr[from] + arr[to]) / 2);
    }

    var isSet = 0;
        while(!isSet){
            isSet = (arr[from] == ((arr[from + 1] + arr[from - 1]) / 2));
            !isSet && (arr[from] = ((arr[from + 1] + arr[from - 1]) / 2));
            !isSet && console.log("asdfasdf");
        }
}



const isAverageSet = (from=3, to=5) => {
    setValue = 0;
    for (let i=3;i<5;i++ ){
        setValue = ( arr[i] == ( arr[i-1] + arr[i+1] ) / 2 ) ? setValue : (setValue + 1);
    }
}

/**
 * 
 * 
 * arr = [3, 0, 4, 0, 0,0, 12]

setAverage = (from = 2 + 1, to = 6) => {
    temp = from + 1;

    for(;temp<to;temp++){
       arr[temp] = ((arr[from] + arr[to]) / 2);
    }

    var isSet = 0;
        while(!isAverageSet(from, to - 1)){
            isSet = (arr[from] == ((arr[from + 1] + arr[from - 1]) / 2));
            !isSet && (arr[from] = ((arr[from + 1] + arr[from - 1]) / 2));
            !isSet && console.log("asdfasdf");
        }
}

const isAverageSet = (one=3, two=5) => {
    setValue = 0;
    for (let i=one;i<two;i++ ){
        setValue = ( arr[i] == ( arr[i-1] + arr[i+1] ) / 2 ) ? setValue : (setValue + 1);
    }
    return setValue == 0;
}


 * 
 * 
 */


/**
 * 
 * 
 * arr = [3, 0, 4, 0, 0,0, 12]

setAverage = (from = 2 + 1, to = 6) => {
    temp = from + 1;

    for(;temp<to;temp++){
       arr[temp] = ((arr[from] + arr[to]) / 2);
    }

    while(!isAverageSet(from, to - 1)){
    var isSet = 0;
        for(let j = from;j<to;j++){
            isSet = (arr[j] == ((arr[j + 1] + arr[j - 1]) / 2));
            !isSet && (arr[j] = ((arr[j + 1] + arr[j - 1]) / 2));
            !isSet && console.log("asdfasdf");
        }
    }
}

const isAverageSet = (one=3, two=5) => {
    setValue = 0;
    for (let i=one;i<two;i++ ){
        setValue = ( arr[i] == ( arr[i-1] + arr[i+1] ) / 2 ) ? setValue : (setValue + 1);
    }
    return setValue == 0;
}

 * 
 * 
 */

calculateAverage 