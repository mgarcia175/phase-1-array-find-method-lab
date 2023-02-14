// code your solution here
const superbowlWin = (record) => {
    // if (record.result === "W") return record.year
    const found = record.find(game => game.result === "W") 
    if (found) {
        return found.year
    }
}

record.find(superbowlWin)

// const found = array1.find(element => element > 10);