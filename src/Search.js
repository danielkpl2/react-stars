import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { sortOptions, HoverSound } from './Util.js';
import { searchOptionChange, searchChange, sortChange } from './reducer.js';

const mapStateToProps = state => ({...state})
const mapDispatchToProps = { searchOptionChange, searchChange, sortChange }

class Search extends Component {

  constructor(props) {
    super(props);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.hangleSearchOptionChange = this.hangleSearchOptionChange.bind(this);
  }

  onMouseEnter(event) {
      event.currentTarget.nextElementSibling.play().then(() => {
    }).catch(error => {
    });
  }

  handleSearchChange(event) {
    this.props.searchChange({search: event.target.value})
  }

  hangleSearchOptionChange(event) {
    this.props.searchOptionChange({searchBy: event.target.value})
  }


  handleSortChange(event) {
    this.props.sortChange({sort: event.target.value})
  }

  render() {
    const { search, searchBy, handleSearchBy } = this.props;
    var options = [];

    switch (this.props.searchBy) {
      case "": options = sortOptions; break;
      case "planet-count": options = sortOptions; break;
      case "distance": options = sortOptions; break;
      case "name": options = [
        { "name": "Name ↓", "value": "name,desc" },
        { "name": "Name ↑", "value": "name,asc" },
      ]; break;
      default: options = sortOptions; break;
    }

    return (
      <div className="form-inline" style={{ width: "516px" }}>
        <div style={{ width: "100%", textAlign: "left" }}>
          <Form onSubmit={handleSearchBy} style={{ display: "flex" }}>
            <Form.Control
              name="search"
              placeholder="Search By"
              type="text"
              style={{ margin: "5px", "opacity": "0.8", width: "119px" }}
              value={search}
              onChange={this.handleSearchChange}
              onMouseEnter={this.onMouseEnter}
            >
            </Form.Control>
            <HoverSound />
            <Form.Control
              as="select"
              value={searchBy}
              onChange={this.hangleSearchOptionChange}
              style={{ margin: "5px", "opacity": "0.8", width: "119px" }}
              onMouseEnter={this.onMouseEnter}
            >
              <option value="">--</option>
              <option value="name">Name</option>
              <option value="planet-count">Planet No.</option>
              <option value="distance">Distance</option>
            </Form.Control>
            <HoverSound />
            <Form.Control
              as="select"
              onChange={this.handleSortChange}
              onMouseEnter={this.onMouseEnter}
              value={this.props.sort}
              style={{ margin: "5px", opacity: "0.8", width: "50%" }}>

              >
      			{options.map((option, key) =>
                <option key={key} value={option.value}>{option.name}</option>
              )}
            </Form.Control>
            <HoverSound />
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);