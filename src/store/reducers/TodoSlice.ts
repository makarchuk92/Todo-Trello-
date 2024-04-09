import { createSlice } from "@reduxjs/toolkit";
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

    }
})