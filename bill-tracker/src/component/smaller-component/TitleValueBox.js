import React from 'react'

function TitleValueBox (props) {
    return(
        <div className="bbBox" style={{backgroundColor: props.color}}>
                <b>{props.upperText}</b>
                <br />
                {props.lowerText}
            </div>
    )
}

export default TitleValueBox