import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class SetDetail extends React.Component {
  render() {
    const set = this.props.sets.find(s => s.uuid === this.props.params.setUuid)
    const exersize = this.props.exersizes.find(e => e.id === set.exersize)
    return (<div>
      <Link to="sets">Back</Link>
      <br/>
      {set.reps} {exersize.name} at {set.weight}{set.unit} on {set.completedAt.toString()}
    </div>)
  }
}

export default connect(state => ({
  sets: state.sets,
  exersizes: state.exersizes
}))(SetDetail)
