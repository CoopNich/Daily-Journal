const createJournalEntry = (entries) => {
    return `
        <div>
            <h2>${entries.title}</h2>
            <h3>${entries.date}</h3>
            <section>${entries.content}</section>
            <section>${entries.mood}</section>
        </div> `
}


const journalContainer = document.querySelector(".entryLog")

const addEntryToDom = (entryHTML) => {
    journalContainer.innerHTML += entryHTML;
}

fetch("http://localhost:3000/entries")
.then(entry => entry.json())
.then(parsedEntries => {
    parsedEntries.forEach(entries => {
      const  entryAsHTML = createJournalEntry(entries)
      addEntryToDom(entryAsHTML)
    })
})
