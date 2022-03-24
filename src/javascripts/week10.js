let guests = []

export function addGuest(event) {
    event.preventDefault()
    //^^^do not submit anywhere

    //object creation
    let guest = {
        fname: document.getElementById("fn").value,
        //query selector method is more modern
        lname: document.querySelector("#ln").value
    }

    //.trim removes spaces before and after text
    //empty string is false automatically
    if(guest.fname.trim() && guest.lname.trim()) {
        guests.push(guest)
        let row = document.createElement('tr')
        //add to row element
        //instead of ' and " ... ` ` creates multiline string
        row.innerHTML = `
            <td>${guest.fname}</td>
            <td>${guest.lname}</td>
        `
        //append child adds a CHILD to TBODY(first one if no id specification)
        document.querySelector("tbody").appendChild(row)
    }
    this.reset()
    
}
