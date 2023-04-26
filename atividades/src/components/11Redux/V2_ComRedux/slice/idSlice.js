import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 13
}

export const idSlice = createSlice(
    {
        name: 'id',
        //suprimindo a atribuição da variavel de mesmo nome: initialState:initialState
        initialState,
        //redutores: permitem alterar o estado global da aplicação
        reducers: {
            incrementar: (state) => { state.value += 1 },
            decrementar: (state) => { state.value -= 1 },
            incrementarValor: (state, action) => { state.value += action.payload },
            decrementarValor: (state, action) => { state.value -= action.payload }
        }
    }
)

//transformando fatias (slices) em ações
export const { incrementar, decrementar, incrementarValor, decrementarValor } = idSlice.actions

export default idSlice.reducer;