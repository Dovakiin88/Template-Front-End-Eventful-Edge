import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Create from './Pages/Create';
import EventRequest from './Pages/EventRequest';
import Write from './Pages/Write';
import { DataTable } from './Datatable/Datatable';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/create' element={<Create />} />
          <Route path='/eventRequest' element={<EventRequest />} />
          <Route path='/write' element={<Write />} />
          <Route path='/datatable' element={<DataTable />} />
        </Routes>
      </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)



