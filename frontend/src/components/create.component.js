import React, { useState } from 'react'

function Create() {

  // const [listCategory, setListCategory] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [dateAdded, setDateAdded] = useState('')
  // const [dueDate, setDueDate] = useState()
  // const [tags, setTags] = useState([])
  const [completed, setCompleted] = useState(false)

  // const cateogories = {
  //   in: "In",
  //   nextAction: "Next Action",
  //   project: "Project",
  //   somedayMaybe: "Someday Maybe",
  //   waiting: "Waiting"
  // }

  function onSubmit(e) {
    e.preventDefault();
  }


  return (
    <div>
      <h1>Create Item</h1>
      <form onSubmit={onSubmit}>
        {/* TODO: Categories */}
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description"
          onChange={e => setDescription(e.target.value)}
        />
        {/* TODO: tags */}
        {/* <label htmlFor="tags">Tags</label>
        <input type="text" name="tags" id="tags" /> */}
        <input type="checkbox" name="completed" onChange={e => setCompleted(e.target.checked)}/>
        <label htmlFor="completed">Complete</label>
        <input type="submit" value="Create Item"/>
      </form>
    </div>
  )
}

export { Create }