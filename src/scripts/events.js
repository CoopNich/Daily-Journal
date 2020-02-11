import API from "./data.js"
import renderEntries from "./entriesDOM.js"
import updateFormFields from "./updateFormFields.js"

const journalSubmit = document.querySelector("#submit_button")
const journalMood = document.querySelector("#mood")
const journalEntry = document.querySelector("#journalEntry")
const journalDate = document.querySelector("#journalDate")
const journalConcepts = document.querySelector("#concepts")
const journalContainer = document.querySelector(".entryLog")

const createNewEntryFactory = (date, title, content, mood) => {
    return {
        "date": date,
        "title": title,
        "content": content,
        "mood": mood
    }
}

const events = {
    editOrCreateEntry() {
        (journalSubmit.addEventListener("click", event => {
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
        )
    },
    filterEntriesByMood() {
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
    },
    filterEntriesBySearch() {
        const keywordSearch = document.getElementById("entrySearch")
        keywordSearch.addEventListener('keyup', event => {
            if (event.keyCode === 13) {
                const filteredSearch = event.target.value
                API.getJournalEntries()
                    .then(entries => {
                        const filteredArray = entries.filter(entry => {
                            for (const entryInfo of Object.values(entry)) {
                                const infoType = typeof entryInfo
                                if (infoType === "string" && entryInfo.includes(filteredSearch)) {
                                    return entry
                                }
                            }
                        })

                        renderEntries(filteredArray)
                    })
            }
        })
    },
    deleteEntry() {
        journalContainer.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEntry--")) {
                const entryToDelete = event.target.id.split("--")[1]
                API.deleteEntry(entryToDelete)
                    .then(API.getJournalEntries)
                    .then(renderEntries)
            }
        })
    },
    editEntry() {
        journalContainer.addEventListener("click", event => {
            if (event.target.id.startsWith("editEntry--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
                updateFormFields(entryIdToEdit)
            }
        })
    },
}

export default events