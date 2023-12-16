export default function List()
{
    const animals=["cat","dog","lion","tiger"]
    const result=animals.map((ani)=><li>{ani}</li>)
    return(
        <div>
            <ul>
                {result}
            </ul>
        </div>
    )

}