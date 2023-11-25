import React from "react"
import styles from '../styles/page.module.css'
import { addCategory } from "@/services/category";

export default function New(parms){

    const [name, setName] = React.useState(""); 
    const [parent, setParent] = React.useState(undefined); 

    function handleNameChange(e){
        setName(e.target.value)
    }
    
    function handleParentChange(e){
        setParent(e.target.value)
    }

    async function add(){
        if(name === "") return null

        const c = await addCategory( name, parent )
        .then(response => {
            return response
        })
        .catch(error =>{
            throw error
        })

        parms.setCategories(c)
        setName("")
    }

    return(<div className={styles.new}>
        <h2>Add New Category</h2>
        <label>
            <p>Category Name:</p>
            <input placeholder="Category Name (Required)" value={name} onChange={handleNameChange}/>
        </label>
        <label>
            <p>Category Parent:</p>
            <select value={parent} onChange={handleParentChange}>
                <option value={undefined}>None</option>
                {parms.categories && parms.categories.map(category => {
                    return(<option value={category.id}>{category.title}</option>)
                })}
            </select>
        </label>
        <button onClick={add}>Add Category</button>
    </div>)
}