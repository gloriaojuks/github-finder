import React from 'react'
import PropTypes from 'prop-types'



 //destructuring and arrow function based component decleration
 const  UserItem =({user: {login,followers_url,avatar_url,html_url}})=> {
 
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}} />
                <h3>{login}</h3>
                <a href={followers_url} className='btn btn-dark btn-sm my-1'>followers</a>

                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
                </div>
            </div>
        )
    }

    UserItem.propTypes = {
        user: PropTypes.object.isRequired,
    }

export default UserItem
