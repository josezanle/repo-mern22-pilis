import {combineReducers} from 'redux';
import { uiReducer } from './uiReducer';
import { calendarReducer } from './CalendarReducer';


export const rootReducer = combineReducers({
    ui:uiReducer,
    // TODO:AuthReducer
        calendar: calendarReducer

})