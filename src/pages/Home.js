import React, { useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Loader } from '../components/Loader'
import { Notes } from '../components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
   const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
   useEffect(()=>{
       fetchNotes()
   }, [])
    return (
        <div className='container mt-4 '>
            <Form/>
            <hr/>
            {loading ? <Loader/> : notes ? <Notes notes={notes} onRemove={removeNote}/> : null}
            
        </div>
    )
}