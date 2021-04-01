import React from 'react';

export default function View(props) {
    return (
        <>
            <div onClick={props.closeModal} className={props.check ? "modal-view active" : "modal-view"}>
                <div className="view-content" onClick={(event) => event.stopPropagation()}>
                    <div><img alt="img" src="icon/icon.png" onClick={props.closeModal}/></div>
                    <div dangerouslySetInnerHTML={{__html: props.text}}></div>
                </div>
            </div>
        </>
    )
}