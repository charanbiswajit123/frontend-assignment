import React from 'react';
import './SidebarMenu.css';

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div className="menu">
            <div className="logo"></div>
            <div className="first-nav">
                <div className="rectangle"></div>
                <div className="text">
                    <span>Deal Room</span>
                </div>
            </div>
            <div className="second-nav">
                <div className="rectangle"></div>
                <div className="text">
                    <span>Broker-Dealer Registry</span>
                </div>
            </div>
            <div className="third-nav">
                <div className="rectangle"></div>
                <div className="text">
                    <span>Issuance Statistics</span>
                </div>
            </div>
            <div className="support">
                <div className="text">
                    <span>Contact us if you have questions:</span><br/>
                    <span><a>support@liquidity.digital</a></span>
                </div>
                <div className="border"></div>
            </div>
        </div>
    )
  }
}
export default SidebarMenu;
             