"use client"

import React from 'react'
import styles from '../styles/page.module.css'
import { getCategoryList, removeCategory } from '@/services/category'
import Header from '@/components/header'
import Categories from '@/components/categories'
import New from '@/components/new'
import Edit from '@/components/edit'

export default function Home() {

  const [categories, setCategories] = React.useState(undefined);
  const [edit, setEdit] = React.useState(undefined)

  React.useEffect(()=>{

    refresh()
  }, [])

  async function refresh(){

    const c = await getCategoryList()
    .then(response => {
        return response
    })
    .catch(error =>{
        throw error
    })

    setCategories(c)
  }

  async function remove(id){
    const c = await removeCategory(id)
    .then(response => {
        return response
    })
    .catch(error =>{
        throw error
    })

    setCategories(c)
  }

  return (
    <main className={styles.main}>
      <section>
        <h1>CRUD for Categories</h1>
      </section>
      <Header refresh={refresh}/>
      <section className={styles.panel}>
        <Categories setEdit={setEdit} categories={categories} remove={remove}/>
        {edit ? 
          <Edit edit={edit} setEdit={setEdit} categories={categories} setCategories={setCategories}/>
        :
          <New categories={categories} setCategories={setCategories}/>
        }
      </section>
    </main>
  )
}
