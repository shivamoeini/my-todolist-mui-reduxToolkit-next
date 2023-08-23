import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";


import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === "") {
            alert("Input is Empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };




    return (
        <form action="">
            <Box display={"flex"} justifyContent={'center'}>
                <TextField type="text"
                    onChange={(e) => handleChange(e)}
                    size="medium"
                    value={todo} />
                <Button variant="contained"
                    onClick={() => add()}>ADD</Button>
            </Box>
        </form>



    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);