import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import './Tab.css';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

handleClick = () => {
    $( document ).ready(function() {
        $(".section-name").click(function(){
            $(".section-name.active").removeClass("active");
            $(this).addClass("active");
        });
    });
}
  render() {
    return (
                <div className="tabs">
					<div className="line"></div>
					<div className="section-1">
                    <div className="colored-line"></div>
						<div className="section-name active" onClick={this.handleClick}>
							<Link to="/" >External Issuances</Link>
                            <div className="colored-line"></div>
						</div>
					</div>
					<div className="section-2">
                    <div className="colored-line"></div>
						<div className="section-name" onClick={this.handleClick}>
                            <Link to="favoriteissuances">Favorite Issuances</Link>
                            <div className="colored-line"></div>
						</div>
					</div>
					<div className="section-3">
						<div className="section-name" onClick={this.handleClick}>
                            <Link to="myissuances">My Issuances</Link>
                            <div className="colored-line"></div>
						</div>
					</div>
					<div className="section-4">
                    <div className="colored-line"></div>
						<div className="section-name" onClick={this.handleClick}>
                            <Link to="mndamanagement">MNDA Management</Link>
                            <div className="colored-line"></div>
						</div>
					</div>
				</div>
            )
  }
}
export default Tab;
             