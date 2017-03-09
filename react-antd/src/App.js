import React,{Component} from 'react'
import {Button,DatePicker} from 'antd'
class App extends Component{

    render(){
        return(
            <div class="container">
                <DatePicker />
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
}

export default App
