import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Create from './Pages/Create';
import EventRequest from './Pages/EventRequest';
import Write from './Pages/Write';
import { DataTable } from './Datatable/Datatable';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/create' element={<Create />} />
        <Route path='/eventRequest' element={<EventRequest />} />
        <Route path='/write' element={<Write />} />
        <Route path='/datatable' element={<DataTable />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)



