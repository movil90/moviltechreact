import React from 'react'
import './ItemListContainer.css';
import { Button } from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react';
import image from './acer-aspire5.jpg';
import CounterButtons from './CounterButtons/CounterButtons'
import ItemList from './ItemList/ItemList'



function ItemListContainer() {
    return (
        <div>
            <Grid celled>
              <Grid.Row>
                <Grid.Column width={2}>
                <ItemList /> <img src='{image}' />
                </Grid.Column>
                <Grid.Column width={3}>
                 <CounterButtons />    
                </Grid.Column>
                <Grid.Column width={10}>
                <p>Descripción producto: </p>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          
          </div>
    )
}

export default ItemListContainer;
