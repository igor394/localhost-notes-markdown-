import List from "./List";
import {useState} from 'react';


export default function Main() {
    const key = 'keyNote';
    const setItemJson =(key, arr) => localStorage.setItem(key, JSON.stringify(arr));
    const [state, setState] = useState(JSON.parse(localStorage.getItem(key)) || [])

    const createItemNote = (event) => {
        event.preventDefault();
        let title = event.target.elements.title.value;
        let text = event.target.elements.text.value;
        let object = {
            "title": title,
            "text": text,
            "date": new Date().toLocaleString(),
            "dateEdd": ''
        };
        if(!localStorage.getItem(key)){
            console.log([object])
            setItemJson(key, [object]);
            setState( JSON.parse(localStorage.getItem(key)));
        } else {
            let accum = JSON.parse(localStorage.getItem(key));
            accum.push(object);
            setItemJson(key, accum);
            setState( JSON.parse(localStorage.getItem(key)));
        }
    }
    const  deleteItem = (event) =>{
        let index = event.target.index;
        let arr = JSON.parse(localStorage.getItem(key));
        arr.splice(index, 1);
        setItemJson(key, arr);
        setState(JSON.parse(localStorage.getItem(key)));

    }
    const  changeItem = (event) =>{
        // console.log(event.target.name);
        // let index = event.target.name;
        // let arr = JSON.parse(localStorage.getItem(key));
        // console.log(arr, index);

    }
    const deleteAllNotes=()=>{
        localStorage.removeItem(key);
        setState([])
    }
    console.log(state)
    return (
        <>
            <form action="" onSubmit={createItemNote}>
                <input type="text" name="title" placeholder="Enter note name"/>
                <input type="text" name="text" placeholder="Enter note text"/>
                <button type="submit">Enter</button>
            </form>
            <List array={state} changeItem={changeItem} deleteItem={deleteItem}/>
            <button onClick={deleteAllNotes}>Enter</button>
        </>
    )
}