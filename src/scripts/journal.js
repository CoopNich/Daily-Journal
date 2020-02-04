import API from "./data.js"
import renderEntries from "./entriesDOM.js"
import addEntryToDom from "./entriesDOM.js"


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



journalSubmit.addEventListener("click", event => {
   const createNewEntry = createNewEntryFactory(journalDate.value, journalConcepts.value, journalEntry.value, journalMood.value)
   API.saveJournalEntry(createNewEntry)
      .then(() => {
         API.getJournalEntries()
         .then(renderEntries)
      })
   })



