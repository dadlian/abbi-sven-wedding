(function() {
   fetch("https://api.ticketingevents.com/v2/events?sort=upcoming&records=1000").then(function(response){
      return response.json()
   }).then(function(body){
      let events = document.getElementById("events")

      for(let entry of body.entries){
         if(entry.start >= "2023-07-27T00:00" && entry.end <= "2023-08-08T00:00"){
            const event = document.createElement("div")
            event.classList.add("event")
            events.appendChild(event)

            let start = dayjs(entry.start)

            const time = document.createElement("div")
            time.classList.add("time")
            time.innerHTML = start.format("DD MMM @ hh:mmA")
            event.appendChild(time)

            const details = document.createElement("div")
            details.classList.add("details")
            event.appendChild(details)

            const name = document.createElement("div")
            name.classList.add("name")
            name.innerHTML = entry.title
            details.appendChild(name)

            const description = document.createElement("div")
            description.classList.add("description")
            description.innerHTML = entry.venue.name
            details.appendChild(description)
         }
      }
   })
})();