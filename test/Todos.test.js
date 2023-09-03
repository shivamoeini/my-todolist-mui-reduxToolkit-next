import { render, screen } from "@testing-library/react"; 
import Todos from "../components/Todos"; 
import { Provider } from "react-redux"; 
import configureStore from "redux-mock-store"; 
import { addTodos,removeTodos,updateTodos,completeTodos } from "../redux/reducer"; 
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
  // add
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



      // delete 
      it("should delete item on button click",()=>{
        const mockStore = configureStore([]); 
        const mockDeleteItem = jest.fn(); 
        const mockInitialState = { 
          todos: [], 
        }; 
        const mockStoreInstance = mockStore(mockInitialState); 

        render( 
          <Provider store={mockStoreInstance}> 
            <Todos onDeleteItem={mockDeleteItem} /> 
          </Provider> 
        ); 
        mockStoreInstance.dispatch(removeTodos("delete task")); 
        expect(mockStoreInstance.getActions()).toEqual([removeTodos("delete task")]); 
     
      })

      // update

      it("should update item on button click",()=>{
        const mockStore = configureStore([]); 
        const mockUpdateItem = jest.fn(); 
        const mockInitialState = { 
          todos: [], 
        }; 
        const mockStoreInstance = mockStore(mockInitialState); 

        render( 
          <Provider store={mockStoreInstance}> 
            <Todos ondUpdateItem={mockUpdateItem} /> 
          </Provider> 
        ); 
        mockStoreInstance.dispatch(updateTodos("Update task")); 
        expect(mockStoreInstance.getActions()).toEqual([updateTodos("Update task")]); 
     
      })

      // cpmpleted completeTodo
      it("should completeTodo item on button click",()=>{
        const mockStore = configureStore([]); 
        const mockCompletedItem = jest.fn(); 
        const mockInitialState = { 
          todos: [], 
        }; 
        const mockStoreInstance = mockStore(mockInitialState); 

        render( 
          <Provider store={mockStoreInstance}> 
            <Todos ondCompletedItem={mockCompletedItem} /> 
          </Provider> 
        ); 
        mockStoreInstance.dispatch(completeTodos("complete task")); 
        expect(mockStoreInstance.getActions()).toEqual([completeTodos("complete task")]); 
     
      })
})

