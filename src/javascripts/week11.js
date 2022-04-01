export function playTicTacToe() {
    let count = 0
    //select all 9 td's --> create a function FOR EACH --> current function adds HTML to current object
    document.querySelectorAll('td').forEach(function(td) {
        td.onclick = function(e) {
            if(count % 2 == 0) {
                e.target.innerHTML = "<h1>X</h1>"
            } else {
                e.target.innerHTML = "<h1>O</h1>"
            }
            count++
        }
    })
}