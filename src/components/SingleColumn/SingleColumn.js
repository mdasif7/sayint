import React, { Component } from 'react';
import './SingleColumn.scss'
class SingleColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { spaceBtwBox }= this.props;
        console.log('spaceBtwBox :', spaceBtwBox);
        // style={{ marginBottom: `${spaceBtwRows}px`}}
        return (
            <div className='each-column' style={{margin: `${spaceBtwBox}px`}}>Column</div>
        );
    }
}

export default SingleColumn;