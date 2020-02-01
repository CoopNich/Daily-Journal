const createJournalEntry = (entries) => {
    console.log("createJournalEntries")
    return `
        <div class="entry">
            <h2>${entries.title}</h2>
            <h3>${entries.date}</h3>
            <section>${entries.content}</section>
            <section>${entries.mood}</section>
        </div> `
}

export default createJournalEntry