import React, {Component} from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './component/ItemList';
import ItemInput from './component/ItemInput';

class App extends Component{
    render(){
      return (
        <div >
          <div className="container">
            <div className="row">
              <ItemInput/>
              <ItemList/>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
