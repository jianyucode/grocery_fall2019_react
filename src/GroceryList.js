import React, {Component} from 'react';
import GroceryItem from './GroceryItem.js';
import { List } from 'semantic-ui-react';


const GroceryList = ({items, todoClick, remove}) => (
    <List>

        {
          items.map( items => (
            <GroceryItem key={items.id} {...items}  remove={remove} todoClick = {todoClick} />

          ))
        }

      </List>

)


export default GroceryList;
