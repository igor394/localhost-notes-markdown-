
export default function List(props) {

    return (
        <>
                {props.array.map((item, index) =>
                    <ul key={index + item['date']}>
                        <li>title: {item['title']}</li>
                        <li>text: {item['text']}</li>
                        <li>date: {item['date']}</li>
                        <li>dateEdd: {item['edd']? item['dateEdd'] : 'not change'}</li>
                        <li>
                            <button onClick={props.changeItem}  index={index}> Change </button>
                        </li>
                        <li>
                            <button onClick={props.deleteItem} index={index}> Delete</button>
                        </li>
                    </ul>)}
        </>
    )
}