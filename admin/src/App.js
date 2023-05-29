import logo from './logo.svg';
import './App.css';
import AddUser from './components/user/AddUser';
import Template from './components/layout/Template';
import AppRoutes from './AppRoutes';
import { loadAuth, loadToken, signOut } from './store/actions/authActions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import AppPreLoader from './components/library/AppPreLoader';
import { Button } from '@mui/material';
import AppPublic from './AppPublic';


const publicRoutes = ['/admin/signin', '/admin/forgot-password', '/admin/reset-password']
function App({ user, isAuthLoaded, loadAuth, signOut }) {

  const { pathname } = useLocation();

  useEffect( () => {
    loadAuth()

  },[])
  
  if (!isAuthLoaded)
    return <AppPreLoader message="Loading..." />

  if (user && publicRoutes.find(url => pathname.startsWith(url)))
    return <Navigate to='/admin/' />

  if (!user && !publicRoutes.find(url => pathname.startsWith(url)))
    return <Navigate to='/admin/signin' />


  if (pathname === '/' || pathname === '/admin')
    return <Navigate to='/admin/signin' />

  if (!user)
    return <AppPublic />

  return (
    <div className="App">
        <AppRoutes />
    </div>
  );
}

const mapStateToProps = (state) => {
  
  return(
    {
      user: state.auth.user,
      isAuthLoaded: state.auth.isLogined
    }
  )
}

export default connect(mapStateToProps, { loadAuth, signOut })(App);
