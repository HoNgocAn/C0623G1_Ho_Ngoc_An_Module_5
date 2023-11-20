import logo from './logo.svg';
import './App.css';
import ListService from "./components/service/ListService";
import EditService from "./components/service/EditService";
import CreateService from "./components/service/CreateService";
import ListCustomer from "./components/customer/ListCustomer";
import CreateCustomer from "./components/customer/CreateCustomer";
import EditCustomer from "./components/customer/EditCustomer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import CreateContract from "./components/contract/CreateContract";
import ListContract from "./components/contract/ListContract";


function App() {
  return (
      <>
          {/*<Header/>*/}
          {/*<Navigation/>*/}
      {/*<ListService/>*/}
      {/*<EditService/>*/}
      {/*<CreateService/>*/}
      {/*<ListCustomer/>*/}
      {/*<CreateCustomer/>*/}
      {/*<EditCustomer/>*/}
      {/*    <Footer/>*/}
      {/*<CreateContract/>*/}
        <ListContract/>
       </>
  )
}

export default App;
