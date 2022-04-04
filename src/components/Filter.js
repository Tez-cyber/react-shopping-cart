import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
            <div className="filter-result">
                Products:
                {" " + this.props.count}
            </div>
            <div className="filter-sort">Order 
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="">Latest</option>
                    <option value="Lowest">Lowest</option>
                    <option value="Highest">Highest</option>
                </select>
            </div>
            <div className="filter-flavor">Filter 
                <select value={this.props.flavor} onChange={this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Strawberry">Strawberry</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Raspberry">Raspberry</option>
                    <option value="Caramel">Caramel</option>
                    <option value="Lemon">Lemon</option>
                    <option value="Mocha">Mocha</option>
                    <option value="Bluebery">Bluebery</option>
                    <option value="Mint">Mint</option>
                </select>
            </div>
      </div>
    )
  }
}
