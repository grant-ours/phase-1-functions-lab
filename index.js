function distanceFromHqInBlocks(block){
    if (block >= 42){
        return block-42;
    }else{
        return 42-block;
    }
}

function distanceFromHqInFeet(block){
    if (block >= 42){
        return (block-42)*(264);
    }else{
        return (42-block)*(264);
    }
}

function distanceTravelledInFeet(block1,block2){
    if(block1 >= block2){
        return (block1-block2)*(264);
    }else{
        return (block2-block1)*(264);
    }
}
let distance;
function calculatesFarePrice(start, destination){
    if(start >= destination){
        distance = (start - destination)*264;
    } else {
        distance = (destination - start)*264;
    }
    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance-400)*(.02)
    }else if(distance > 2000 && distance <= 2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }
}