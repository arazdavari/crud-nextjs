import React from "react"
import styles from '../styles/page.module.css'

export default function Categories(parms){

    return(<ul className={styles.categories}>
      {(parms.categories && parms.categories.length > 0) ? parms.categories.map((category)=>{

        return(<li>
            <h2 className={styles.title}><span>#{category.id}</span>{category.title}</h2>
            {category.parent && <p><strong>Parent: </strong> {category.parent.title}</p>}
            {(category.childs && category.childs.length > 0) && (<ul className={styles.child}><span>Childs: </span> {category.childs.map(child => {
                return(<li>
                    #{child.id} - {child.title}
                </li>)
            })}</ul>)}
            <div className={styles.buttons}>
                <button onClick={()=>parms.remove(category.id)} className={styles.btn}><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg></button>
                <button onClick={()=>parms.setEdit(category)} className={styles.btn}><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14ZM13.879,6.379l-6.707,6.707c-.755.755-1.172,1.76-1.172,2.828v1.586c0,.553.448,1,1,1h1.586c1.068,0,2.073-.416,2.828-1.172l6.707-6.707c1.17-1.17,1.17-3.072,0-4.242-1.134-1.133-3.11-1.133-4.243,0Zm-3.879,9.535c-.373.372-.888.586-1.414.586h-.586v-.586c0-.534.208-1.036.586-1.414l4.25-4.25,1.414,1.414-4.25,4.25Zm6.707-6.707l-1.043,1.043-1.414-1.414,1.043-1.043c.377-.379,1.036-.379,1.414,0,.39.39.39,1.024,0,1.414Z"/></svg></button>
            </div>
        </li>)
      }) : "No Categories Added."}
    </ul>)
  }