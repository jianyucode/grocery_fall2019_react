import React, { Component} from 'react';
import { Form} from 'semantic-ui-react'


class GroceryForm extends Component {
  state = { name: "", price: ""}

  handleChange = (event) => {
  const {name, value} =event.target
  this.setState({[name]:value })
}

handleSubmit = (event) => {
  event.preventDefault()
  this.props.add(this.state)

  this.setState({name: "", price: "", brought:""})

}

  render() {
    const {name, price, } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          label="Name"
          placeholder="Apple"
          name="name"
          value={name}
          onChange={this.handleChange}
          />

          <Form.Input
            fluid
            label="price"
            placeholder="1.99"
            name="price"
            value={price}
            onChange={this.handleChange}
            />



        <Form.Button>Submit</Form.Button>




      </Form>

    )
  }
}

export default GroceryForm;
