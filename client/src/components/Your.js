import React, { Component } from 'react'
export class Your extends Component {
    render() {
		return (
			<div className="col-md-12">				
				<hr className="my-4"/>
				<h5>Your Products</h5>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th scope="col">Nomor</th>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
						</tr>
					</thead>
					<tbody>
						{this.props.products.filter(p => p.owner === this.props.account).length > 0
							? this.props.products
								.filter(p => p.owner === this.props.account)
								.map((product, key) => {
								return (
									<tr key={key}>
										<th scope="row">{key+1}</th>
										<td>{product.name}</td>
										<td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</td>
									</tr>
								)
								})
							: <tr><td colSpan="3" className="text-center">You not have any products yet.</td></tr>
						}
					</tbody>
				</table>
			</div>
		)







    }

}
export default Your