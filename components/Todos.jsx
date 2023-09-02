import { useDispatch } from 'react-redux';
import { addTodos } from '../redux/reducer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

const Todos = () => {
  const dispatch = useDispatch();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      title: ''
    }
  });

  const onSubmit = (formResult) => {
    dispatch(
      addTodos({
        id: Math.floor(Math.random() * 1000),
        item: formResult.title,
        completed: false
      })
    );
    reset();
  };

  return (
    <Box display={'flex'} justifyContent={'center'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type='text'
          size='medium'
          label='Enter title'
          placeholder='Enter todo'
          error={!!errors.title}
          data-testid="newItemField"
          helperText={errors.title?.message}
          {...register('title', {
            required: { message: '*Title is required', value: true }
          })}
        />
        <Button variant='contained' data-testid="addBtn" type='submit'>
          Add
        </Button>
      </form>
    </Box>
  );
};
export default Todos;