import React, { Component } from 'react'

export class Sell extends Component {
	render() {
		return (
			<div className="col-md-12">
				<div className="col-md-4">
					<h1>Sell Product</h1>
					<form 
						onSubmit={(event) => {
							event.preventDefault()
							const name = this.productName.value
							const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
							this.props.createProduct(name, price)
						}}>
						<div className="form-group mr-sm-2">
							<label htmlFor="productName">Product Name</label>
							<input
							id="productName"
							type="text"
							ref={(input) => { this.productName = input }}
							className="form-control"
							placeholder="iPhone 12 Pro"
							required />
						</div>
						<div className="form-group mr-sm-2">
							<label htmlFor="productPrice">Product Price</label>
							<input
							id="productPrice"
							type="text"
							ref={(input) => { this.productPrice = input }}
							className="form-control"
							placeholder="1.2"
							required />
						</div>
						<button type="submit" className="btn btn-info">Submit</button>
					</form>
				</div>				
			</div>
		)
	}
}

export default Sell
