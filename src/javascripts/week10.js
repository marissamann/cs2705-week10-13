let guests = []

export function addGuest(event) {
    event.preventDefault()
    //^^^do not submit to server

    //object creation
    let guest = {
        fname: document.getElementById("fn").value,
        //query selector method is more modern
        lname: document.querySelector("#ln").value
    }

    //.trim removes spaces before and after text
    //empty string is false automatically
    if(guest.fname.trim() && guest.lname.trim()) {

        if(localStorage.getItem("guests")) {
            guests = JSON.parse(localStorage.getItem("guests"))
            guests.push(guest)
        }
        else {
            guests.push(guest)
        }

        localStorage.setItem("guests", JSON.stringify(guests))

        let row = document.createElement('tr')
        //instead of ' and " ... ` ` creates multiline string
        row.innerHTML = `
        <td>${guest.fname}</td>
        <td>${guest.lname}</td>
        `
        //append child adds a CHILD to TBODY(first one if no id specification)
        document.querySelector("tbody").appendChild(row)
    }
    //disapear from FORM after submit
    this.reset()
}

//function when window opens(set in main)... saves each guest item in local storage to keep when refresh
//must clear browser cache to remove guests
export function loadGuests() {
    if(localStorage.getItem('guests')) {
        //get guest from local storage... convert to JSON object
        let guests = JSON.parse(localStorage.getItem('guests'))
        for(let g of guests) {
            let row = document.createElement('tr')

            row.innerHTML = `
            <td>${g.fname}</td>
            <td>${g.lname}</td>
            `
            document.querySelector("tbody").appendChild(row)
        }
    }
}
