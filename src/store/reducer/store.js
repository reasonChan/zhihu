import * as TYPES from '../action-type'
import _clone from 'lodash/clone'
let initial = {
    list: null
}
export default function storeReducer(state = initial, action) {
    state = _clone(state)
    switch (action.type) {
        default:
    }
    return state
}
