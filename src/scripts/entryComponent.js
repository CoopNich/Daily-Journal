const createJournalEntry = (entries) => {
    console.log("createJournalEntries")
    return `
        <div class="entry entry--${entries.id}">
            <h2>${entries.title}</h2>
            <h3>${entries.date}</h3>
            <section>${entries.content}</section>
            <section>${entries.mood}</section>
            <button id="deleteEntry--${entries.id}">Delete</button>
        </div> `
}

export default createJournalEntry