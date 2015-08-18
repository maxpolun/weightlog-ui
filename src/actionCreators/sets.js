import {SET_CREATED} from '../constants/sets'
import {v4} from 'node-uuid'

export function createSet(set) {
  const newSet = {
    uuid: v4(),
    exersize: parseInt(set.exersize),
    reps: parseInt(set.reps),
    weight: parseInt(set.weight),
    unit: set.unit,
    completedAt: new Date()
  }
  return {
    type: SET_CREATED,
    payload: newSet
  }
}
