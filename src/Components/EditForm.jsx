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
            <form action="" onSubmit={props.editItemNote}>
                <input type="text" name="title" onChange={inputChange} value={note['title']}/>
                <input type="text" name="text" onChange={inputChange} value={note['text']}/>
                <button type="submit">Save Change</button>
            </form>
        </>
    )
}