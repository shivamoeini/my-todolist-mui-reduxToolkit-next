import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";

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
            alert("empty input")
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
        <Box display={"flex"} justifyContent={'center'}>
            <form>
                <TextField type="text"
                    onChange={(e) => handleChange(e)}
                    size="medium"
                    value={todo}
                    label="Enter title"
                    // error={!!errors.title}
                    // helperText={errors.title?.message}
                    // {...register("title", {
                    //   required: { message: "*Title is requierd", value: true }
                    // })}
                />
                <Button variant="contained"
                    onClick={() => add()}
          
                >ADD</Button>
            </form>
        </Box>

    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);