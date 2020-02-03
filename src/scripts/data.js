const API = {
    getJournalEntries () {
       console.log("getJournalEntries")
       return fetch("http://localhost:3000/entries")
            .then(entry => entry.json())
            
    }
}

export default API