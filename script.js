let currentPlayer = "X";
let array = Array(9).fill(null);

function updateMessage(message) {
    document.getElementById('message').innerText = message;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (const [a, b, c] of winPatterns) {
        if (array[a] && array[a] === array[b] && array[a] === array[c]) {
            updateMessage(`Winner is ${currentPlayer}`);
            return true;
        }
    }

    if (!array.includes(null)) {
        updateMessage('Draw!!');
        return true;
    }

    return false;
}

function handleClick(el) {
    const id = Number(el.id);
    if (array[id] !== null) return;
    array[id] = currentPlayer;
    el.innerText = currentPlayer;
    
    if (checkWinner()) {
        return; // Stop further actions if there's a winner or draw
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateMessage(`Player ${currentPlayer}'s Turn`);
}

function resetGame() {
    array.fill(null);
    document.querySelectorAll('.col').forEach(cell => cell.innerText = '');
    currentPlayer = "X";
    updateMessage(`Player ${currentPlayer}'s Turn`);
}

// Initial message
updateMessage(`Player ${currentPlayer}'s Turn`);
