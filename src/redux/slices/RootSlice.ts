import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const RootSlice= createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        template_issue_number: 'Template Issue Number',
        template_volume_number: 'Template Volume Number',
        template_date: 'Template Date',
        template_hoa: 'Template HOA'
    },
    reducers: {
        chooseTname: (state, action) => { state.name= action.payload },
        chooseTissueno: (state, action) => { state.template_issue_number= action.payload },
        chooseTvolumeno: (state, action) => { state.template_volume_number= action.payload },
        choooseTdate: (state, action) => {state.template_date= action.payload},
        chooseThoa: (state, action) => {state.template_hoa= action.payload}
    }
})

export const reducer = RootSlice.reducer;
export const { chooseTname, chooseTissueno, chooseTvolumeno, choooseTdate, chooseThoa } = RootSlice.actions;


