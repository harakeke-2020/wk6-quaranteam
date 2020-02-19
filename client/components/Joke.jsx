import React from 'react'
import { connect } from 'react-redux'
import { addFav, deleteFav } from '../actions/favsactions'

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
    console.log('joke given to add to favs ', joke)
    e.preventDefault()
    this.props.addFav(joke)
  }

  delete = (e, fav) => {
    e.preventDefault()
    this.props.deleteFav(fav)
  }

  render () {
    console.log('joke component props, ', this.props)
    return (
      <div>
        <span>{this.props.joke.setup}</span>
        <button onClick={this.clickHandler}>{this.state.bool ? 'hide' : 'show'} puchline</button><br></br>
        {this.state.bool
          ? <><span>{this.props.joke.punchline}</span><button onClick={e => this.addToFavs(e, this.props.joke)} type={'button'}>add to favs</button></>
          : ''}
        {this.props.fromFavs && <button onClick={e => this.delete(e, this.props.joke)}>Delete Favorite</button>}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFav: fav => dispatch(addFav(fav)),
    deleteFav: fav => dispatch(deleteFav(fav))
  }
}

export default connect(null, mapDispatchToProps)(Joke)
