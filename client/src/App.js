
import './App.css';
//import Login from './Components/Login';

import {BrowserRouter,Route ,Routes} from "react-router-dom";

import Task from './Pages/SalesRep/Task';
import Event from './Pages/SalesRep/Event';
import Call from './Pages/Call';
import AddTask from './Pages/SalesRep/AddTask';
import AddEvent from './Pages/SalesRep/AddEvent';
import AddCall from './Pages/AddCall';
//import AdminTaskDetails from './Pages/TaskDetailsPage';
import RootPage from './Pages/RootPage';
import SalesRepCalendar from './Pages/SalesRep/SalesRepCalendar';
import ClientCalendar from './Pages/Client/ClientCalendar';
import ClientCall from './Pages/ClientCall';

import ClientEvent from './Pages/Client/ClientEvent';
import TaskDetailsPage from './Pages/TaskDetailsPage';
import CustomerSupporterCalendar from './Pages/CustomerSupporter/CustomerSupporterCalendar';
import AdminAddEvent from './Pages/Admin/AdminAddEvent';
import AdminAddTask from './Pages/Admin/AdminAddTask';

import AdminEvent from './Pages/Admin/AdminEvent';
import AdminTask from './Pages/Admin/AdminTask';
import ClientLeadProgress from './Pages/Client/ClientLeadProgress';
import AdminCalendar from './Pages/Admin/AdminCalendar';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootPage/>}></Route>
          <Route path='/salesrepcalendar' element={<SalesRepCalendar/>}></Route>
          <Route path='/clientcalendar' element={<ClientCalendar/>}></Route>
          <Route path='/customersupportercalendar' element={<CustomerSupporterCalendar/>}></Route>
          <Route path='/admincalendar' element = {<AdminCalendar/>}></Route>
         
          <Route path='/task' element={<Task/>}></Route>
          <Route path='/event' element={<Event/>}></Route>
          <Route path='/call' element = {<Call/>}></Route>
          <Route path='/adminaddevent' element={<AdminAddEvent/>}></Route>
          <Route path='adminaddtask' element = {<AdminAddTask/>}></Route>
          <Route path='adminevent' element = {<AdminEvent/>}></Route>
          <Route path='admintask' element = {<AdminTask/>}></Route>
          <Route path='/addtask' element={<AddTask/>}></Route>
          <Route path='/addevent' element={<AddEvent/>}></Route>
          <Route path='/addcall' element={<AddCall/>}></Route>
          <Route path='/Pages/taskdetailspage' element={<TaskDetailsPage/>}></Route>
          <Route path='clientcalendar' element = {<ClientCalendar/>}></Route>
          <Route path='event' element = {<Event/>}></Route>

          <Route path='/clientcall' element={<ClientCall/>}></Route>
          <Route path='/clientleadprogress' element={<ClientLeadProgress/>}></Route>
          <Route path='/clientevent' element={<ClientEvent/>}></Route>
        </Routes>
       
        </BrowserRouter>
    </div>
  );
}

export default App;
