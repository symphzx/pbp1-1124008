import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AsyncDataState, Menu } from "../types";

export type MenuState = {
    menus: Menu[];
    menuState: AsyncDataState
}

const initialState: MenuState = {
    menus: [],
    menuState: "pending"
};

export const menuSlice = createSlice({ 
    name: "menu",
    initialState,
    reducers: {
        setMenus: (state, action: PayloadAction<Menu[]>) => {
            state.menus = action.payload;
            state.menuState = "fullfilled";
        },
        setMenuState: (state, action) => {
            state.menuState = action.payload;
        }
    }
})

export const menuActions = menuSlice.actions;
export const menuReducer = menuSlice.reducer;