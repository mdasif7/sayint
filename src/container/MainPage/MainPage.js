import React, { Component } from "react";
import SingleRow from '../../components/SingleRow/SingleRow';
import "./MainPage.scss";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfRows: undefined,
      noOfCol: undefined,
      spaceBtwRows: undefined,
      spaceBtwBox: undefined
    };
  }
  handleChange = e => {
    switch (e.target.name) {
      case "rows": {
        this.setState({ noOfRows: Number(e.target.value) });
        return null;
      }
      case "columns": {
        this.setState({ noOfCol: e.target.value.split(",") });
        return null;
      }
      case "spaceBtwRows": {
        this.setState({ spaceBtwRows: Number(e.target.value) });
        return null;
      }
      case "spaceBtwBox": {
        this.setState({ spaceBtwBox: Number(e.target.value) });
        return null;
      }
      default: {
        return null;
      }
    }
  };
  generateRows = e => {
    const { noOfRows, noOfCol, spaceBtwBox, spaceBtwRows } = this.state;
    let totalRows = [];
    if (noOfRows && noOfCol && spaceBtwBox && spaceBtwRows) {
      for (let i = 0; i < noOfRows; i++) {
        let noOfColvalue = noOfCol && noOfCol[i];
        totalRows.push(<SingleRow className="single-row" noOfCol={noOfColvalue} spaceBtwRows={spaceBtwRows} spaceBtwBox={spaceBtwBox}/>);
      }

      return <div> {totalRows} </div>;
    }
  };
  render() {
    const { noOfRows, noOfCol, spaceBtwBox, spaceBtwRows } = this.state;
    console.log("spaceBtwRows :", spaceBtwRows);
    console.log("spaceBtwBox :", spaceBtwBox);
    console.log("noOfCol :", noOfCol);
    console.log("noOfRows :", noOfRows);

    return (
      <div className="main-page">
          Please Enter All The fields
        <input
          type="text"
          name="rows"
          placeholder="No.of Rows"
          onChange={this.handleChange}
          onInput={this.handleInput}
        />
        <input
          type="text"
          name="columns"
          placeholder="Columns String"
          onChange={this.handleChange}
          onInput={this.handleInput}
        />
        <br />{" "}
        <input
          type="text"
          name="spaceBtwRows"
          placeholder="Space betwween Rows"
          onChange={this.handleChange}
          onInput={this.handleInput}
        />
        <input
          type="text"
          name="spaceBtwBox"
          placeholder="Space between Boxes"
          onChange={this.handleChange}
          onInput={this.handleInput}
        />
        <div className='rows-columns-container'>
        {noOfRows && noOfRows !== undefined && this.generateRows()}

        </div>
     </div>
    );
  }
}

export default MainPage;
