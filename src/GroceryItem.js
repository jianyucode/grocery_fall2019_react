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
  <div>
  <List.Item key={id}
  style={ brought ? { ...styles.GroceryItem, ...styles.brought } : styles.GroceryItem }
  onClick={ () => todoClick(id) }>
    {name} - ${price} --
    </List.Item>
    <Button color="white" key={id} onClick={() => remove(id)}> Delete </Button>
    </div>


)

export default GroceryItem;
