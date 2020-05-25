import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './component/ItemList';
import ItemInput from './component/ItemInput';
//gitup setup
class App extends Component{
  state = {
    items : [{id:1, title:"desktop"},{id:2, title:"laptop"},
    {id:3, title:"ipad"}],
    id: uuidv4(),
    item: '',
    editItem:false
  };

  handleChange =(e) =>{
    console.log("handle change");
  }
  handleSubmit =(e) =>{
    console.log("handle submit");
  }
  clearList =() =>{
    console.log("clearList");
  }
  handleDelete =(id) =>{
    console.log(`handle delete ${id}` );
  }
  handleEdit =(id) =>{
    console.log(`handle edit ${id}`);
  }
    render(){
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 max-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">
                INPUT
              </h3>
              <ItemInput item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.editItem}/>
              <ItemList items={this.state.items}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                clearList={this.clearList}/>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
