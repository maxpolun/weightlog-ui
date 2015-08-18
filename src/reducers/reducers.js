import {SET_FORM_SHOW, SET_FORM_HIDE, SET_FORM_EDIT} from '../constants/newSetForm'
import {SET_CREATED} from '../constants/sets'
import {addons} from 'react/addons'

const initialExersizes = [
  {id: 1, name: 'Squats'},
  {id: 2, name: 'Benchpress'},
  {id: 3, name: 'Deadlift'},
  {id: 4, name: 'Row'},
]

export function exersizes(state = initialExersizes, action) {
  return state
}

const initialSets = [
  {uuid: '4cd15b0a-4537-11e5-aabc-3c15c2ca3dc6', exersize: 1, weight: 75, unit: 'lb', reps: 5, completedAt: new Date()},
  {uuid: '4cd15b0a-4537-11e5-aabc-3c15c2ca3dc7', exersize: 2, weight: 65, unit: 'lb', reps: 5, completedAt: new Date()},
  {uuid: '4cd15b0a-4537-11e5-aabc-3c15c2ca3dc8', exersize: 3, weight: 85, unit: 'lb', reps: 1, completedAt: new Date()}
]

export function sets(state = initialSets, action) {
  switch(action.type) {
    case SET_CREATED: return state.concat([action.payload])
  }
  return state
}

const initialSetForm = {
  open: false,
  exersize: '',
  weight: '',
  unit: '',
  reps: '',
  // completedAt: ''
}

export function newSetForm(state = initialSetForm, action) {
  switch(action.type) {
    case SET_FORM_SHOW: {
     return addons.update(state, {
        open: {$set: true}
      })
    }
    case SET_FORM_HIDE: {
      return addons.update(state, {
        open: {$set: false}
      })
    }
    case SET_FORM_EDIT: {
      return addons.update(state, {
        [action.payload.form]: {$set: action.payload.text}
      })
    }
    case SET_CREATED: {
      //reset form when set created
      return initialSetForm
    }
  }
  return state
}
