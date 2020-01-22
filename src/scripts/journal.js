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

const addEntryToDom = () => {
    journalContainer.innerHTML += createJournalEntry;
}


