const updateFormFields = entryId => {

    const hiddenEntryId = document.querySelector("#entryId")
    const entryTitleInput = document.querySelector("#concepts")
    const entryDateInput = document.querySelector("#journalDate")
    const entryContentInput = document.querySelector("#journalEntry")
    const entryMoodInput = document.querySelector("#mood")
 
    fetch(`http://localhost:3000/entries/${entryId}`)
       .then(response => response.json())
       .then(entry => {
 
          hiddenEntryId.value = entry.id
          entryTitleInput.value = entry.title
          entryDateInput.value = entry.date
          entryContentInput.value = entry.content
          entryMoodInput.value = entry.mood
       })
 }

 export default updateFormFields