import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { resourceURIs, HoverSound } from './Util.js';

import { pageChange, sizeChange } from './reducer.js'

const mapStateToProps = state => ({...state})
const mapDispatchToProps = { pageChange, sizeChange }

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  onMouseEnter(event) {
      event.currentTarget.lastChild.play().then(() => {
    }).catch(error => {
    });
  }

  handlePageChange(event) {
    this.props.pageChange({
      page: parseInt(event.target.value)
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    switch (this.props.resourceURI) {
      case resourceURIs.nameSearch: this.props.handleSearchByName(); break;
      case resourceURIs.stars: this.props.paginate(); break;
      case resourceURIs.planetCountSearch: this.props.handleSearchByPlanetCount(); break;
      case resourceURIs.distance: this.props.handleSearchByDistance(); break;
      default: this.props.paginate(); break;
    }
  }

  handleSizeChange(event) {
    this.props.sizeChange({
      size: parseInt(event.target.value)
    })
  }

  render() {
    return (
      <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between", width: "516px", fontWeight: "bold" }}>
        <span style={{ margin: "5px", width: "25%" }}>Found: {this.props.starResource.prop("page").totalElements}</span>
        <span style={{ margin: "5px", width: "25%" }}>
          Page:
					<Form onMouseEnter={this.onMouseEnter} onSubmit={this.handleSubmit} style={{ display: "inline-block" }}>
            <input
              className="pagination-input"
              type="number" min="1"
              max={Math.ceil(parseInt(this.props.starResource.prop("page").totalElements) / parseInt(this.props.starResource.prop("page").size))}
              onChange={this.handlePageChange}
              value={this.props.page}
            ></input>
            <HoverSound />
          </Form>
        </span>
        <span style={{ margin: "5px", width: "25%" }}>
          <span>Limit: <Form onMouseEnter={this.onMouseEnter} onSubmit={this.handleSubmit} style={{ display: "inline-block" }}>
            <input
              className="pagination-input"
              type="number"
              onChange={this.handleSizeChange}
              value={this.props.size}></input>
              <HoverSound />
          </Form>
          </span>

        </span>
        <span style={{ margin: "5px", width: "25%" }}>
          <Button
            variant="success"
            type="button"
            style={{ margin: "0px", width: "100%" }}
            onClick={this.props.handleSearchBy}
            onMouseEnter={this.onMouseEnter}
          >
            <span>Search</span>
            <HoverSound />
		      </Button>
        </span>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

