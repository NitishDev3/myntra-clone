import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    beautyProducts : null
}


const configSlice = createSlice({
    name : "config",
    initialState,
    reducers : {
        changeShowUnderSectionComp : (state, actions) =>{
            state.showUnderSectionComp = actions.payload;
        }
    }
})


export const {changeShowUnderSectionComp} = configSlice.actions;
export default configSlice.reducer;