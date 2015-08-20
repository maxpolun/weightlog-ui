import React from 'react'
import AddSetForm from './AddSetForm'
import {connect} from 'react-redux'
import {show, edit} from '../actionCreators/newSetForm'
import {createSet} from '../actionCreators/sets'


class AddSetArea  extends React.Component {
  constructor() {
    super()
  }

  renderButton() {
    return <button type="button" className="btn" onClick={() => this.props.dispatch(show())}>ADD SET</button>
  }

  renderForm() {
    return <AddSetForm onCreateSet={set => this.props.dispatch(createSet(set))} dispatch={this.props.dispatch} newSetForm={this.props.newSetForm}/>
  }

  render() {
    return this.props.newSetForm.open ? this.renderForm() : this.renderButton()
  }
}

export default connect(state => ({newSetForm: state.newSetForm}))(AddSetArea)
