import API from "./data.js"
import renderEntries from "./entriesDOM.js"

// this populates the journal with saved entries as soon as the page loads
API.getJournalEntries()
   .then(parsedEntries => {
      renderEntries(parsedEntries)
   })

const journalSubmit = document.querySelector("#submit_button")

const journalMood = document.querySelector("#mood")
const journalEntry = document.querySelector("#journalEntry")
const journalDate = document.querySelector("#journalDate")
const journalConcepts = document.querySelector("#concepts")

const createNewEntryFactory = (date, title, content, mood) => {
   return {
      "date": date,
      "title": title,
      "content": content,
      "mood": mood
   }
}


// TESTING EDIT vs SAVE FUNCTION
journalSubmit.addEventListener("click", event => {
   const hiddenEntryId = document.querySelector("#entryId")
   const selectFields = document.querySelectorAll(".clear")
   const clearFields = () => selectFields.forEach(field => {
      field.value = ""
   })

   if (hiddenEntryId.value !== "") {
      API.editEntry(hiddenEntryId.value)
      .then(API.getJournalEntries)
         .then(renderEntries)
         .then(clearFields)
   } else {
      const createNewEntry = createNewEntryFactory(journalDate.value, journalConcepts.value, journalEntry.value, journalMood.value)
      API.saveJournalEntry(createNewEntry)
         .then(() => {
            API.getJournalEntries()
               .then(renderEntries)
         })
   }
})

// This filters and renders entries by mood with radio buttons
const journalContainer = document.querySelector(".entryLog")
const radioButtons = document.getElementsByName("filterMood")

radioButtons.forEach(button => {
   button.addEventListener("click", event => {
      journalContainer.innerHTML = "";
      const filteredMood = event.target.value
      API.getJournalEntries()
         .then(entries => {
            const filteredEntries = entries.filter(entry => {
               if (entry.mood === filteredMood) {
                  return entry
               }
            })
            renderEntries(filteredEntries)

         })
   })
})

// this captures the delete button being clicked
journalContainer.addEventListener("click", event => {
   if (event.target.id.startsWith("deleteEntry--")) {
      // Extract entry id from the button's id attribute
      const entryToDelete = event.target.id.split("--")[1]

      // Invoke the delete method, then get all entries and render them
      API.deleteEntry(entryToDelete)
         .then(API.getJournalEntries)
         .then(renderEntries)
   }
})

// this captures the edit button being clicked
journalContainer.addEventListener("click", event => {
   if (event.target.id.startsWith("editEntry--")) {
      const entryIdToEdit = event.target.id.split("--")[1]
      updateFormFields(entryIdToEdit)
   }
})

// this, combined with the edit button, takes the values from 
// a saved entry and populates the journal inputs with said values for editing
const updateFormFields = entryId => {

   const hiddenEntryId = document.querySelector("#entryId")
   const entryTitleInput = document.querySelector("#concepts")
   const entryDateInput = document.querySelector("#journalDate")
   const entryContentInput = document.querySelector("#journalEntry")
   const entryMoodInput = document.querySelector("#mood")

   fetch(`http://localhost:3000/entries/${entryId}`)
      .then(response => response.json())
      .then(entry => {

         hiddenEntryId.value = entry.id
         entryTitleInput.value = entry.title
         entryDateInput.value = entry.date
         entryContentInput.value = entry.content
         entryMoodInput.value = entry.mood
      })
}