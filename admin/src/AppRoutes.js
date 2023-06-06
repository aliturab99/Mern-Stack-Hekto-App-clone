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
import Brands from './components/brands/Brands';
import AddBrand from './components/brands/AddBrand';
import EditBrand from './components/brands/EditBrand';
import Reviews from './components/product/Reviews';
import Dashboard from './components/Dashboard';
import Orders from './components/order/Orders';
import SingleOrder from './components/order/SingleOrder';

function AppRoutes() {

    const routes = [
        {
            path: '/admin',
            element: Template,
        },
        
    ];

    return (
        <Routes>
                <Route path="/admin/" element={<Template />}>
                <Route index element={<Dashboard />} />

                {/* Users Routes */}
                <Route path="users/add" element={<AddUser />} />
                <Route path="users" element={<Users />} />
                <Route path="users/profile" element={<Profile />} />
                <Route path="users/edit/:id/:rows/:page/" element={<EditUser />} />
                <Route path="users/:recordsPerPage/:pageNumber/" element={<Users />} />
                
                
                {/* Products Routes */}
                <Route path="products" element={<Products />} />
                <Route path="products/add" element={<AddProduct />} />
                <Route path="products/edit/:id/:rows/:page/" element={<EditProduct />} />
                <Route path="products/:recordsPerPage/:pageNumber/" element={<Products />} />
                <Route path="products/reviews/:productId/" element={<Reviews />} />


                {/* Categories Routes */}
                <Route path="categories" element={<Categories />} />
                <Route path="categories/add" element={<AddCategory />} />
                <Route path="categories/edit/:id/:rows/:page/" element={<EditCategory />} />
                <Route path="categories/:recordsPerPage/:pageNumber/" element={<Categories />} />
                <Route path='settings' element={<Configurations />} />

                {/* Brands Routes */}
                <Route path="brands" element={<Brands />} />
                <Route path="brands/add" element={<AddBrand />} />
                <Route path="brands/edit/:id/:rows/:page/" element={<EditBrand />} />
                <Route path="brands/:recordsPerPage/:pageNumber/" element={<Brands />} />
                
                
                {/* Orders Routes */}
                <Route path="orders" element={<Orders />} />
                <Route path="orders/singleOrder/:orderId/:rows/:page/" element={<SingleOrder />} />
            </Route>

        </Routes>
    );


}

export default AppRoutes;