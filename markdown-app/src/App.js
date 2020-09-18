import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import { sampleText } from './sampleText'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className='col-sm-6'>
          <textarea 
            className="form-control" 
            rows="50"
            value={ sampleText }>
          </textarea>
        </div>     
        <div className="col-sm-6">
          <div>
            { sampleText }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
