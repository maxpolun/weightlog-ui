import React from 'react'
import ExersizeSelect from './ExersizeSelect'
import {edit} from '../actionCreators/newSetForm'

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

export default class AddSetForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onCreateSet(this.props.newSetForm)
  }

  render() {
    let dispatchInput = (name) => (event) => {
      this.props.dispatch(edit(name, event.target.value))
    },
      form = this.props.newSetForm
    return (<form onSubmit={this.handleSubmit}>
        <label>Exersize
          <ExersizeSelect current={form.exersize} onChange={dispatchInput('exersize')}/>
        </label>
        <label> Reps <input value={form.reps} onChange={dispatchInput('reps')}/></label>
        <label> Weight <input value={form.weight} onChange={dispatchInput('weight')}/></label>
        <select value={form.unit} onChange={dispatchInput('unit')}>
          <option value="lb">Lb</option>
          <option value="kg">KG</option>
        </select>
        <button>Add Set</button>
      </form>)
  }
}
