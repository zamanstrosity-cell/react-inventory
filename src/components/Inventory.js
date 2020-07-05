import React from 'react';
import AddItem from './AddItem';


class Inventory extends React.Component {
  render() {
      return this.props.inventory.map((item) => (
      <AddItem item={item} />
      ));
  }
}

export default Inventory;
