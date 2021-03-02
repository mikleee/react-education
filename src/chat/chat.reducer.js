import {createReducer, current} from "@reduxjs/toolkit";
import {chatState} from "./chat.state";
import {sendMessageAction} from "./chat.actions";


export const chatReducer = createReducer(chatState, {
        [sendMessageAction]: (state, action) => {
            return {...state, messages: [...current(state).messages, action.payload]};
        }
    }
);