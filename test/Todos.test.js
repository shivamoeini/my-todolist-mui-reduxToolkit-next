import { render, screen } from "@testing-library/react"; 
import Todos from "../components/Todos"; 
import { Provider } from "react-redux"; 
import configureStore from "redux-mock-store"; 
import { addTodos } from "../redux/reducer"; 
import store from "../redux/store";
import "@testing-library/jest-dom";


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




describe("<Todos />", () => {
    it("should render the same text passed into the title prop", async () => { 
        const mockStore = configureStore([]); 
        const mockAddItem = jest.fn(); 
        const mockInitialState = { 
          todos: [], 
        }; 
        const mockStoreInstance = mockStore(mockInitialState); 
     
        render( 
          <Provider store={mockStoreInstance}> 
            <Todos onAddItem={mockAddItem} /> 
          </Provider> 
        ); 
     
        mockStoreInstance.dispatch(addTodos("new task")); 
        expect(mockStoreInstance.getActions()).toEqual([addTodos("new task")]); 
      }); 
})

