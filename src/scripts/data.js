const API = {
    getJournalEntries () {
       console.log("getJournalEntries")
       return fetch("http://localhost:3000/entries")
            .then(entry => entry.json())
            
    },
    saveJournalEntry (entryObject) {
        return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObject)
   })
    },
    deleteEntry (entryId) {
      return fetch(`http://localhost:3000/entries/${entryId}`, {
          method: "DELETE"
      })
          .then(response => response.json())
  },
  editEntry (id) {
    const updatedObject = {
       title: document.querySelector("#concepts").value,
       date: document.querySelector("#journalDate").value,
       content: document.querySelector("#journalEntry").value,
       mood: document.querySelector("#mood").value
    }
   return fetch(`http://localhost:3000/entries/${id}`, {
       method: "PUT",
       headers: {
          "Content-Type": "application/json"
       },
       body: JSON.stringify(updatedObject)
    })
       .then(res => res.json())
       .then(() => {
          document.querySelector("#entryId").value = ""
       })
 
 }
  
}

export default API