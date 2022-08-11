import React from 'react';
import ReactDom from 'react-dom';
import data from './components/data_table/data';
import Table from './components/table/table';


const App = () => {
    return(
        <>
            <h1>Курс валют</h1>
            <Table data = {data}></Table>
        </>
    );
}

ReactDom.render(<App></App>, document.querySelector('#root'));