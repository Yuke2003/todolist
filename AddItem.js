import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './index.css'

const AddItem = ({newItem,setnewItem,handleSubmit}) => {
  return (
    <form className='addItem' onSubmit={handleSubmit}>
        <input type="text"
        id="addItem"
        required
        autoFocus
        placeholder='AddItem'
        value={newItem}
        onChange={(e)=>setnewItem(e.target.value)}
        />

        <button
        type='submit'
        onClick={handleSubmit}
        >
            <FaPlus /> 
        </button>
    </form>
  )
}

export default AddItem