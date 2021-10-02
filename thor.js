// goal : move the game character from point A to point B

// my solution -- way too long and complicated

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    const distX = Math.max(lightX, initialTx) - Math.min(lightX, initialTx);
    const distY = Math.max(lightY, initialTy) - Math.min(lightY, initialTy);

    
    if (initialTy < lightY && initialTx < lightX) {
        let i = 0;
        let j = 0;
        while (i < distY && j < distX) {
            console.log('SE');
            i++;
            j++;
        }
    }

    if (initialTy > lightY && initialTx < lightX) {
        let i = 0;
        let j = 0;
        while (i < distY && j < distX) {
            console.log('NE');
            i++;
            j++;
        }
    }

    if (initialTy > lightY && initialTx > lightX) {
        let i = 0;
        let j = 0;
        while (i < distY && j < distX) {
            console.log('NW');
            i++;
            j++;
        }
    }

    if (initialTy < lightY && initialTx > lightX) {
        let i = 0;
        let j = 0;
        while (i < distY && j < distX) {
            console.log('SW');
            i++;
            j++;
        }
    }

    if (initialTx < lightX) {
        let i = 0;
        while (i < distX) {
            console.log('E');
            i++;
        }
    } else {
        let i = 0;
        while (i < distX) {
            console.log('W');
            i++;
        }
    }
    
   if (initialTy < lightY) {
        let i = 0;
        while (i < distY) {
            console.log('S');
            i++;
        }
    } else {
        let i = 0;
        while (i < distY) {
            console.log('N');
            i++;
        }
    }
}

// some way better solution -- simply change the string according to the desired direction

var direction = "";
    if(thorY > lightY) {
        direction = "N";
        thorY--;
    } else if(thorY < lightY ) {
        direction = "S";
        thorY++;
    }
    
    if(thorX > lightX) {
        direction += "W";
        thorX--;
    } else if(thorX < lightX ) {
        direction += "E";
        thorX++;
    }

    print(direction);