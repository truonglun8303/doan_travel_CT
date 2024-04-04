import React from 'react'

const Navbar = () => {
  return (
    <div>
      <>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        {/* <img
          src="#"
          className="img-circle elevation-2"
          alt="User Image"
        /> */}
      </div>
      <div className="info">
        <a href="~/Views/Home/Index.cshtml" className="d-block">
          Alexander Pierce
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
          <a href="/admin/Category" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Danh mục @*
              <i className="right fas fa-angle-left" />
              *@
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/news" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Tin tức @*<span className="right badge badge-danger">New</span>*@
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/posts" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Bài viết @*<span className="right badge badge-danger">New</span>*@
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/Order" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Đơn hàng @*<span className="right badge badge-danger">New</span>*@
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/posts" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Quảng cáo @*<span className="right badge badge-danger">New</span>
              *@
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Quản lý sản phẩm
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/admin/productcategory" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Danh mục sẳn phẩm</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/Product" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Sản phẩm</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            href="javascript:document.getElementById('logOffForm').submit()"
            className="nav-link"
          >
            <i className="nav-icon fas fa-th" />
            <p>
              Đăng xuất @*<span className="right badge badge-danger">New</span>
              *@
            </p>
          </a>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</>

    </div>
  )
}

export default Navbar