import React, { Component } from 'react'

export default class MenuComponent extends Component {
  render() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar" style={{overflowY: 'auto'}}>
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <p>CCV</p>
                    </a>
                    </li>
                </ul>
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <p> Monsieur-Max </p>
                    </a>
                    </li>
                </ul>
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <p> Rieker </p>
                    </a>
                    </li>
                </ul>
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <p> Mustang </p>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
        </aside>
    )
  }
}
