import React from 'react'
import {connect} from 'react-redux'
import {addons} from 'react/addons'

import SetItem from './SetItem'
import AddSetArea from './AddSetArea'

class SetList extends React.Component {
  render() {
    return (<div className="set-area"><ul className="set-list">
        {this.props.sets.map(s => <SetItem key={s.uuid} {...s} />)}
      </ul>
      <AddSetArea/>
      </div>)
  }
}
function setsWithExersizes(state) {
  return state.sets.map(set => {
    return addons.update(set, {
      exersize: {$set: state.exersizes.find(e => e.id === set.exersize)}
    })
  })
}
export default connect(state => {return {sets: setsWithExersizes(state)}})(SetList)
