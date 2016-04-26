'use strict';

var ShippingBox = React.createClass({
  render: function() {
    return (
      <div className="shipping">        
        <ShippingTable/>        
      </div>
    );
  }
});

var ShippingTable = React.createClass({
  render: function() {
    return (
      <div className="shippingTable">
        <table>
		<th>Cliente</th>
		<th>End</th>
		<th>Produto</th>
		<tr>
		<td>Arnaldo Silva</td>
		<td>Rua Duarte Fagundes, 80</td>
		<td>SmartTV Samsung</td>
		</tr>
		<tr>
		<td>Arnaldo Silva</td>
		<td>Rua Duarte Fagundes, 80</td>
		<td>SmartTV Samsung</td>
		</tr>
		<tr>
		<td>Arnaldo Silva</td>
		<td>Rua Duarte Fagundes, 80</td>
		<td>SmartTV Samsung</td>
		</tr>
		<tr>
		<td>Arnaldo Silva</td>
		<td>Rua Duarte Fagundes, 80</td>
		<td>SmartTV Samsung</td>
		</tr>
        </table>
      </div>
    );
  }
});

ReactDOM.render(
	<ShippingBox />,
	document.getElementById('shipping')
);