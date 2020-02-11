import API from "./data.js"
import renderEntries from "./entriesDOM.js"
import events from "./events.js"

// this populates the journal with saved entries as soon as the page loads
API.getJournalEntries()
   .then(parsedEntries => {
      renderEntries(parsedEntries)
   })


// EDIT & SAVE FUNCTION
events.editOrCreateEntry()

// This filters and renders entries by mood with radio buttons
events.filterEntriesByMood()

// This filters and renders entries by searching with a keyword
events.filterEntriesBySearch()

// this captures the delete button being clicked, then deletes the selected entry
events.deleteEntry()


// this captures the edit button being clicked, then repopulates all input fields with the selected entry's values. 
events.editEntry()





