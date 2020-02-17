import React from 'react'
import { connect } from 'react-redux'
import { addFav } from '../actions/favsactions'

class Joke extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bool: false
    }
  }

  clickHandler = e => {
    e.preventDefault()
    this.setState({
      bool: !this.state.bool
    })
  }

  addToFavs = (e, joke) => {
    e.preventDefault()
    this.props.addFav(joke)
  }

  render () {
    console.log(this.state)
    console.log('joke component props, ', this.props)
    return (
      <div>
        <h1>Joke: </h1>
        <span>{this.props.joke.setup}</span>
        <button onClick={this.clickHandler}>{this.state.bool ? 'hide' : 'show'} puchline</button><br></br>
        {this.state.bool
          ? <><span>{this.props.joke.punchline}</span><button onClick={e => this.addToFavs(e, this.props.joke)} type={'button'}>add to favs</button></>
          : ''}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFav: fav => dispatch(addFav(fav))
  }
}

export default connect(null, mapDispatchToProps)(Joke)
