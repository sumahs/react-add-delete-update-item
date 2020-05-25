import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "@fortawesome/fontawesome-free/css/all.min.css";
import ItemList from './component/ItemList';
import ItemInput from './component/ItemInput';
//gitup setup
class App extends Component{
  state = {
    items : [],
    id: uuidv4(),
    item: '',
    editItem:false
  };

  handleChange = e =>{
    this.setState({
      item: e.target.value
    })
  };

  handleSubmit =e =>{
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items:updatedItems,
      item: '',
      id: uuidv4,
      editItem: false
    },
    ()=>console.log(this.state)
    );
  };

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
