import React,{Component} from 'react'
import Item from '../item/Item'

export default class Add extends Component{


    render(){
        const {comments} = this.props
        const display = comments.length === 0? 'block':'none'
        const liList = comments.map((comment,index) => {
            return<Item key={index} comment={comment} />
        })
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {liList}
                </ul>
            </div>
        )
    }
}