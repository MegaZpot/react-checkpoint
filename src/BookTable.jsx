import { useEffect } from "react";
import { useState } from "react"

export default function BookTable({books}){
    console.log(books)    

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>author</th>
                        <th>year</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.author}</td>
                            <td>{e.year}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            

        </div>

    )
}