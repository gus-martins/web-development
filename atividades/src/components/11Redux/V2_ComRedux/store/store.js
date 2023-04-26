import { configureStore } from '@reduxjs/toolkit'
import idReducer from '../slice/idSlice';

export default configureStore({
    reducer: {
        id: idReducer
    }
})