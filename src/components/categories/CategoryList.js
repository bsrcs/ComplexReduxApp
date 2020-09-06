import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions"
import { ListGroup, ListGroupItem } from "reactstrap"
import { Badge } from "reactstrap"

class CategoryList extends Component {
  componentDidMount() {
    // uygulama acildiginda kategorileri bir kere cagir.
    this.props.actions.getCategories()
    console.log("categories: " + this.props.categories.length)
  }

  // Kategoriye tikladigim zaman secili kategori olarak degissin.
  // Secilen kategoriyi productin yaninda badge olarak getir.
  // Secili kategorideki urunleri listele.
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="light">Categories</Badge>
        </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}

// secili kategoriyi buraya bagla
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

// aksiyona baglanmam lazim.
// okunabilirlik icin aksiyonla ayni adi key olarak verdim.
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(
        productActions.getProducts,
        dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)