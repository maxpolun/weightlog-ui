import React from 'react'
import {connect} from 'react-redux'

class ExersizeSelect extends React.Component {
  render() {
    return <select value={this.props.current} onChange={this.props.onChange}>
      <option value=""></option>
      {this.props.exersizes.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
    </select>
  }
}

export default connect(state => ({exersizes: state.exersizes}))(ExersizeSelect)
