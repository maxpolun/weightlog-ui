import {SET_FORM_SHOW, SET_FORM_HIDE, SET_FORM_EDIT} from '../constants/newSetForm'
export function show() {
  return {type: SET_FORM_SHOW}
}

export function hide() {
  return {type: SET_FORM_HIDE}
}

export function edit(form, text) {
  return {
    type: SET_FORM_EDIT,
    payload: {
      form, text
    }
  }
}
