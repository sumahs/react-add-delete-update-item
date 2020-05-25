import React, {Component} from 'react';
import Items from './Items';

export default class ItemList extends Component{
    render(){
        return(
            <div>Item List
                <Items/>
            </div>
        );
    }
}