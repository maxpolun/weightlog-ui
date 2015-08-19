import "babel-core/polyfill"
import React from 'react'
import SetList from './components/SetList'
import Root from './components/Root'
import SetDetail from './components/SetDetail'
import {Route, run, DefaultRoute} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as reducers from './reducers/reducers'

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}


let store = applyMiddleware(logger)(createStore)(combineReducers(reducers))

const routes = (
  <Route name="root" path="/" handler={Root}>
    <DefaultRoute handler={SetList} />
    <Route name="set" path="/sets/:setUuid" handler={SetDetail} />
    <Route name="sets" path="/sets/" handler={SetList} />
  </Route>
)

run(routes, (Handler) => {
  React.render((<Provider store={store}>
    {() => <Handler/>}
    </Provider>), document.body)
})

