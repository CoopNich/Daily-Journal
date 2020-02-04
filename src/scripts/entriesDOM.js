import createJournalEntry from "./entryComponent.js"

const journalContainer = document.querySelector(".entryLog")

const addEntryToDom = (entryHTML) => { 
    console.log("addEntryToDom")
    journalContainer.innerHTML += entryHTML;
}

const renderEntries = (entriesArray) => {
    console.log("renderEntries")
    journalContainer.innerHTML = "";
    entriesArray.forEach(entries => {
        const entryAsHTML = createJournalEntry(entries)
        addEntryToDom(entryAsHTML)
    })
}

export default renderEntries