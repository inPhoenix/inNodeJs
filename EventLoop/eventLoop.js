// this is a example of the node event loop

function shouldContinue() {
    let pendingTimers = [];
    let pendingOSTask = [];
    let pendingOperations = [];
    return pendingTimers.length || pendingOSTask.length || pendingOperations.length
}

// entire body executes in one tick
while(shouldContinue()) {

}

// exit back