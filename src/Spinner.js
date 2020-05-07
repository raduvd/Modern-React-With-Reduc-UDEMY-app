import React from 'react';

function Spinner(props) {
    return (
        <div class="ui active dimmer">
            <div class="ui loader massive">{props.message}</div>
        </div>
    )
}

Spinner.defaultProps = {
    message: "Ups Am uitat sa trec, asa ca uite defaultul!"
}

export default Spinner;




