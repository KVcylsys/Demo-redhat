import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Hello = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const handleInput1Change = (e) => {
        setInput1(e.target.value);
    };

    const handleInput2Change = (e) => {
        setInput2(e.target.value);
    };

    const handleInput3Change = (e) => {
        setInput3(e.target.value);
    };

    const handleInput4Change = (e) => {
        setInput4(e.target.value);
    };

    const handleButton1Click = () => {
        // Action for button 1 click
    };

    const handleButton2Click = () => {
        // Action for button 2 click
    };

    useEffect(() => {
        // fetchData(); // Assuming fetchData function is defined
    }, []);

    return (
        <div className="container">
            <div className="card p-3">
                <div className="col-md-6 col-sm-12">
                    <input
                        type="text"
                        className="form-control mb-2 bg-info text-white"
                        placeholder="Input 1"
                        value={input1}
                        onChange={handleInput1Change}
                    />
                    <input
                        type="text"
                        className="form-control mb-2 bg-success text-white"
                        placeholder="Input 2"
                        value={input2}
                        onChange={handleInput2Change}
                    />
                    <input
                        type="text"
                        className="form-control mb-2 bg-warning"
                        placeholder="Input 3"
                        value={input3}
                        onChange={handleInput3Change}
                    />
                    <input
                        type="text"
                        className="form-control mb-2 bg-danger text-white"
                        placeholder="Input 4"
                        value={input4}
                        onChange={handleInput4Change}
                    />
                    <button className="btn btn-primary mr-2" onClick={handleButton1Click}>
                        Button 1
                    </button>
                    <button className="btn btn-secondary" onClick={handleButton2Click}>
                        Button 2
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hello;
