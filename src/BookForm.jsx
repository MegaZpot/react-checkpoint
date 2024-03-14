import { useState } from "react"

export default function BookForm({postBook}){
    const [title,setTitle]=useState('');

    


    const handleSubmit= async (event) =>{
        event.preventDefault();
        await postBook({title});        

    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>{setTitle(e.target.value)}} type="text" name="title" />
            <button type="submit">Submit book</button>

        </form>
    )
}