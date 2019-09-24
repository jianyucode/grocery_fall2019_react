import React, {Component} from 'react';
import GroceryList from './GroceryList.js'
import { Container, Header, Image} from 'semantic-ui-react';
import GroceryForm from './GroceryForm';



class App extends Component {

  state = {
    items : [
      {id:1, name: "Banana", price: "1.99", brought: false},
      {id:2, name: "Apple", price: "2.99", brought: true},
      {id:3, name: "Peach", price: "3.99", brought: false},
      {id:4, name: "Plum", price: "4.99", brought: true},
      {id:5, name: "Mango", price: "5.99", brought: false},
      {id:6, name: "Avacado", price: "6.99", brought: true},
      {id:7, name: "Grape", price: "7.99", brought: false},

    ]
  }

  removeGroceryItem = (id) => {
  const items = this.state.items.filter( items => {
    if (items.id !== id)
    return items
  })
  this.setState({ items: [...items]})
}

addGroceryItem = (incomingGroceryItem) => {
  let newGroceryItem = {id: this.getId(), ...incomingGroceryItem}
  this.setState({items: [newGroceryItem, ...this.state.items]})
}

getId = () => {
// NOTE We are just using this as a helper function for id's since we aren't using a db yet
return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
};

handleClick = (id) => {
  const { items } = this.state
  this.setState ({
    items: items.map( items => {
      if (items.id === id) {
        return {
          ...items,
          brought: !items.brought
        }
      }
      return items
    })
  })
}





  render(){
    const {items} = this.state
    return (
      <Container>
      <Header>React Grocery List </Header>
      <GroceryForm add={this.addGroceryItem} /><br />
      <GroceryList items={items}  remove={this.removeGroceryItem} todoClick={this.handleClick}  />

      </Container>
    );

  }
}

export default App;
