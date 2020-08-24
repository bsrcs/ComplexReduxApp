import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Categories</h3>
        <h5>Selected category: {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}
// secili kategoriyi buraya bagla
function mapStateToProps(state){
  return {
    currentCategory:state.changeCategoryReducer
  }
}

export default connect(mapStateToProps)(CategoryList);