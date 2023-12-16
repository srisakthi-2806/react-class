export default function List()
{
    const flowers=["rose","jasmine","lily","hibiscus","lotus"]
    const result=flowers.map((flow,index)=><li key={index}>{index}=> {flow}</li>)
    return(
        <div>
            <ul type="none">
                {result}
            </ul>
        </div>
    )
}