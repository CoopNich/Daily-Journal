import API from "./data.js"
import renderEntries from "./entriesDOM.js"


API.getJournalEntries()
.then(parsedEntries => {
   renderEntries(parsedEntries)
})

const journalSubmit = document.querySelector("#submit_button")

journalSubmit.addEventListener ("click", event => {


}
)

