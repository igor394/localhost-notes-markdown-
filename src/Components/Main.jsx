import List from "./List";
import {useState} from 'react';
import CreateForm from "./CreateForm";
import EdditForm from "./EdditForm";


export default function Main() {
    const key = 'keyNote';
    const setItemJson = (keys, arr) => localStorage.setItem(keys, JSON.stringify(arr));
    const getItemJson = keys => JSON.parse(localStorage.getItem(keys));
    const [state, setState] = useState(JSON.parse(localStorage.getItem(key)) || [])

    const createItemNote = (event) => {
        event.preventDefault();
        let title = event.target.elements.title.value;
        let text = event.target.elements.text.value;
        let object = {
            "title": title,
            "text": text,
            "date": new Date().toLocaleString(),
            "edd": false,
            "dateEdd": ''
        };
        if(!localStorage.getItem(key)){
            console.log([object])
            setItemJson(key, [object]);
            setState( getItemJson(key));
        } else {
            let accum = getItemJson(key);
            accum.push(object);
            setItemJson(key, accum);
            setState( getItemJson(key));
        }
    }
    const  deleteItemNote = (event) =>{
        let index = event.target.index;
        let arr = getItemJson(key);
        arr.splice(index, 1);
        setItemJson(key, arr);
        setState(getItemJson(key));

    }
    const  changeItemNote = (event) =>{
        event.preventDefault();
        console.log(event);

    }
    const deleteAllNotes=()=>{
        localStorage.removeItem(key);
        setState([])
    }
    console.log(state)
    return (
        <>
             {/*if edd? EdditForm : CreateForm*/}
           <CreateForm createItemNote={createItemNote}/>
           <EdditForm changeItemNote={changeItemNote}/>
            <List array={state} changeItem={changeItemNote} deleteItem={deleteItemNote}/>
            <button onClick={deleteAllNotes}>Delete All Notes</button>
        </>
    )
}