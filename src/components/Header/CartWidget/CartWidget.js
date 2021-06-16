import React from 'react'
import '../Header.css';
import { Button, Icon } from 'semantic-ui-react'

function CartWidget() {
    return (
    <div>
      <Button animated="vertical" className="cart-button">
        <Button.Content hidden> Carrito </Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
    </div>
    );
}

export default CartWidget
