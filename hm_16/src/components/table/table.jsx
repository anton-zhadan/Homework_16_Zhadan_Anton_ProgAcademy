import React from "react";

function Table(props) {
    return (
        <table>
            <tbody>
                {props.data.map((element) => {
                    return <tr>
                        <td>{element.txt}</td> 
                        <td>{element.rate}</td> 
                        <td>{element.cc}</td> 
                        <td>{element.exchangedate}</td> 
                    </tr>      
                })}
            </tbody>
        </table>
    );
}

export default Table;