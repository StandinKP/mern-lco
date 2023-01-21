import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./core/Home"
import Signup from "./user/Signup"
import Signin from "./user/Signin"
import AdminRoute from "./auth/helper/AdminRoutes"
import PrivateRoute from "./auth/helper/PrivateRoutes"
import ViewProduct from "./user/ViewProduct"
import AdminDashBoard from "./user/AdminDashBoard"
import AddCategory from "./admin/AddCategory"
import ManageCategories from "./admin/ManageCategories"
import AddProduct from "./admin/AddProduct"
import ManageProducts from "./admin/ManageProducts"
import UpdateProduct from "./admin/UpdateProduct"
import UpdateCategory from "./admin/UpdateCategory"
import Cart from "./core/Cart"
import Products from "./user/Products"
import ManagePages from "./admin/ManagePages"
import ManageFeaturedProducts from "./admin/ManageFeaturedProducts"
import ManageHomePage from "./admin/ManageHomePage"
import Details from "./core/Details"
import Address from "./core/Address"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/product/:productId" exact component={ViewProduct} />
        <Route path="/products" exact component={Products} />
        <PrivateRoute path="/cart" exact component={Cart} />
        <PrivateRoute path="/details" exact component={Details} />
        <PrivateRoute path="/address" exact component={Address} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/managepages" exact component={ManagePages} />
        <AdminRoute
          path="/admin/managepages/homepage"
          exact
          component={ManageHomePage}
        />
        <AdminRoute
          path="/admin/managepages/featuredproducts"
          exact
          component={ManageFeaturedProducts}
        />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
