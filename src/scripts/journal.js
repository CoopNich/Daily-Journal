
let journalEntries = [
    {
        date: "1/15/2020",
        title: "Group Presentation",
        content: "Blah blah blah",
        mood: "Spicy",
    },
    {
        date: "1/16/2020",
        title: "DOM Stuff",
        content: "Blah blah bleh",
        mood: "Calm",
    },
    {
        date: "1/17/2020",
        title: "Scary object stuff",
        content: "Blaaaaaaaaah",
        mood: "Tired",
    },
]




const createJournalEntry = (date, title, content, mood) => {
    return `
        <div>
            <h2>${title}</h2>
            <h3>${date}</h3>
            <section>${content}</section>
        </div> `
}


const journalContainer = document.querySelector(".entryLog")


const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        journalContainer.innerHTML += createJournalEntry(
            entry.title,
            entry.date,
            entry.content
        )
    }
    return
}

renderJournalEntries(journalEntries);
