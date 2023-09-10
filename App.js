import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState,useEffect } from 'react'
import './App.css';
import './index.css';
import SearchItem from './SearchItem';

function App() {

  const API_URL = "http://localhost:3500/items"
  const [search,setsearch] = useState('')
  const [newItem,setnewItem] = useState('')
  const [Items,setItems] = useState([])
  const [fetchError,setFetchError] = useState(null)
  const [isloading,Setisloading] = useState(true)


useEffect(() =>{
  const fetchItem = async () =>{
    try {
      const response = await fetch(API_URL);
      if(!response.ok) throw Error("data not received")
      const listItems = await response.json();
      setItems(listItems)
      setFetchError(null)
    }catch(err) {
      setFetchError(err.message)
    }finally{
      Setisloading(false)
    }
  }

  setTimeout(()=>{
    (async () => await fetchItem())()
  },2000)
},[])

const addItem = (item)=>{
  const id = Items.length ? Items[Items.length -1].id +1 : 1;
  const additem = {id, checked:false, item}
  const listItems = [...Items,additem]
  setItems(listItems)
  localStorage.setItem("todolist",JSON.stringify(listItems))

}

const handlecheck = (id)=>{
    const listItems = Items.map((item)=>
    item.id===id ?{...item, checked:!item.checked}:item)
    setItems(listItems)
    localStorage.setItem("todolist",JSON.stringify(listItems))
}


const deleteitem = (id)=>{
    const delItems = Items.filter((item)=>
    item.id!==id)
    setItems(delItems)
    localStorage.setItem("todolist",JSON.stringify(delItems))
}

const handleSubmit = (e)=>{
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem)
  addItem(newItem)
  setnewItem('')
}


  return(
    <section className='App' >
      <Header title="web developer yukesh" />
      <AddItem
      newItem = {newItem}
      setnewItem = {setnewItem}
      handleSubmit = {handleSubmit}
      />
      <SearchItem 
      search = {search}
      setsearch = {setsearch}
      />

      <section>
        {isloading && <p>{`loading Items....`}</p>}
        {fetchError && <p>{`error : ${fetchError}`}</p>}
      {!isloading && !fetchError &&
      <Content 
      Items = {Items.filter((item)=>(item.item).toLowerCase().includes(search.toLowerCase()))}
      setItem = {setItems}
      handlecheck = {handlecheck}
      deleteitem = {deleteitem}
      />}
      </section>
      
      <Footer 
      length = {Items.length}
      />
    </section>
  );
  }
export default App;