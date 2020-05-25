import React, {Component} from 'react';
import Items from './Items';

export default class ItemList extends Component{
    render(){
        const {items, clearList, handleDelete, handleEdit}=this.props;
        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Item List</h3>
                {items.map((item, id) =>{
                    return(
                        <Items key={id}
                            title={item.title}
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>{handleEdit(item.id)}}
                        />
                    );
                })}
                <button type="submit" 
                    className="btn btn-danger btn-block text-uppercase mt-5"
                    onClick={clearList}>Clear Items</button>
            </ul>
        );
    }
}