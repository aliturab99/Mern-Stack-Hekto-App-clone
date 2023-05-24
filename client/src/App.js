import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/commonComponents/footer/Footer';
import Header from './components/commonComponents/header/Header';
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const endpoint = location.pathname;
  const isAdminPanel = endpoint === "/admin" || endpoint === "/admin/" ||endpoint === "/admin/users/list" || endpoint === "/admin/users/list/" || endpoint === "/admin/users/add" || endpoint === "/admin/users/add/" || endpoint === "/admin/login" || endpoint === "/admin/login" ? true : false;


  return (<div className="">
    {!isAdminPanel && <Header />}
    <AppRoutes />
    {!isAdminPanel && <Footer />}
  </div>
  );
}

export default App;
