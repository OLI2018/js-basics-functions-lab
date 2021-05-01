// Code your solution in this file!
const address = 42; 
let price = 0; 

function distanceFromHqInBlocks(block) {

    let dist = block - address; 
    if (dist < 0 ) {
        dist = dist * -1; 
    }
    return dist; 
}

function distanceFromHqInFeet (block) {

    let distFeet = (block - address)*264; 
    if (distFeet < 0) {
        distFeet = distFeet * -1; 
    }
    return distFeet; 
}

function distanceTravelledInFeet (start, end) {

    let distTraveled = (end - start) * 264; 
    if (distTraveled < 0) {
        distTraveled = distTraveled * -1; 
    }
    return distTraveled; 
}

function calculatesFarePrice (start, destination) {

    let distTraveledPrice = (destination - start) * 264; 
    if (distTraveledPrice < 0) {
        distTraveledPrice = distTraveledPrice * -1; 
    }

    if (distTraveledPrice <= 400) {
        return price; 
    }

    else if (distTraveledPrice > 400 && distTraveledPrice <=2000) {
        return price = 2/100 * (distTraveledPrice - 400); 
    }

    else if (distTraveledPrice > 2000 && distTraveledPrice <=2500) {
        return 25; 
    }

    else return "cannot travel that far"; 
    
}

