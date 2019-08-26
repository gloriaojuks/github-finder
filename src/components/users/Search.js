import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state= {
        text: ''
    }

    static propTypes= {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
        
    }

    onSubmit= (e)=>{
        e.preventDefault()
        // console.log(this.state.text)
        this.props.searchUsers(this.state.text)
        this.setState({text: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    
    render() {
        const {showClear, clearUser} = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Uearch Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="search" className="btn btn-dark btn-block" />  
                </form>

                {showClear &&
                                <button className="btn btn-light btn-block" onClick={clearUser}>Clear</button>
                
                }
            

            </div>
        )
    }
}

export default Search
