import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodos } from "../../models/ITodos";

interface todoState {
    todos: ITodos[]
    isLoading: boolean
    error: string
}

const initialState: todoState = {
    todos: [],
    isLoading: false,
    error: ''
}

export const TodoSlice = createSlice({
    name: 'todo', 
    initialState,
    reducers: {
        todoFetching: (state) => {
            state.isLoading = true;
        },
        todoFetchingSuccess: (state, action: PayloadAction<ITodos[]>) => {
            state.isLoading = false;
            state.todos = action.payload;
        },
        todosFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})