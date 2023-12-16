import React from 'react'
export default function ListExample()
{
    const college=[{id:1, stuName:"sri sakthi", age:18},
                   {id:1, stuName:"soundharya", age:20},
                   {id:1, stuName:"sowdhanya", age:19}]

    const display=college.map((col)=><li key={col.id}> {col.stuName} {col.age}</li>)
    
    return (
        <div style={{backgroundColor:"violet"}}>
            <h1>List of Students</h1>
            {display}
        </div>
    )

}