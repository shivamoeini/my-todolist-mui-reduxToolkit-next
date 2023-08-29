import { render, screen, fireEvent } from "@testing-library/react"
import Todos from "../components/Todos";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../redux/store"
import { addTodos, removeTodos, updateTodos, completeTodos } from "../redux/reducer"
describe("<Todos />", () => {
    // Display the add button
    it('Display the add button', () => {
        render(<Provider store={store}>
            <Todos />
        </Provider>)
        const addButton = screen.getByRole("button");
        expect(addButton).toBeInTheDocument();
    })
    // Display the add input
    it('Display the add button', () => {
        render(<Provider store={store}>
            <Todos />
        </Provider>)
        const inputText = screen.getByLabelText('Enter title');
        expect(inputText).toBeInTheDocument();
    })

});

// describe("<Todos />", () => {
//     it('When the Add button is clicked', () => {
//         render(
//             <Provider store={store}>
//                 <Todos />
//             </Provider>
//         )
//         const inputText = screen.getByLabelText('Enter title')
//         const buttonElement = screen.getByRole("button",{ name: /Add Todo/i })
//         fireEvent.change(inputText, { target: { value: 'Send a mail to Dad' } });
//         fireEvent.click(buttonElement);
//         const todoElement = screen.getByText(/'Send a mail to Dad'/i);
//         expect(todoElement).toBeInTheDocument();
//     })
// })
const MockTodo = configureStore([])
store = MockTodo({
    id: 1,
    item: "Get Milk",
    completed: false
})


describe("<Todos />", () => {
    it('should rnder same text passed into title prop', async () => {
        render(
            <Provider store={store}>
                <Todos onAddItem={addItem} />
            </Provider>
        )
        store.dispatch(addTodos("new task"));
        expect(store.getActions()).toEqual([addTodos("new task")])
    })



    // test('When the Add button is clicked', () => {
    //     const addItem = jest.fn()
    //                 render(
    //             <Provider store={store}>
    //                 <Todos onAddItem={addItem} />
    //             </Provider>
    //         )
    //     let newItem = 'Get Milk'
    //     fireEvent.submit({ target: { value: newItem } });
    // console.log(  fireEvent.submit({ target: { value: newItem } }));
    //     expect(addItem).toBeCalledWith({ newItemValue: newItem });
    //     expect(addItem).toHaveBeenCalledTimes(1);

    // })

    // test('Get text inside input element', () => {
    //     const { getByTestId } = render(
    //         <Provider store={store}>

    //             <Todos />
    //         </Provider>
    //     );

    //     // Simulate user typing into the input element
    //     const inputElement = getByTestId('newItemField');
    //     fireEvent.change(inputElement, { target: { value: 'Your text' } });

    //     // Retrieve the text inside the input element
    //     const inputValue = inputElement.value;

    //     // Assert the expected value
    //     expect(inputValue).toBe('Your text');
    // });
})
