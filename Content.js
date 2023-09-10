import React from 'react'

import { FaTrashAlt } from "react-icons/fa";
import './index.css'

const Content = ({Items,setItems,handlecheck,deleteitem}) => {
    // const nameChange = ()=>{
    //     const names = ["earn","grow","give"]
    //     const int = Math.floor(Math.random()*3);
    //     return names[int]
    // }

//     function namee(){
//         console.log("i am an web developer")
//     }
//     const [count,setcount] = useState(0)
//     const [name,setname] = useState("Earn")

//     const increment = ()=>{
//         setcount(count + 1)
//    }
//    const decrement = ()=>{
//     if(count>0){
//         setcount(count-1)
//     }
//    }

//    const changename = ()=>{
//     const names = ["earn","grow","give"]
//     const int = Math.floor(Math.random()*3);
//     setname(names[int])

//    }
   

  return (
    <main>

        {/* <p>Let's {name} money</p>
        <button onClick={changename}>subscribe</button>
        
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button> */}

        {(Items.length) ? (
            <ul>
            {Items.map((item)=>(
                <li className='item' key={item.id}>
                    <input type="checkbox"
                    onChange={()=>handlecheck(item.id)}
                    checked = {item.checked} />

                    <label onDoubleClick={()=>handlecheck(item.id)}
                    style={(item.checked) ?{textDecoration:'line-through'}:null}
                    >{item.item}</label>
                     <FaTrashAlt 
                     onClick={()=>deleteitem(item.id)}
                     className='button'/>
                </li>
            ))}
        </ul>
        ) : (
            <h1>List Item is empty</h1>
        )}
        
    </main>
  )
}

export default Content