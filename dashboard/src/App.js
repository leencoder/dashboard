import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="layout-top-nav light-skin theme-primary fixed">

      <div class="wrapper">
        <div id="loader"></div>

        <header class="main-header">
          <div class="inside-header">
            <div class="d-flex align-items-center logo-box justify-content-start">
              {/* <!-- Logo --> */}
              <a href="index.html" class="logo">
                {/* <!-- logo--> */}
                <div class="logo-lg">
                  <span class="light-logo"><img src="../../../images/logo-1.png" alt="logo" /></span>
                </div>
              </a>
            </div>
            {/* <!-- Header Navbar --> */}
            <nav class="navbar navbar-static-top">
              {/* <!-- Sidebar toggle button--> */}
              <div class="app-menu"></div>

              <div class="navbar-custom-menu r-side">
                <ul class="nav navbar-nav">
                  <li class="btn-group d-md-inline-flex d-none">
                    <div class="app-menu">
                      <div class="search-bx mx-5">
                        <form>
                          <div class="input-group">
                            <input type="search" class="form-control" placeholder="Search" />
                            <div class="input-group-append">
                              <button class="btn" type="submit" id="button-addon3"><i
                                class="icon-Search"><span class="path1"></span><span
                                  class="path2"></span></i></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown notifications-menu btn-group">
                    <a href="#" class="waves-effect waves-light btn-primary-light svg-bt-icon"
                      data-bs-toggle="dropdown" title="Notifications">
                      <i data-feather="bell"></i>
                      <div class="pulse-wave"></div>
                    </a>
                    <ul class="dropdown-menu animated bounceIn">
                      <li class="header">
                        <div class="p-20">
                          <div class="flexbox">
                            <div>
                              <h4 class="mb-0 mt-0">Notifications</h4>
                            </div>
                            <div>
                              <a href="#" class="text-danger">Clear All</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        {/* <!-- inner menu: contains the actual data --> */}
                        <ul class="menu sm-scrol">
                          <li>
                            <a href="#">
                              <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc
                              suscipit blandit.
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu
                              sapien elementum, in semper diam posuere.
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-users text-danger"></i> Donec at nisi sit amet
                              tortor commodo porttitor pretium a erat.
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-shopping-cart text-success"></i> In gravida mauris
                              et nisi
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero
                              dictum fermentum.
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-user text-primary"></i> Nunc fringilla lorem
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-user text-success"></i> Nullam euismod dolor ut quam
                              interdum, at scelerisque ipsum imperdiet.
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="footer">
                        <a href="#">View all</a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- User Account--> */}
                  <li class="dropdown user user-menu">
                    <a href="#"
                      class="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow align-content-center"
                      title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
                      <img src="../../../images/avatar/avatar-13.png"
                        class="avatar rounded-circle bg-primary-light h-40 w-40" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <aside class="main-sidebar" style={{ backgroundColor: '#0e0e23' }}>
          {/* <!-- sidebar--> */}
          <div class="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '572px', }}>
            <section class="sidebar position-relative" style={{ height: '572px', overflow: 'hidden', width: 'auto' }}>
              <div class="multinav">
                <div class="multinav-scroll ps ps--active-y" style={{ height: '99%' }}>
                  {/* <!-- sidebar menu--> */}
                  <ul class="sidebar-menu tree" data-widget="tree">
                    <li>
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-align-justify">
                          <line x1="21" y1="10" x2="3" y2="10"></line>
                          <line x1="21" y1="6" x2="3" y2="6"></line>
                          <line x1="21" y1="14" x2="3" y2="14"></line>
                          <line x1="21" y1="18" x2="3" y2="18"></line>
                        </svg>
                        <span>Performance</span>
                      </a>
                    </li>

                    <li class="treeview">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-headphones">
                          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                          <path
                            d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z">
                          </path>
                        </svg>
                        <span>Support</span>
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                          <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34">
                          </path>
                          <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                        </svg>
                        <span>Features</span>
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-pie-chart">
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                        </svg>
                        <span>Forms &amp; Charts</span>
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                        <span>Tables</span>
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-database">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                        <span>Apps &amp; Widgets</span>
                      </a>
                    </li>

                    <li class="treeview">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span>Authentication</span>
                      </a>
                      <ul class="treeview-menu">
                        <li>
                          <a href="auth_login.html" target="_blank" class="d-light"><i
                            class="icon-Commit"><span class="path1"></span><span
                              class="path2"></span></i>Login</a>
                        </li>
                        <li>
                          <a href="auth_register.html" target="_blank" class="d-light"><i
                            class="icon-Commit"><span class="path1"></span><span
                              class="path2"></span></i>Register</a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div class="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
                    <div class="ps__thumb-x" tabindex="0" style={{ left: '0px', width: '0px' }}></div>
                  </div>
                  <div class="ps__rail-y" style={{ top: '0px', height: '527px', right: '0px' }}>
                    <div class="ps__thumb-y" tabindex="0" style={{ top: '0px', height: '308px' }}></div>
                  </div>
                </div>
              </div>
            </section>
            <div class="slimScrollBar" style={{ background: 'rgba(0, 0, 0, 0.2)', width: '3px', position: 'absolute', top: '0px', opacity: '0.8', display: 'none', borderRadius: '7px', zIndex: '99', right: '3px', height: '572px' }} >
            </div>
            <div class="slimScrollRail"
              style={{ width: '3px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '3px' }}>
            </div>
          </div>
        </aside>
        <nav class="main-nav" role="navigation" style={{ left: '230px', borderBottom: 'none', width: '90%' }}>

          {/* <!-- Mobile menu toggle button (hamburger/x icon) --> */}
          <input id="main-menu-state" type="checkbox" />
          <label class="main-menu-btn" for="main-menu-state">
            <span class="main-menu-btn-icon"></span> Toggle main menu visibility
          </label>

          {/* <!-- Sample menu definition --> */}
          <ul id="main-menu" class="sm sm-blue d-flex justify-content-between">
            <li class="header-navmenu"><a href="index.html" class="link-navmenu"><i data-feather="home"><span
              class="path1"></span><span class="path2"></span></i>Project Name</a></li>
            <li class="header-navmenu"><a href="#" class="link-navmenu"><i
              class="fa-solid fa-eye"></i>Visibility</a>
              <ul>
                <li><a href="#" class="link-navmenu"><i class="icon-Commit"><span class="path1"></span><span
                  class="path2"></span></i>Everyone</a></li>
                <li><a href="#" class="link-navmenu"><i class="icon-Commit"><span class="path1"></span><span
                  class="path2"></span></i>Only Me</a></li>
              </ul>
            </li>

            <li class="header-navmenu"><a href="#" class="link-navmenu"><i data-feather="lock"></i>Login &amp;
              Error</a>
              <ul>
                <li><a href="#"><i class="icon-Commit"><span class="path1"></span><span
                  class="path2"></span></i>Authentication</a>
                  <ul>
                    <li>
                      <a href="#" class="d-light" target="_blank"><i class="icon-Commit"><span
                        class="path1"></span><span class="path2"></span></i>Login</a>
                    </li>
                    <li>
                      <a href="#" class="d-light" target="_blank"><i class="icon-Commit"><span
                        class="path1"></span><span class="path2"></span></i>Register</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="header-navmenu"><a href="#" class="link-navmenu"><i data-feather="mail"></i>Emails</a></li>
            <li class="face-avatar">
              <div class="avatars">
                <a href="#" class="avatars__item"><img class="avatar"
                  src="https://randomuser.me/api/portraits/women/65.jpg" alt="" /></a>
                <a href="#" class="avatars__item"><img class="avatar"
                  src="https://randomuser.me/api/portraits/men/25.jpg" alt="" /></a>
                <a href="#" class="avatars__item"><img class="avatar"
                  src="https://randomuser.me/api/portraits/women/25.jpg" alt="" /></a>
                <a href="#" class="avatars__item"><img class="avatar"
                  src="https://randomuser.me/api/portraits/men/55.jpg" alt="" /></a>
                <a href="#" class="avatars__item"><img class="avatar"
                  src="https://via.placeholder.com/300/09f/fff.png" alt="" /></a>
              </div>
            </li>
          </ul>

        </nav>

        {/* <!-- Content Wrapper. Contains page content --> */}
        <div class="content-wrapper" style={{ marginLeft: '18.5rem', width: 'auto' }}>
          <div class="container-full">
            {/* <!-- Content Header (Page header) --> */}

            {/* <!-- Main content --> */}
            <section class="content">

              <div class="row">

                <div class="col-12 col-xl-4">
                  <div class="box">
                    <div class="box-header with-border">
                      <h4 class="box-title">Tasks Overview</h4>
                      <ul class="box-controls pull-right">
                        <li class="dropdown">
                          <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                            class="ti-more-alt"></i></a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#"><i class="ti-import"></i> Import</a>
                            <a class="dropdown-item" href="#"><i class="ti-export"></i> Export</a>
                            <a class="dropdown-item" href="#"><i class="ti-printer"></i> Print</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                              Settings</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="box-body">
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Project Briefing</a>
                          <span class="text-fade fs-12">Project Manager</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a href="" class="px-10 pt-5" data-bs-toggle="modal"
                              data-bs-target="#task-one"><i class="ti-more-alt"></i>
                            </a>
                            <div class="modal fade" id="task-one" tabindex="-1"
                              aria-labelledby="task-oneLabel" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="task-oneLabel">
                                      Project Briefing</h1>
                                    <button type="button" class="btn-close"
                                      data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body d-flex">
                                    <div class="w-p80">
                                      <div>
                                        <i class="fa-solid fa-bars"></i>
                                        Description
                                      </div>
                                      <textarea></textarea>
                                    </div>
                                    <div class="w-p20">
                                      <button type="button">Members</button>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                      data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save
                                      changes</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Concept Design</a>
                          <span class="text-fade fs-12">Art Director</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Functional Logics</a>
                          <span class="text-fade fs-12">Sales Manager</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Development</a>
                          <span class="text-fade fs-12">Creative Head</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Testing</a>
                          <span class="text-fade fs-12">QA Managers</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-xl-4">
                  <div class="box">
                    <div class="box-header with-border">
                      <h4 class="box-title">Tasks Overview</h4>
                      <ul class="box-controls pull-right">
                        <li class="dropdown">
                          <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                            class="ti-more-alt"></i></a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#"><i class="ti-import"></i> Import</a>
                            <a class="dropdown-item" href="#"><i class="ti-export"></i> Export</a>
                            <a class="dropdown-item" href="#"><i class="ti-printer"></i> Print</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                              Settings</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="box-body">
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Project Briefing</a>
                          <span class="text-fade fs-12">Project Manager</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Concept Design</a>
                          <span class="text-fade fs-12">Art Director</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Functional Logics</a>
                          <span class="text-fade fs-12">Sales Manager</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Development</a>
                          <span class="text-fade fs-12">Creative Head</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Testing</a>
                          <span class="text-fade fs-12">QA Managers</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-xl-4">
                  <div class="box">
                    <div class="box-header with-border">
                      <h4 class="box-title">Tasks Overview</h4>
                      <ul class="box-controls pull-right">
                        <li class="dropdown">
                          <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                            class="ti-more-alt"></i></a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#"><i class="ti-import"></i> Import</a>
                            <a class="dropdown-item" href="#"><i class="ti-export"></i> Export</a>
                            <a class="dropdown-item" href="#"><i class="ti-printer"></i> Print</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                              Settings</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="box-body">
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Project Briefing</a>
                          <span class="text-fade fs-12">Project Manager</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Concept Design</a>
                          <span class="text-fade fs-12">Art Director</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Functional Logics</a>
                          <span class="text-fade fs-12">Sales Manager</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex align-items-center mb-8 justify-content-between">
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark mb-1 fs-16">Development</a>
                          <span class="text-fade fs-12">Creative Head</span>
                        </div>
                        <ul class="box-controls pull-right">
                          <li class="dropdown">
                            <a data-bs-toggle="dropdown" href="#" class="px-10 pt-5"><i
                              class="ti-more-alt"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#"><i class="ti-import"></i>
                                Import</a>
                              <a class="dropdown-item" href="#"><i class="ti-export"></i>
                                Export</a>
                              <a class="dropdown-item" href="#"><i class="ti-printer"></i>
                                Print</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#"><i class="ti-settings"></i>
                                Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.row --> */}

            </section>
            {/* <!-- /.content --> */}
          </div>
        </div>
        {/* <!-- /.content-wrapper --> */}

        <footer class="main-footer">
          <div class="pull-right d-none d-sm-inline-block">
            <ul class="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
              <li class="nav-item">
                <a class="nav-link" href="#" target="_blank">Purchase Now</a>
              </li>
            </ul>
          </div>
          &copy;
          <script>document.write(new Date().getFullYear())</script> <a
            href="https://www.ingeniousnetsoft.com/">Ingenious Net Soft</a>. All Rights Reserved.
        </footer>
        {/* <!-- Side panel --> */}
        {/* <!-- quick_user_toggle --> */}
        <div class="modal modal-right fade" id="quick_user_toggle" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content slim-scroll3">
              <div class="modal-body p-30 bg-white">
                <div class="d-flex align-items-center justify-content-between pb-30">
                  <h4 class="m-0">User Profile
                    <small class="text-fade fs-12 ms-5">12 messages</small>
                  </h4>
                  <a href="#" class="btn btn-icon btn-danger-light btn-sm no-shadow" data-bs-dismiss="modal">
                    <span class="fa fa-close"></span>
                  </a>
                </div>
                <div>
                  <div class="d-flex flex-row">
                    <div class=""><img src="../../../images/avatar/avatar-2.png" alt="user"
                      class="rounded bg-danger-light w-150" width="100" /></div>
                    <div class="ps-20">
                      <h5 class="mb-0">Nil Yeager</h5>
                      <p class="my-5 text-fade">Web Designer</p>
                      <a href="mailto:dummy@gmail.com"><span
                        class="icon-Mail-notification me-5 text-success"><span
                          class="path1"></span><span class="path2"></span></span>
                        dummy@gmail.com</a>
                      <button class="btn btn-success-light btn-sm mt-5"><i class="ti-plus"></i>
                        Follow</button>
                    </div>
                  </div>
                </div>
                <div class="dropdown-divider my-30"></div>
                <div>
                  <div class="d-flex align-items-center mb-8">
                    <div class="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center">
                      <span class="icon-Library fs-24"><span class="path1"></span><span
                        class="path2"></span></span>
                    </div>
                    <div class="d-flex flex-column fw-500">
                      <a href="extra_profile.html" class="text-dark hover-primary mb-1 fs-16">My
                        Profile</a>
                      <span class="text-fade">Account settings and more</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-8">
                    <div class="me-15 bg-danger-light h-50 w-50 l-h-60 rounded text-center">
                      <span class="icon-Write fs-24"><span class="path1"></span><span
                        class="path2"></span></span>
                    </div>
                    <div class="d-flex flex-column fw-500">
                      <a href="mailbox.html" class="text-dark hover-danger mb-1 fs-16">My Messages</a>
                      <span class="text-fade">Inbox and tasks</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-8">
                    <div class="me-15 bg-success-light h-50 w-50 l-h-60 rounded text-center">
                      <span class="icon-Group-chat fs-24"><span class="path1"></span><span
                        class="path2"></span></span>
                    </div>
                    <div class="d-flex flex-column fw-500">
                      <a href="setting.html" class="text-dark hover-success mb-1 fs-16">Settings</a>
                      <span class="text-fade">Accout Settings</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-8">
                    <div class="me-15 bg-info-light h-50 w-50 l-h-60 rounded text-center">
                      <span class="icon-Attachment1 fs-24"><span class="path1"></span><span
                        class="path2"></span><span class="path3"></span><span
                          class="path4"></span></span>
                    </div>
                    <div class="d-flex flex-column fw-500">
                      <a href="extra_taskboard.html" class="text-dark hover-info mb-1 fs-16">Project</a>
                      <span class="text-fade">latest tasks and projects</span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-divider my-30"></div>
                <div>
                  <div class="media-list">
                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">10:10</h4>
                      <div class="media-body ps-15 bs-5 rounded border-primary">
                        <p>Morbi quis ex eu arcu auctor sagittis.</p>
                        <span class="text-fade">by Johne</span>
                      </div>
                    </a>

                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">08:40</h4>
                      <div class="media-body ps-15 bs-5 rounded border-success">
                        <p>Proin iaculis eros non odio ornare efficitur.</p>
                        <span class="text-fade">by Amla</span>
                      </div>
                    </a>

                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">07:10</h4>
                      <div class="media-body ps-15 bs-5 rounded border-info">
                        <p>In mattis mi ut posuere consectetur.</p>
                        <span class="text-fade">by Josef</span>
                      </div>
                    </a>

                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">01:15</h4>
                      <div class="media-body ps-15 bs-5 rounded border-danger">
                        <p>Morbi quis ex eu arcu auctor sagittis.</p>
                        <span class="text-fade">by Rima</span>
                      </div>
                    </a>

                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">23:12</h4>
                      <div class="media-body ps-15 bs-5 rounded border-warning">
                        <p>Morbi quis ex eu arcu auctor sagittis.</p>
                        <span class="text-fade">by Alaxa</span>
                      </div>
                    </a>
                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">10:10</h4>
                      <div class="media-body ps-15 bs-5 rounded border-primary">
                        <p>Morbi quis ex eu arcu auctor sagittis.</p>
                        <span class="text-fade">by Johne</span>
                      </div>
                    </a>

                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">08:40</h4>
                      <div class="media-body ps-15 bs-5 rounded border-success">
                        <p>Proin iaculis eros non odio ornare efficitur.</p>
                        <span class="text-fade">by Amla</span>
                      </div>
                    </a>

                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">07:10</h4>
                      <div class="media-body ps-15 bs-5 rounded border-info">
                        <p>In mattis mi ut posuere consectetur.</p>
                        <span class="text-fade">by Josef</span>
                      </div>
                    </a>

                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">01:15</h4>
                      <div class="media-body ps-15 bs-5 rounded border-danger">
                        <p>Morbi quis ex eu arcu auctor sagittis.</p>
                        <span class="text-fade">by Rima</span>
                      </div>
                    </a>

                    <a class="media media-single px-0" href="#">
                      <h4 class="w-50 text-gray fw-500">23:12</h4>
                      <div class="media-body ps-15 bs-5 rounded border-warning">
                        <p>Morbi quis ex eu arcu auctor sagittis.</p>
                        <span class="text-fade">by Alaxa</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /quick_user_toggle --> */}


        {/* <!-- Control Sidebar --> */}
        <aside class="control-sidebar">

          <div class="rpanel-title"><span class="pull-right btn btn-circle btn-danger"
            data-toggle="control-sidebar"><i class="ion ion-close text-white"></i></span> </div>
          {/* <!-- Create the tabs --> */}
          <ul class="nav nav-tabs control-sidebar-tabs">
            <li class="nav-item"><a href="#control-sidebar-home-tab" data-bs-toggle="tab"><i
              class="mdi mdi-message-text"></i></a></li>
            <li class="nav-item"><a href="#control-sidebar-settings-tab" data-bs-toggle="tab"><i
              class="mdi mdi-playlist-check"></i></a></li>
          </ul>
          {/* <!-- Tab panes --> */}
          <div class="tab-content">
            {/* <!-- Home tab content --> */}
            <div class="tab-pane" id="control-sidebar-home-tab">
              <div class="flexbox">
                <a href="javascript:void(0)" class="text-grey">
                  <i class="ti-more"></i>
                </a>
                <p>Users</p>
                <a href="javascript:void(0)" class="text-end text-grey"><i class="ti-plus"></i></a>
              </div>
              <div class="lookup lookup-sm lookup-right d-none d-lg-block">
                <input type="text" name="s" placeholder="Search" class="w-p100" />
              </div>
              <div class="media-list media-list-hover mt-20">
                <div class="media py-10 px-0">
                  <a class="avatar avatar-lg status-success" href="#">
                    <img src="../../../images/avatar/1.jpg" alt="..." />
                  </a>
                  <div class="media-body">
                    <p class="fs-16">
                      <a class="hover-primary" href="#"><strong>Tyler</strong></a>
                    </p>
                    <p>Praesent tristique diam...</p>
                    <span>Just now</span>
                  </div>
                </div>

                <div class="media py-10 px-0">
                  <a class="avatar avatar-lg status-danger" href="#">
                    <img src="../../../images/avatar/2.jpg" alt="..." />
                  </a>
                  <div class="media-body">
                    <p class="fs-16">
                      <a class="hover-primary" href="#"><strong>Luke</strong></a>
                    </p>
                    <p>Cras tempor diam ...</p>
                    <span>33 min ago</span>
                  </div>
                </div>

                <div class="media py-10 px-0">
                  <a class="avatar avatar-lg status-warning" href="#">
                    <img src="../../../images/avatar/3.jpg" alt="..." />
                  </a>
                  <div class="media-body">
                    <p class="fs-16">
                      <a class="hover-primary" href="#"><strong>Evan</strong></a>
                    </p>
                    <p>In posuere tortor vel...</p>
                    <span>42 min ago</span>
                  </div>
                </div>

                <div class="media py-10 px-0">
                  <a class="avatar avatar-lg status-primary" href="#">
                    <img src="../../../images/avatar/4.jpg" alt="..." />
                  </a>
                  <div class="media-body">
                    <p class="fs-16">
                      <a class="hover-primary" href="#"><strong>Evan</strong></a>
                    </p>
                    <p>In posuere tortor vel...</p>
                    <span>42 min ago</span>
                  </div>
                </div>

                <div class="media py-10 px-0">
                  <a class="avatar avatar-lg status-success" href="#">
                    <img src="../../../images/avatar/1.jpg" alt="..." />
                  </a>
                  <div class="media-body">
                    <p class="fs-16">
                      <a class="hover-primary" href="#"><strong>Tyler</strong></a>
                    </p>
                    <p>Praesent tristique diam...</p>
                    <span>Just now</span>
                  </div>
                </div>

                <div class="media py-10 px-0">
                  <a class="avatar avatar-lg status-danger" href="#">
                    <img src="../../../images/avatar/2.jpg" alt="..." />
                  </a>
                  <div class="media-body">
                    <p class="fs-16">
                      <a class="hover-primary" href="#"><strong>Luke</strong></a>
                    </p>
                    <p>Cras tempor diam ...</p>
                    <span>33 min ago</span>
                  </div>
                </div>

                <div class="media py-10 px-0">
                  <a class="avatar avatar-lg status-warning" href="#">
                    <img src="../../../images/avatar/3.jpg" alt="..." />
                  </a>
                  <div class="media-body">
                    <p class="fs-16">
                      <a class="hover-primary" href="#"><strong>Evan</strong></a>
                    </p>
                    <p>In posuere tortor vel...</p>
                    <span>42 min ago</span>
                  </div>
                </div>

                <div class="media py-10 px-0">
                  <a class="avatar avatar-lg status-primary" href="#">
                    <img src="../../../images/avatar/4.jpg" alt="..." />
                  </a>
                  <div class="media-body">
                    <p class="fs-16">
                      <a class="hover-primary" href="#"><strong>Evan</strong></a>
                    </p>
                    <p>In posuere tortor vel...</p>
                    <span>42 min ago</span>
                  </div>
                </div>

              </div>

            </div>
            {/* <!-- /.tab-pane --> */}
            {/* <!-- Settings tab content --> */}
            <div class="tab-pane" id="control-sidebar-settings-tab">
              <div class="flexbox">
                <a href="javascript:void(0)" class="text-grey">
                  <i class="ti-more"></i>
                </a>
                <p>Todo List</p>
                <a href="javascript:void(0)" class="text-end text-grey"><i class="ti-plus"></i></a>
              </div>
              <ul class="todo-list mt-20">
                <li class="py-15 px-5 by-1">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_1" class="filled-in" />
                  <label for="basic_checkbox_1" class="mb-0 h-15"></label>
                  {/* <!-- todo text --> */}
                  <span class="text-line">Nulla vitae purus</span>
                  {/* <!-- Emphasis label --> */}
                  <small class="badge bg-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                  {/* <!-- General tools such as edit or delete--> */}
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_2" class="filled-in" />
                  <label for="basic_checkbox_2" class="mb-0 h-15"></label>
                  <span class="text-line">Phasellus interdum</span>
                  <small class="badge bg-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5 by-1">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_3" class="filled-in" />
                  <label for="basic_checkbox_3" class="mb-0 h-15"></label>
                  <span class="text-line">Quisque sodales</span>
                  <small class="badge bg-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_4" class="filled-in" />
                  <label for="basic_checkbox_4" class="mb-0 h-15"></label>
                  <span class="text-line">Proin nec mi porta</span>
                  <small class="badge bg-success"><i class="fa fa-clock-o"></i> 3 days</small>
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5 by-1">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_5" class="filled-in" />
                  <label for="basic_checkbox_5" class="mb-0 h-15"></label>
                  <span class="text-line">Maecenas scelerisque</span>
                  <small class="badge bg-primary"><i class="fa fa-clock-o"></i> 1 week</small>
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_6" class="filled-in" />
                  <label for="basic_checkbox_6" class="mb-0 h-15"></label>
                  <span class="text-line">Vivamus nec orci</span>
                  <small class="badge bg-info"><i class="fa fa-clock-o"></i> 1 month</small>
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5 by-1">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_7" class="filled-in" />
                  <label for="basic_checkbox_7" class="mb-0 h-15"></label>
                  {/* <!-- todo text --> */}
                  <span class="text-line">Nulla vitae purus</span>
                  {/* <!-- Emphasis label --> */}
                  <small class="badge bg-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                  {/* <!-- General tools such as edit or delete--> */}
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_8" class="filled-in" />
                  <label for="basic_checkbox_8" class="mb-0 h-15"></label>
                  <span class="text-line">Phasellus interdum</span>
                  <small class="badge bg-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5 by-1">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_9" class="filled-in" />
                  <label for="basic_checkbox_9" class="mb-0 h-15"></label>
                  <span class="text-line">Quisque sodales</span>
                  <small class="badge bg-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
                <li class="py-15 px-5">
                  {/* <!-- checkbox --> */}
                  <input type="checkbox" id="basic_checkbox_10" class="filled-in" />
                  <label for="basic_checkbox_10" class="mb-0 h-15"></label>
                  <span class="text-line">Proin nec mi porta</span>
                  <small class="badge bg-success"><i class="fa fa-clock-o"></i> 3 days</small>
                  <div class="tools">
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </aside>

        <div class="control-sidebar-bg"></div>


      </div >
    </div >
  );
}

export default App;
