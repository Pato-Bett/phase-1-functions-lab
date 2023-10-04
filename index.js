function distanceFromHqInBlocks(pickupLocation){
    const scuberLocation = 42
    let distance
    if (pickupLocation === 43) {
        distance = pickupLocation-scuberLocation
    }else if(pickupLocation === 50){
        distance = pickupLocation-scuberLocation
    }else if (pickupLocation === 34){
        distance = Math.abs(pickupLocation-scuberLocation)
    }
    return distance
}
function distanceFromHqInFeet(distance){
    //Make the function a variable in order to get the return value.
    let distanceInFeet = distanceFromHqInBlocks(distance)*264
    return distanceInFeet
}
function distanceTravelledInFeet(hqLocation,pickupLocation){
    let distance = pickupLocation-hqLocation
    let distanceInFeet = Math.abs(distance*264)
    return distanceInFeet
}
function calculatesFarePrice(start, destination){
    let distanceInFeet = 264*Math.abs(destination - start)
    let farePrice
    if (distanceInFeet>=0 && distanceInFeet<=400) {
        farePrice = 0
    } else if(distanceInFeet>400 && distanceInFeet<=2000) {
        distanceInFeet-=400
        farePrice = 0.02*distanceInFeet
    }else if(distanceInFeet>2000 && distanceInFeet<=2500){
        farePrice = 25
    }else if(distanceInFeet>2500){
        farePrice = 'cannot travel that far'
    }
    return farePrice
}