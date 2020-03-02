import React, { Component } from 'react';
import ChildItem from './ChildItem'
class App extends Component {
    constructor(props) {
        super(props);
        this.inputValue = this.inputValue.bind(this)
        this.addValue = this.addValue.bind(this)

        this.state = { value:'',
            list: ['项目1', '项目2', '项目3'] }
    }
    componentDidMount(){
        this.refs.inputBox.focus();
    }
    render() {
        return (<div>
            <input type="text" value={this.state.value} onChange={this.inputValue} ref="inputBox"/><button onClick={this.addValue}>增加</button>
            <ul>
                {this.state.list.map((item, index) => {
                return <ChildItem content={item} key={index+item} index = {index} delList={this.delList.bind(this)}></ChildItem>
                })}
            </ul>
            </div>);
    }
    inputValue(e) {
        this.setState({
            value:e.target.value
        })
    };
    addValue(){
        this.setState({
            list:[...this.state.list,this.state.value],
            value:''
        })
        this.refs.inputBox.focus();
    }
    delList(index){
        console.log(index)
        let newArr = this.state.list;
        newArr.splice(index,1)
        this.setState({
            list:newArr
        })
    }
}

export default App;