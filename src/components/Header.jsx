import React from "react";

function Header() {
  return (
   
      <nav className="app-header navbar navbar-expand bg-body">
        {/*begin::Container*/}
        <div className="container-fluid">
          {/*begin::Start Navbar Links*/}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-list"></i>
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Home</a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Contact</a>
            </li>
          </ul>
          {/*end::Start Navbar Links*/}
          {/*begin::End Navbar Links*/}
          <ul className="navbar-nav ms-auto">
            {/*begin::Navbar Search*/}
            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" href="#" role="button" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-search"></i>
              </a>
            </li>
            {/*end::Navbar Search*/}
            {/*begin::Messages Dropdown Menu*/}
            <li className="nav-item dropdown">
              <a className="nav-link" data-bs-toggle="dropdown" href="#" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-chat-text"></i>
                <span className="navbar-badge badge text-bg-danger">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <a href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}>
                  {/*begin::Message*/}
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src="./assets/img/user1-128x128.jpg"
                        alt="User Avatar"
                        className="img-size-50 rounded-circle me-3"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-end fs-7 text-danger">
                          <i className="bi bi-star-fill"></i>
                        </span>
                      </h3>
                      <p className="fs-7">Call me whenever you can...</p>
                      <p className="fs-7 text-secondary">
                        <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/*end::Message*/}
                </a>
                <div className="dropdown-divider"></div>
                {/* ...repeat other messages (use className) ... */}
                <a href="#" className="dropdown-item dropdown-footer" onClick={(e) => e.preventDefault()}>
                  See All Messages
                </a>
              </div>
            </li>
            {/*end::Messages Dropdown Menu*/}
            {/*begin::Notifications Dropdown Menu*/}
            <li className="nav-item dropdown">
              <a className="nav-link" data-bs-toggle="dropdown" href="#" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-bell-fill"></i>
                <span className="navbar-badge badge text-bg-warning">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}>
                  <i className="bi bi-envelope me-2"></i> 4 new messages
                  <span className="float-end text-secondary fs-7">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}>
                  <i className="bi bi-people-fill me-2"></i> 8 friend requests
                  <span className="float-end text-secondary fs-7">12 hours</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer" onClick={(e) => e.preventDefault()}>
                  See All Notifications
                </a>
              </div>
            </li>
            {/*end::Notifications Dropdown Menu*/}
            {/*begin::Fullscreen Toggle*/}
            <li className="nav-item">
              <a className="nav-link" href="#" data-lte-toggle="fullscreen" onClick={(e) => e.preventDefault()}>
                <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen"></i>
                <i data-lte-icon="minimize" className="bi bi-fullscreen-exit" style={{ display: "none" }}></i>
              </a>
            </li>
            {/*end::Fullscreen Toggle*/}
            {/*begin::User Menu Dropdown*/}
            <li className="nav-item dropdown user-menu">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" onClick={(e) => e.preventDefault()}>
                <img
                  src="./assets/img/user2-160x160.jpg"
                  className="user-image rounded-circle shadow"
                  alt="User Image"
                />
                <span className="d-none d-md-inline">Alexander Pierce</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                {/*begin::User Image*/}
                <li className="user-header text-bg-primary">
                  <img
                    src="./assets/img/user2-160x160.jpg"
                    className="rounded-circle shadow"
                    alt="User Image"
                  />
                  <p>
                    Alexander Pierce - Web Developer
                    <small>Member since Nov. 2023</small>
                  </p>
                </li>
                {/*end::User Image*/}
                {/*begin::Menu Body*/}
                <li className="user-body">
                  {/*begin::Row*/}
                  <div className="row">
                    <div className="col-4 text-center"><a href="#" onClick={(e) => e.preventDefault()}>Followers</a></div>
                    <div className="col-4 text-center"><a href="#" onClick={(e) => e.preventDefault()}>Sales</a></div>
                    <div className="col-4 text-center"><a href="#" onClick={(e) => e.preventDefault()}>Friends</a></div>
                  </div>
                  {/*end::Row*/}
                </li>
                {/*end::Menu Body*/}
                {/*begin::Menu Footer*/}
                <li className="user-footer">
                  <a href="#" className="btn btn-default btn-flat" onClick={(e) => e.preventDefault()}>Profile</a>
                  <a href="#" className="btn btn-default btn-flat float-end" onClick={(e) => e.preventDefault()}>Sign out</a>
                </li>
                {/*end::Menu Footer*/}
              </ul>
            </li>
            {/*end::User Menu Dropdown*/}
          </ul>
          {/*end::End Navbar Links*/}
        </div>
        {/*end::Container*/}
      </nav>
     
  );
}

export default Header;
