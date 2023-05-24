import {  Route, Routes } from 'react-router-dom';
import AddCategory from './components/category/AddCategory';
import Categories from './components/category/Categories';
import EditCategory from './components/category/EditCategory';
import Configurations from './components/configuration/Configurations';
import Profile from './components/layout/Profile';
import Template from './components/layout/Template';
import LoginForm from './components/LoginForm';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import Products from './components/product/Products';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import Users from './components/user/Users';

function AppRoutes() {

    const routes = [
        {
            path: '/admin',
            element: Template,
        },
        
    ];

    return (
        <Routes>
                <Route path="/admin/dashboard" element={<Template />}>


                {/* Users Routes */}
                <Route path="/admin/dashboard/users/add" element={<AddUser />} />
                <Route path="/admin/dashboard/users" element={<Users />} />
                <Route path="/admin/dashboard/users/profile" element={<Profile />} />
                <Route path="/admin/dashboard/users/edit/:id/:rows/:page/" element={<EditUser />} />
                <Route path="/admin/dashboard/users/:recordsPerPage/:pageNumber/" element={<Users />} />
                
                
                {/* Products Routes */}
                <Route path="/admin/dashboard/products" element={<Products />} />
                <Route path="/admin/dashboard/products/add" element={<AddProduct />} />
                <Route path="/admin/dashboard/products/edit/:id/:rows/:page/" element={<EditProduct />} />
                <Route path="/admin/dashboard/products/:recordsPerPage/:pageNumber/" element={<Products />} />

                {/* Categories Routes */}
                <Route path="/admin/dashboard/categories" element={<Categories />} />
                <Route path="/admin/dashboard/categories/add" element={<AddCategory />} />
                <Route path="/admin/dashboard/categories/edit/:id/:rows/:page/" element={<EditCategory />} />
                <Route path="/admin/dashboard/categories/:recordsPerPage/:pageNumber/" element={<Categories />} />
                <Route path='/admin/dashboard/settings' element={<Configurations />} />
            </Route>

        </Routes>
    );


}

export default AppRoutes;