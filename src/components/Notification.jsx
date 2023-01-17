import React, { Component } from 'react';
import CCVlogo from '../svg/ccv-logo.svg';
import Mmaxlogo from '../svg/large-logo-rieker-new.svg';
import Riekerlogo from '../svg/logoMrMax.svg';

export default class Notification extends Component {
  render() {
    return (
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
            <div className="media">
                <img src={CCVlogo} alt="User Avatar" className="img-size-50 mr-3" />
                <div className="media-body">
                <h3 className="dropdown-item-title">
                    New Click and Collect
                </h3>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                </div>
            </div>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
            <div className="media">
                <img src={Mmaxlogo} alt="User Avatar" className="img-size-50 mr-3" />
                <div className="media-body">
                <h3 className="dropdown-item-title">
                    New Commande
                </h3>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 2 Hours Ago</p>
                </div>
            </div>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
            <div className="media">
                <img src={Riekerlogo} alt="User Avatar" className="img-size-50 mr-3" />
                <div className="media-body">
                <h3 className="dropdown-item-title">
                    New Commande
                </h3>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 1 Hours Ago</p>
                </div>
            </div>
            </a>
            <div className="dropdown-divider" />
      </div>
    )
  }
}
