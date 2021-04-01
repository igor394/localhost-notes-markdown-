export default function CreateForm(props) {
    return (
        <>
            <div>
                <form onSubmit={props.addItemNote} className="row">
                    <button type="submit" className="btn btn-success btn-add-note">Add Note</button>
                    <div className="col-12">
                        <input type="text" name="title" className="form-control" id="exampleFormControlInput1"
                               placeholder="Enter the title"/>
                    </div>
                    <div className="col-12 mb-3">
                        <textarea className="form-control" name="text" id="exampleFormControlTextarea1" rows="15" placeholder="Enter note text"></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}