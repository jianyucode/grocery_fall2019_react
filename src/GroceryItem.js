import React from 'react';
import {List, Button} from 'semantic-ui-react'

const styles = {
  GroceryItem: {
    cursor: 'pointer',
  },
  brought: {
    color: 'black',
    textDecoration: 'line-through',
  }
}

const GroceryItem = ({id, name, price, brought,todoClick, remove}) => (
  <List.Item key={id}
  style={ brought ? { ...styles.GroceryItem, ...styles.brought } : styles.GroceryItem }
  onClick={ () => todoClick(id) }

  >
    {name} - ${price} --

  <Button color="white" onClick={() => remove(id)}>
      Delete
  </Button>
  </List.Item>


)

export default GroceryItem;
