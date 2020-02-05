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
}

export default API