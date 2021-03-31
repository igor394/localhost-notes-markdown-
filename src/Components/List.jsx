export default function List(props) {
    return (
        <>
            {props.array.map((item, index) =>
                <ul key={index + item['date']}>
                    <li>title: {item['title']}</li>
                    <li>text: {item['text']}</li>
                    <li>date: {item['date']}</li>
                    <li>dateEdd: {item['edit'] ? item['dateEd'] : 'not change'}</li>
                    <li>
                        <button onClick={props.changeItem} value={index}> Edit</button>
                    </li>
                    <li>
                        <button onClick={props.deleteItem} value={index}> Delete</button>
                    </li>
                </ul>)
            }
        </>
    )
}