import React, { Component } from 'react';
import SingleColumn from '../SingleColumn/SingleColumn';
import './SingleRow.scss'
class SingleRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    generateColumns = () => {
        const { noOfCol, spaceBtwBox }= this.props;
        let totalColumns = [];
    if (noOfCol) {
      for (let i = 0; i < noOfCol; i++) {
        
        totalColumns.push(<SingleColumn spaceBtwBox={spaceBtwBox} />);
      }

      return <div> {totalColumns} </div>;
    }
    }
    render() {
        const { noOfCol, spaceBtwRows }= this.props
        console.log('noOfCol :', noOfCol);
        return (
            <div className='single-row' style={{ marginBottom: `${spaceBtwRows}px`}}>
                {this.generateColumns()}
            </div>
        );
    }
}

export default SingleRow;