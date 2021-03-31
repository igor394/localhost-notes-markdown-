export default function List(props) {
    return (
        <>
                {props.array.length === 0? <h4>You note list is empty, please add a note!</h4> : props.array.map((item, index) =>
                    <div key={index + item['date']} style={{margin: '10px'}} className="item-note d-flex flex-column justify-content-around">
                        <div className="d-flex justify-content-between">
                                <div className="col-8"><h5 className="text-center">{item['title'].length < 15? item['title'] : item['title'].slice(0,12)+'...'}</h5></div>
                            <div className="d-inline-flex">
                                <div>
                                    <button className="btn btn-info btn-item" onClick={props.changeItem} value={index}> Edit</button>
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-item" onClick={props.deleteItem} value={index}> Del</button>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>{item['edit'] ? 'edit: ' + item['dateEd'] : null}</div>
                            <div>create: {item['date']}</div>
                        </div>
                    </div>)
                }
        </>
    )
}