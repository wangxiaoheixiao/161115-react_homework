import React,{Component} from 'react'
import PubSub from 'pubsub-js'
import Add from '../add/Add'
import List from '../list/List'

export default class App extends Component{
    constructor (props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    add = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    remove = (index) => {
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
    }

    componentWillMount(){
        const comments = [
            {username:'xxx',content:'我最棒！'},
            {username:'zzz',content:'爱要怎么说出口~我的心里好难受~~'}
        ]
        this.setState({comments})

        PubSub.subscribe('delete', (message,index) => {
            this.remove(index)
        })

    }

    render(){
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                <Add add={this.add} />
                <List comments={this.state.comments} />
                </div>
            </div>
        )
    }
}