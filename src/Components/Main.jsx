import List from "./List";
import {useState} from 'react';
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import View from "./ViewModal";
import marked from 'marked';
import TurndownService from 'turndown';


export default function Main() {
    const key = 'keyNote';
    const setItemJson = (keys, arr) => localStorage.setItem(keys, JSON.stringify(arr));
    const getItemJson = keys => JSON.parse(localStorage.getItem(keys));
    const [state, setState] = useState(getItemJson(key) || []);
    const [check, setCheck] = useState(false);
    const [modal, setModal] = useState(false);
    const [textView, setTextView] = useState('');
    const turndownService = new TurndownService();
    const initialEditNote = {
        title: '',
        text: '',
        index: null
    };
    const [change, setChange] = useState(initialEditNote);

    const createItem = (title, text, date = new Date().toLocaleString(), edit = false, dateEd = null) => {
        return {
            "title": title,
            "text": text,
            "date": date,
            "edit": edit,
            "dateEd": dateEd
        }
    };

    const addItemNote = (event) => {
        event.preventDefault();
        let title = event.target.elements.title.value;
        let text = marked(event.target.elements.text.value);
        let object = createItem(title, text);
        if (!localStorage.getItem(key)) {
            setItemJson(key, [object]);
            setState(getItemJson(key));
        } else {
            let accum = getItemJson(key);
            accum.push(object);
            setItemJson(key, accum);
            setState(getItemJson(key));
        }
    };
    const deleteItemNote = (event) => {
        let index = event.target.value;
        let arr = getItemJson(key);
        arr.splice(index, 1);
        setItemJson(key, arr);
        setState(getItemJson(key));

    };
    const changeItemNote = (event) => {
        let index = event.target.value;
        setCheck(true)
        let str = getItemJson(key)[index]['text']
        let markdown = turndownService.turndown(str);
        setChange({
            title: getItemJson(key)[index]['title'],
            text: markdown,
            index: index
        })
    };
    const editItemNote = (event) => {
        event.preventDefault();
        let title = event.target.elements.title.value;
        let text = marked(event.target.elements.text.value);
        let index = change['index'];
        let arr = getItemJson(key);
        let oldDate = arr[index]['date'];
        let item = createItem(title, text, oldDate, true, new Date().toLocaleString());
        arr[index] = item;
        setItemJson(key, arr);
        setState(getItemJson(key));
        setCheck(false);
    };
    const deleteAllNotes = () => {
        localStorage.removeItem(key);
        setState([]);
    };
    const previewNote = (event) => {
        let index = event.target.value
        let noteText = getItemJson(key)[index]['text'];
        setModal(true);
        setTextView(noteText);
    }
    const closeModal = (event) => {
        setModal(false);
    }

    return (
        <>
            <div className="container d-flex">
                <div className="col-8">
                    {check ? <EditForm oject={change} editItemNote={editItemNote}/> :
                        <CreateForm addItemNote={addItemNote}/>}
                </div>
                <div className="col-4">
                    <div>
                        <button className="btn btn-success btn-del-note" onClick={deleteAllNotes}>Delete All Notes
                        </button>
                    </div>
                    <List array={state} changeItem={changeItemNote} deleteItem={deleteItemNote}
                          previewNote={previewNote}/>
                </div>
            </div>
            <View text={textView} check={modal} closeModal={closeModal}/>
        </>
    )
}