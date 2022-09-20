import {createSlice} from "@reduxjs/toolkit";

import {cards} from "../../services/cards-service";


const initialState = {
    cards: cards,
    isActive: false,
    modalValue: '',
    modalStyle: '',
    value: 'Enter your text',
    fontColor: '#020305'
};

const toolsSlice = createSlice({
    name: 'toolsSlice',
    initialState,
    reducers: {
        setIsActive(state, action) {
            state.isActive = action.payload;
        },
        setModalValue(state, action) {
            state.modalValue = action.payload;
        },

        setModalStyle(state, action) {
            state.modalStyle = action.payload;
        },
        setValue(state, action) {
            state.value = action.payload;
        },
        setFontColor(state, action) {
            state.fontColor = action.payload;
        }
    }

});

const {
    reducer: toolsReducer, actions: {
        setIsActive, setModalValue, setModalStyle, setValue,
        setFontColor
    }
} = toolsSlice;

export {
    toolsReducer, setIsActive, setModalValue, setModalStyle, setValue,
    setFontColor
};