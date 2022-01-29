
var sunday=0, monday=0, tuesday=0, wednesday=0, thursday=0, friday=0, saturday=0;

var years = {
    '2022-01-24' : 3,
    '2022-01-02' : 31,
    '2022-01-30' : 5
}

getDays = (day, index) => {
    switch (new Date(day).getDay()){
        case 0 :
        sunday += Object.values(years)[index];
        break;

        case 1 :
        monday += Object.values(years)[index];
        break;

        case 2 :
        tuesday += Object.values(years)[index];
        break;

        case 3 :
        wednesday += Object.values(years)[index];
        break;

        case 4 :
        thursday += Object.values(years)[index];
        break;

        case 5 :
        friday += Object.values(years)[index];
        break;

        case 6 :
        saturday += Object.values(years)[index];
        break;
    }
}

Object.keys(years).map(getDays);

var yearJSON = { monday, tuesday, wednesday, thursday, friday, saturday, sunday }

getValues = Object.values(yearJSON)

zeroIndexes = []

getValues.forEach((n, i) => { n == 0 ? zeroIndexes.push(i):null })

dummyarr = getValues;

arr = [...dummyarr]


getNextFinite = (n) => {
    return dummyarr[n] ? n : getNextFinite(n + 1);
 }

const isAverageSet = (one=3, two=5) => {
    setValue = 0;
    for (let i=one;i<two;i++ ){
        setValue = ( arr[i] == ( arr[i-1] + arr[i+1] ) / 2 ) ? setValue : (setValue + 1);
    }
    return setValue == 0;
}

setAverage = (from = 2 + 1, to = 6) => {
    temp = from;

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

getAverage = (n,i) => {
    if((i != 0) && (i != dummyarr.length - 1) ) {
        if((dummyarr[i + 1]) && (dummyarr[i - 1])){
            console.log( "if", i,n,next)
            arr[i] = ((dummyarr[i + 1]) + (dummyarr[i - 1])) / 2
        } else if (!(dummyarr[i + 1]) && ((dummyarr[i - 1]) )){
            var next = getNextFinite(i);
            console.log("else", i,n,next)
            setAverage(i, next)
        }
    }
}

getValues.map(getAverage)

