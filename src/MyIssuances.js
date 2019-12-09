import React from 'react';
import './MyIssuances.css';

class MyIssuances extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div>
            <div className="rectangle"></div>
				<div className="add-issuance-button">
					<div className="text">
						<span>Add Issuance</span>
					</div>
					<div className="icon">
						<span className="vector"></span>
						<div className="rectangle"></div>
					</div>
				</div>
				<div className="filters-button">
					<div className="text">
						<span>Filters</span>
					</div>
					<div className="icon">
						<span className="vector"></span>
						<div className="rectangle"></div>
					</div>
				</div>
				<div className="table-header">
					<div className="header-1">
						<div className="text">
							<span>Name & Industry Type</span>
						</div>
					</div>
					<div className="header-2">
						<div className="text">
							<span>Issuance Type</span>
						</div>
						<div className="vector"></div>
					</div>
					<div className="header-3">
						<div className="text">
							<span>Target Raise</span>
						</div>
						<div className="vector"></div>
					</div>
					<div className="header-4">
						<div className="text">
							<span>Pre-Money Valuation</span>
						</div>
						<div className="vector"></div>
					</div>
					<div className="header-5">
						<div className="text">
							<span>Amount Raised</span>
						</div>
						<div className="vector"></div>
					</div>
					<div className="header-6">
						<div className="text">
							<span>Location</span>
						</div>
						<div className="vector"></div>
					</div>
					<div className="header-7">
						<div className="text">
							<span>Status</span>
						</div>
						<div className="vector"></div>
					</div>
				</div>
				<div className="issuance-row-1">
					<div className="colum-1">
						<div className="text-1">
							<span>Energy Infrastructure</span>
						</div>
						<div className="text-2">
							<span>Financial Services</span>
						</div>
					</div>
					<div className="colum-2">
						<div className="text">
							<span>Equity</span>
						</div>
					</div>
					<div className="colum-3">
						<div className="text">
							<span>$23M</span>
						</div>
					</div>
					<div className="colum-4">
						<div className="text">
							<span>$1M</span>
						</div>
					</div>
					<div className="colum-5">
						<div className="text">
							<span>$1M</span>
						</div>
					</div>
					<div className="colum-6">
						<div className="text">
							<span>Europe</span>
						</div>
					</div>
					<div className="colum-7">
						<div className="progress">
							<div className="ellipse"></div>
							<div className="text">
								<span>In Progress</span>
							</div>							
						</div>
					</div>
				</div>
				<div className="issuance-row-2">
					<div className="colum-1">
						<div className="text-1">
							<span>ABC</span>
						</div>
						<div className="text-2">
							<span>Financial Services</span>
						</div>
					</div>
					<div className="colum-2">
						<div className="text">
							<span>Investment Fund</span>
						</div>
					</div>
					<div className="colum-3">
						<div className="text">
							<span>$23M</span>
						</div>
					</div>
					<div className="colum-4">
						<div className="text">
							<span>$1M</span>
						</div>
					</div>
					<div className="colum-5">
						<div className="text">
							<span>$1M</span>
						</div>
					</div>
					<div className="colum-6">
						<div className="text">
							<span>U.S</span>
						</div>
					</div>
					<div className="colum-7">
						<div className="progress">
							<div className="ellipse"></div>
							<div className="text">
								<span>In Progress</span>
							</div>							
						</div>
					</div>
				</div>
				<div className="issuance-row-3">
					<div className="colum-1">
						<div className="text-1">
							<span>Alternative Gas Extraction</span>
						</div>
						<div className="text-2">
							<span>Space</span>
						</div>
					</div>
					<div className="colum-2">
						<div className="text">
							<span>Debt</span>
						</div>
					</div>
					<div className="colum-3">
						<div className="text">
							<span>$23M</span>
						</div>
					</div>
					<div className="colum-4">
						<div className="text">
							<span>$1M</span>
						</div>
					</div>
					<div className="colum-5">
						<div className="text">
							<span>$1M</span>
						</div>
					</div>
					<div className="colum-6">
						<div className="text">
							<span>U.S</span>
						</div>
					</div>
					<div className="colum-7">
						<div className="progress">
							<div className="ellipse"></div>
							<div className="text">
								<span>Closed</span>
							</div>							
						</div>
					</div>
				</div>
            </div>
    )
  }
}
export default MyIssuances;
             