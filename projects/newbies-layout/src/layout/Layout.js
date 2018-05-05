import React from 'react';
import './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout-container">
        <div className="layout-side">{this.props.side}</div>
        <div className="layout-main">{this.props.main}</div>
      </div>
    );
  }
}

export default Layout;
