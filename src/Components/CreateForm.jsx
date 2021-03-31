
export default function CreateForm(props) {
    return (
        <>
            <form action="" onSubmit={props.createItemNote}>
                <input type="text" name="title" placeholder="Enter note name"/>
                <input type="text" name="text" placeholder="Enter note text"/>
                <button type="submit">Enter</button>
            </form>
        </>
    )
}