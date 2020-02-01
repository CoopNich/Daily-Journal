import createJournalEntry from "./entryComponent.js"

const addEntryToDom = (entryHTML) => { 
    console.log("addEntryToDom")
    const journalContainer = document.querySelector(".entryLog")
    journalContainer.innerHTML += entryHTML;
}

const renderEntries = (entriesArray) => {
    console.log("renderEntries")
    entriesArray.forEach(entries => {
        const entryAsHTML = createJournalEntry(entries)
        addEntryToDom(entryAsHTML)
    })
}

export default renderEntries