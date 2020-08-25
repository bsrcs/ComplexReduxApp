import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"
import {ListGroup, ListGroupItem} from "reactstrap"

class CategoryList extends Component {
  componentDidMount(){
    // uygulama acildiginda kategorileri bir kere cagir.
    this.props.actions.getCategories()
    console.log("categories: " + this.props.categories.length)
  }
  render() {
    return (
      <div>
        <h3>Categories</h3>
         <ListGroup>
          {this.props.categories.map( category => (
            <ListGroupItem 
            onClick={ () => this.props.actions.changeCategory(category)}
            key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5>Selected category: {this.props.currentCategory.categoryName}</h5> 
      </div>
    );
  }
}
// secili kategoriyi buraya bagla
function mapStateToProps(state){
  return {
    currentCategory:state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

// aksiyona baglanmam lazim.
// okunabilirlik icin aksiyonla ayni adi key olarak verdim.
// 
function mapDispatchToProps(dispatch){
  return{
    actions:{
      getCategories:bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory:bindActionCreators(categoryActions.changeCategory, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);