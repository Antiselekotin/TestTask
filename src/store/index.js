import {combineReducers} from 'redux';

import usersListReducer from './users-list-reducer';
import getSizeReducer from './get-size-reducer';
import maxSizeReduser from './max-size-reducer';
import modalReducer from './modal-reducer';
import hiddenReducer from './hedden-reducer';
import positionReduser from './position-reduser'

export default combineReducers({
    usersList: usersListReducer,
    getSize: getSizeReducer,
    maxSize: maxSizeReduser,
    modal: modalReducer,
    hidden: hiddenReducer,
    position: positionReduser,
})