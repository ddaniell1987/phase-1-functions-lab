const hqLocation = 42

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42)
        return pickupLocation - 42
    else (pickupLocation < 42) 
        return 42 - pickupLocation
}

const feetInABlock = 264
function distanceFromHqInFeet(pickupLocation) {
   if (pickupLocation > 42)
    return (pickupLocation - 42) *264
   else (pickupLocation < 42)
   return (42 - pickupLocation) *264 
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    let distance = Math.abs(startingBlock - endingBlock) *264
    return distance;
}

function calculatesFarePrice(startingBlock, endingBlock) {
    distanceFromHqInFeet(startingBlock, endingBlock);

    let distance = Math.abs(startingBlock - endingBlock) * 264;
    
    if(distance <= 400){
        return 0; //$0
    } else if (distance >= 401 && distance <= 2000){
        return(distance - 400) * 0.02 //Pay 2 cents per foot, excluding the first 400 feet
    } else if( distance >= 2001 && distance <= 2500){
        return 25; //$25
    }          
    else{ 
        return 'cannot travel that far'
    }
}