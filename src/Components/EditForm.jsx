import {useState, useEffect} from 'react';

export default function EditForm(props) {
    const [note, setNote] = useState(props.oject);
    useEffect(() => {
        setNote(props.oject)
    }, [props]);
    const inputChange = event => {
        const {name, value} = event.target
        setNote({...note, [name]: value})
    };
    return (
        <>
            {/*<div>*/}
            {/*    <form action="" onSubmit={props.editItemNote}>*/}
            {/*        <input type="text" name="title"  />*/}
            {/*        <input type="text" name="text" />*/}
            {/*        /!*<button type="submit">Save Change</button>*!/*/}
            {/*    </form>*/}
            {/*</div>*/}
            <div>
                <form onSubmit={props.editItemNote} className="row ">
                    <button type="submit" className="btn btn-success btn-edit-note">Save Change</button>
                    <div className="col-12" >
                        <input type="text" name="title" onChange={inputChange} className="form-control" id="exampleFormControlInput1" value={note['title']}/>
                    </div>
                    <div className="col-12 mb-3">
                        <textarea className="form-control" name="text" onChange={inputChange} value={note['text']} id="exampleFormControlTextarea1" rows="15"  placeholder="Enter note text"></textarea>
                    </div>

                </form>
            </div>
        </>
    )
}