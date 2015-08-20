import React from 'react'
import {Link} from 'react-router'

export default class SetItem extends React.Component {
  render() {
    let props = this.props
    return <li className="set-item">
      <Link to="set" params={{setUuid: props.uuid}}>EXERSIZE: {props.exersize.name}, WEIGHT: {props.weight}{props.unit}, REPS: {props.reps}</Link>
    </li>
  }
}
