import * as TYPES from '../action-type'
import _clone from 'lodash/clone'
let initial = {
    info: null
}
export default function baseReducer(state = initial, action) {
    state = _clone(state)
    switch (action.type) {
        default:
    }
    return state
}
