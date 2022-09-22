import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isActive: false,
    modalValue: '',
    modalStyle: '',
    value: 'Enter your text',
    fontColor: '#020305',
    bgColor: '#A67C5F',
    bgIsActive: false,
    modalInputValue: '',
    icon: true,
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
        },
        setBgColor(state, action) {
            state.bgColor = action.payload;
        },
        setBgIsActive(state, action) {
            state.bgIsActive = action.payload;
        },
        setModalInputValue(state, action) {
            state.modalInputValue = action.payload;
        },
        setIcon(state, action) {
            state.icon = action.payload;
        },
        returnDefault(state) {
            state.isActive = false;
            state.modalInputValue = '';
            state.fontColor = '#020305';
            state.bgIsActive = false;
            state.icon = true;
        }
    }

});

const {
    reducer: toolsReducer, actions: {
        setIsActive, setModalValue, setModalStyle, setValue,
        setFontColor, setBgColor, setBgIsActive, setIcon,
        setModalInputValue, returnDefault
    }
} = toolsSlice;

export {
    toolsReducer, setIsActive, setModalValue, setModalStyle, setValue,
    setFontColor, setBgColor, setBgIsActive, setIcon,
    setModalInputValue, returnDefault
};