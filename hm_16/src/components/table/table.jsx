import React from "react";

function Table(props) {
    return (
        <table>
            <tbody>
                {props.data.map((element) => {
                    return <p>{element.txt} <span>{element.rate}</span> <span>{element.cc}</span> <span>{element.exchangedate}</span></p>      
                })}
            </tbody>
        </table>
    );
}

export default Table;