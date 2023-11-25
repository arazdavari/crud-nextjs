import React from "react"
import styles from '../styles/page.module.css'
import { editCategory } from "@/services/category";

export default function Edit(parms){

    const [name, setName] = React.useState(parms.edit.title); 
    const [parent, setParent] = React.useState(0);

    React.useEffect(()=>{
        setName(parms.edit.title)
        if(parms.edit.parent){
            setParent(parms.edit.parent.id)
        } else {
            setParent(0)
        }
    }, [parms.edit])

    function handleNameChange(e){
        setName(e.target.value)
    }
    
    function handleParentChange(e){
        setParent(e.target.value)
    }

    function cancel(){
        parms.setEdit(undefined)
    }

    async function edit(){
        if(name === "") return null

        const c = await editCategory( parms.edit.id, name, parent )
        .then(response => {
            return response
        })
        .catch(error =>{
            throw error
        })

        parms.setCategories(c)
        parms.setEdit(undefined)
        setName("")
    }

    return(<div className={styles.new}>
        <h2>Edit Category {parms.edit.id}</h2>
        <label>
            <p>Category Name:</p>
            <input placeholder="Category Name (Required)" value={name} onChange={handleNameChange}/>
        </label>
        <label>
            <p>Category Parent:</p>
            <select value={parent} onChange={handleParentChange}>
                <option value={0}>None</option>
                {parms.categories && parms.categories.map(category => {
                    return(<option value={category.id} key={category.id}>{category.title}</option>)
                })}
            </select>
        </label>
        <dvi className={styles.buttons}>
            <button onClick={edit}>Edit Category</button>
            <button className={styles.accent} onClick={cancel}>Cancel Editing</button>
        </dvi>
    </div>)
}