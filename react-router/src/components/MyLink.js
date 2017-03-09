import React from 'react'
import {Link} from 'react-router'

class MyLink extends React.Component{
    render(){
        return(
            <Link {...this.props}  activeClassName='active'/>
        )
    }
}

export default MyLink