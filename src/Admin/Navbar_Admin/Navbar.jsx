import React from 'react'
import '../../AssetDATRVEL/clients/plugins/fontawesome-free/css/all.min.css'
import '../../AssetDATRVEL/clients/plugins/daterangepicker/daterangepicker.css';
    
import '../../AssetDATRVEL/clients/plugins/icheck-bootstrap/icheck-bootstrap.min.css';

import '../../AssetDATRVEL/clients/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css';

import '../../AssetDATRVEL/clients/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';

import '../../AssetDATRVEL/clients/plugins/select2/css/select2.min.css';
import'../../AssetDATRVEL/clients/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css';
import '../../AssetDATRVEL/clients/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css';

import '../../AssetDATRVEL/clients/plugins/bs-stepper/css/bs-stepper.min.css';

import '../../AssetDATRVEL/clients/plugins/dropzone/min/dropzone.min.css';

import '../../AssetDATRVEL/clients/dist/css/adminlte.min.css';

import useScript from '../../Javascript/Admin';
import {Link} from 'react-router-dom'

const Navbar = () => {
  useScript('');
  return (
    <div>
      <>
<aside class="main-sidebar sidebar-dark-primary elevation-4">

  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
      
      </div>
      <div className="info">
        <a href="~/Views/Home/Index.cshtml" className="d-block">
          Pham Quang Truong
        </a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        {/* Add icons to the links using the .nav-icon class
      with font-awesome or any other icon font library */}
      
        <li className="nav-item">
        <Link to='/admin/Tour' className="nav-link">
          <i className="nav-icon fas fa-th" />
          Tour
        </Link>
          
        </li>
        <li className="nav-item">
          <a href="/admin/posts" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              News
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/Order" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Đơn hàng 
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/posts" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Quảng cáo
            </p>
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Quản lý sản phẩm
            </p>
          </a>
         
        </li> */}
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
</>

    </div>
  )
}

export default Navbar