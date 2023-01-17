import React, { Component } from 'react';
import logo from '../svg/logo-sas.svg';
import Notification from './Notification';

export default class HeaderComponent extends Component {
  render() {
    return (
        <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item d-none d-sm-inline-block">
        <a className="nav-link">
            <img src={logo} className="brand-image"/>
        </a>
      </li>
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* Messages Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-comments" />
          <span className="badge bg-primary navbar-badge">3</span>
        </a>
        <Notification/>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" role="button">
            <i class="fas fa-sign-out-alt"/>
        </a>
      </li>
    </ul>
  </nav>
  {/* /.navbar */}
  {/* Main Sidebar Container */}
  </div>

    )
  }
}
