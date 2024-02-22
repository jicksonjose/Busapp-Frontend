import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import BusDetails from './components/BusDetails';
import Dashboard from './components/Dashboard';
import UploadDocuments from './components/UploadDocuments';
import AddBusDetails from './components/AddBusDetails';
import AddBusFeature from './components/AddBusFeature';
import BusFeature from './components/BusFeature';
import BusRoute from './components/BusRoute';
import AddBusPoint from './components/AddBusPoint';
import AddBusRoutes from './components/AddBusRoutes';
import BusPoint from './components/BusPoint';
import Signup from './components/Signup';
import BusDocuments from './components/BusDocuments';
import Otp from './components/Otp';
import { BusSchedule } from './components/BusSchedule';
import Schedule from './components/Schedule';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/busdetails' element={<BusDetails/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/upload-documents' element={<UploadDocuments/>}></Route>
      <Route path='/add-bus-details' element={<AddBusDetails/>}></Route>
      <Route path='/busfeature' element={<BusFeature/>}></Route>
      <Route path='/add-bus-features' element={<AddBusFeature/>}></Route>
      <Route path='/bus-route' element={<BusRoute/>}></Route>
      <Route path='/add-bus-route' element={<AddBusRoutes/>}></Route>
      <Route path='/bus-points' element={<BusPoint/>}></Route>
      <Route path='/add-bus-points' element={<AddBusPoint/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/busdocuments' element={<BusDocuments/>}></Route>
      <Route path='/otp' element={<Otp/>}></Route>
      <Route path='/busschedule' element={<BusSchedule/>}></Route>
      <Route path='/addschedule' element={<Schedule/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
