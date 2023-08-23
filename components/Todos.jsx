import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { useForm } from 'react-hook-form';


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




const Todos = ({props}) => {
    const [todo, setTodo] = useState("");
    const [value, setValue] = useState('');

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



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };






    return (

        <Box 
        display={"flex"}
         justifyContent={'center'}
         >
            <form  
            onSubmit={handleSubmit(onSubmit)}
            >

                <TextField type="text"
                    onChange={(e) => handleChange(e)}
                    size="medium"
                    value={todo}
                    {...register("text")} />
                console.log( {...register("text")} );
                <Button variant="contained"
                    type="submit" onClick={() => add()}>ADD</Button>

            </form>
        </Box>



    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);