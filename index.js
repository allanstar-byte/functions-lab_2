// Code your solution in this file!

function distanceFromHqInBlocks(location, hq = 42) {
    let blocks = location - hq
    return blocks

}
distanceFromHqInBlocks()

function distanceFromHqInFeet(location_, hq_ = 42, feetConst = 264) {
    let blocks_ = location_ - hq_
    let feet = blocks_ * feetConst

    return feet
}
distanceFromHqInFeet(50)

function distanceTravelledInFeet(start, destination) {
    console.log((destination - start))
    return ((destination - start) * 264)
}
distanceTravelledInFeet(30, 35)


function calculatesFarePrice(start, destination) {
    let feetT = ((destination - start) * 264)
    if (feetT < 400) {
        return 0
    } else if (feetT < 2000) {
        return `${2} cents`
    } else if (feetT < 2500) {
        return `${25} cents`
    } else {
        return 'cannot travel that far'
    }
}

calculatesFarePrice(30, 38)