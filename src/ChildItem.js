import React, { Component } from 'react';
class ChildItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( <li onClick={this.handleClick}>
            {this.props.content}
        </li> );
    }
    handleClick(){
        this.props.delList(this.props.index)
    }
}
 
export default ChildItem;