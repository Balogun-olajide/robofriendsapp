import { CHANGE_SEARCH_FIELD } from './constant.js'

export const setSearchField = (text) => ({
   type: CHANGE_SEARCH_FIELD,
   payload: text
})
