API.getJournalEntries()
.then(parsedEntries => {
   renderEntries(parsedEntries)
})