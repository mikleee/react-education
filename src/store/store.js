import {configureStore} from "@reduxjs/toolkit";
import {chatReducer} from "../chat/chat.reducer";


export const store = configureStore({
        reducer: {
            chat: chatReducer
        }
    }
)