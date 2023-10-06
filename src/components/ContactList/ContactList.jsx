import { Component } from 'react';
import { Btn, Item, List } from './ContactList.style';

export class ContactList extends Component {
  render() {
    const { list, filter, delCont } = this.props;
    return (
      <List>
        {list.map(item => {
          if (item.name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <Item key={item.id}>
                <p>
                  {item.name}: {item.number}
                </p>
                <Btn onClick={() => delCont(item.id)} type="button">
                  Delete
                </Btn>
              </Item>
            );
          }
        })}
      </List>
    );
  }
}
