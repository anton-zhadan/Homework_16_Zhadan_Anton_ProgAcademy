import React from "react";

function Table(props) {
    return (
        <table>
            <tbody>
                {props.data.map((element) => {
                    return <tr><p>{element.txt}</p> <p>{element.rate}</p> <p>{element.cc}</p> <p>{element.exchangedate}</p></tr>      
                })}
            </tbody>
        </table>
    );
}

export default Table;