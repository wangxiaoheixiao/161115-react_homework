/**
 * Created by wangxiaohei_5 on 2017/3/8.
 */
import React,{Component} from 'react'


export default class Search extends Component{

    search = () => {
        const searchName = this.refs.searchName.value.trim()
        if(searchName){
            this.props.setSearchName(searchName)
        }
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="enter the name you search" ref='searchName'/>
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}