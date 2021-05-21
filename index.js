function distanceFromHqInBlocks(blocks){
    let distance;
    let hq = 42;
    if (hq > blocks){
        distance = hq - blocks;
    } else {
        distance = blocks - hq;
    }
    return distance;
}

function distanceFromHqInFeet(feet){
    let blockToFeet = 264;
    return distanceFromHqInBlocks(feet) * blockToFeet;
    
}
function distanceTravelledInFeet(start, end){
    if (start > end){
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }
}
function calculatesFarePrice(start, end){
    let feet = distanceTravelledInFeet(start, end);
    if (feet <= 400){
        return 0;
    } else if (feet > 400 && feet <= 2000){
        return (feet - 400) * .02;
    } else if (feet > 2000 && feet <= 2500){
        return 25;
    } else if (feet > 2500){
        return 'cannot travel that far';
    }
}